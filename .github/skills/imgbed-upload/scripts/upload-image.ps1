param(
    [Parameter(Mandatory = $true)]
    [string]$Path,
    [string]$BaseUrl = $(if ($env:KVAULT_BASE_URL) { $env:KVAULT_BASE_URL } else { "https://img.lanhao.cc" }),
    [string]$Token = $env:KVAULT_TOKEN,
    [switch]$UseShareLink
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($Token)) {
    throw "KVAULT_TOKEN is empty. Set it in environment variables first."
}

if (-not (Test-Path -LiteralPath $Path)) {
    throw "File not found: $Path"
}

$file = Get-Item -LiteralPath $Path
if ($file.PSIsContainer) {
    throw "Path is a folder. Use upload-folder.ps1 for directory uploads."
}

$fullPath = (Resolve-Path -LiteralPath $Path).Path
$curlPath = $fullPath -replace "\\", "/"
$uploadUrl = "$BaseUrl/api/v1/upload"

$raw = curl.exe -sS -X POST "$uploadUrl" -H "Authorization: Bearer $Token" -F "file=@$curlPath"
if ($LASTEXITCODE -ne 0) {
    throw "curl upload failed"
}

$obj = $raw | ConvertFrom-Json
if (-not $obj.success) {
    $msg = if ($obj.error -and $obj.error.message) { $obj.error.message } else { "Unknown API error" }
    throw "Upload failed: $msg"
}

$result = [pscustomobject]@{
    file = $file.Name
    id = $obj.file.id
    download = $obj.links.download
    share = $obj.links.share
    delete = $obj.links.delete
}

if ($UseShareLink) {
    Write-Output $result.share
} else {
    $result | ConvertTo-Json -Depth 4
}
