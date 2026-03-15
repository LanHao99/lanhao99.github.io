param(
    [Parameter(Mandatory = $true)]
    [string]$Folder,
    [string]$BaseUrl = $(if ($env:KVAULT_BASE_URL) { $env:KVAULT_BASE_URL } else { "https://img.lanhao.cc" }),
    [string]$Token = $env:KVAULT_TOKEN
)

$ErrorActionPreference = "Continue"

if ([string]::IsNullOrWhiteSpace($Token)) {
    throw "KVAULT_TOKEN is empty. Set it in environment variables first."
}

if (-not (Test-Path -LiteralPath $Folder)) {
    throw "Folder not found: $Folder"
}

$root = (Resolve-Path -LiteralPath $Folder).Path
$files = Get-ChildItem -LiteralPath $root -Recurse -File
$results = @()

foreach ($f in $files) {
    $fullPath = $f.FullName
    $curlPath = $fullPath -replace "\\", "/"
    $rel = $fullPath.Substring($root.Length).TrimStart("\\", "/")

    $raw = curl.exe -sS -X POST "$BaseUrl/api/v1/upload" -H "Authorization: Bearer $Token" -F "file=@$curlPath"

    $obj = $null
    try {
        $obj = $raw | ConvertFrom-Json
    } catch {
        $obj = [pscustomobject]@{ success = $false; error = [pscustomobject]@{ message = "Invalid JSON response" } }
    }

    if ($obj.success) {
        $results += [pscustomobject]@{
            file = $rel
            ok = $true
            id = $obj.file.id
            download = $obj.links.download
            share = $obj.links.share
            delete = $obj.links.delete
        }
    } else {
        $msg = if ($obj.error -and $obj.error.message) { $obj.error.message } else { "Unknown API error" }
        $results += [pscustomobject]@{
            file = $rel
            ok = $false
            error = $msg
        }
    }
}

$results | ConvertTo-Json -Depth 6
