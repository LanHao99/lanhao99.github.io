# Copilot Workflow Instructions

When the user asks to upload or publish blog content, prefer these skills:

1. imgbed-upload
- Use for: image hosting upload, getting links, batch upload.
- Trigger keywords: 图床上传, 上传图片, 获取图链, kvault.

2. twilight-press-file
- Use for: creating post markdown with file/folder workflow. Prefer folder mode for complex posts and multi-post tasks.
- Trigger keywords: 上传博客, 发布文章, press/file, press/folder, 单文件方案, 文件夹方案, 多篇文章.

Recommended order for blog publishing:
1) Upload images and get links with imgbed-upload.
2) Create/update post content with twilight-press-file (prefer folder mode).
3) Replace local image paths with hosted links when needed.
