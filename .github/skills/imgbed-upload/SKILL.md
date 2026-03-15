---
name: imgbed-upload
description: "Upload images/files to img.lanhao.cc and return direct links. Use when user says: 图床上传, 上传图片, 获取图链, kvault upload, image host link."
argument-hint: "file path or folder path"
user-invocable: true
---

# Image Bed Upload

Use this skill to upload one or many local files to the image bed and return links.

## When To Use
- User asks to upload images to img.lanhao.cc.
- User asks to get direct links or share links after upload.
- User asks for batch upload of a folder.

## Inputs
- Local file path or folder path.
- Token from environment variable KVAULT_TOKEN.
- Optional base URL from KVAULT_BASE_URL (default: https://img.lanhao.cc).

## Procedure
1. Validate input path exists.
2. For single file upload, run [upload-image.ps1](./scripts/upload-image.ps1).
3. For folder upload, run [upload-folder.ps1](./scripts/upload-folder.ps1).
4. Return both download and share links when available.
5. If API returns auth errors, verify token format and retry with Bearer auth.

## Commands
Single file:
PowerShell: ./.github/skills/imgbed-upload/scripts/upload-image.ps1 -Path "public/assets/images/avatar.jpg"

Single file (share link):
PowerShell: ./.github/skills/imgbed-upload/scripts/upload-image.ps1 -Path "public/assets/images/avatar.jpg" -UseShareLink

Folder (recursive):
PowerShell: ./.github/skills/imgbed-upload/scripts/upload-folder.ps1 -Folder "public/assets/images"

## Notes
- Script uses Authorization: Bearer <token>.
- For security, keep token in .env and do not hardcode secrets in markdown.
- API endpoint: /api/v1/upload
