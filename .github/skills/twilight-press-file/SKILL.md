---
name: twilight-press-file
description: "Create and publish Twilight blog posts using file or folder workflow. Prioritize folder mode for complex or multi-post writing according to https://docs.twilight.spr-aachen.com/press/folder/."
argument-hint: "single or batch post metadata: title, slug, description, date, tags, category, mode(file|folder)"
user-invocable: true
---

# Twilight Press (File + Folder)

Use this skill to create Twilight blog posts in two modes:

- Folder mode (recommended): one folder per post, ideal for posts with images/assets.
- File mode: single markdown file, suitable for simple plain-text posts.

References:

- https://docs.twilight.spr-aachen.com/press/folder/
- https://docs.twilight.spr-aachen.com/press/file/

## When To Use

- User asks to publish/upload a blog post.
- User asks to create one or multiple posts.
- User asks for press/folder, 多篇文章, 文件夹方案.
- User asks to create article markdown in single-file mode.
- User needs frontmatter with required fields for Twilight.

## Mode Selection Rules

- Prefer folder mode by default.
- Must use folder mode when:
	- User requests multiple posts in one task.
	- Post includes many local resources (images/files/data).
	- User explicitly asks for press/folder.
- Use file mode only when user explicitly asks for press/file or simple single-file draft.

## Folder Mode Procedure (Recommended)

1. Collect metadata for one or many posts: title, slug, description, date, tags, category, draft, author.
2. For each post create: src/content/posts/<slug>/
3. Create markdown file: src/content/posts/<slug>/index.md
4. Start from [post-folder-template.md](./assets/post-folder-template.md).
5. Fill frontmatter. `title` and `description` are required.
6. Keep cover in the same folder and use relative path in frontmatter:
	 - image.url: './cover.jpg'
	 - image.alt: meaningful description
7. Put post-related resources in the same folder (image1.png, image2.jpg, data.json...).
8. In markdown body, prefer direct relative resource names for local assets (for RSS path compatibility), for example:
	 - ![示例图](image1.png)
9. If user asks to use image bed links, call skill imgbed-upload and replace image refs with hosted URLs.
10. Return preview path for each post: /posts/<slug>

## File Mode Procedure (Fallback)

1. Collect required metadata: title, description, slug.
2. Build file path: src/content/posts/<slug>.md
3. Start from [post-template.md](./assets/post-template.md).
4. Fill frontmatter and markdown content.
5. If post contains local images and user requests hosted links, upload via skill imgbed-upload and replace URLs.
6. Save file and verify required fields exist.
7. Return preview URL: /posts/<slug>

## Batch (Create Multiple Posts)

For batch creation, repeat the folder workflow per post and ensure structure like:

src/content/posts/
	<slug-a>/
		index.md
		cover.jpg
	<slug-b>/
		index.md
		image1.png
		image2.png

Output checklist for batch:

- All folders created.
- Every post has index.md.
- Every frontmatter contains title + description.
- Preview links are listed for every slug.

## Required Frontmatter

- title
- description

## Common Optional Fields

- published
- pubDate
- date
- draft
- tags
- category
- image.url
- image.alt
- author
- licenseName
- sourceLink

## Frontmatter Best Practices

- Date format: YYYY-MM-DD.
- For publish-ready posts set draft: false.
- Use specific tags and stable category naming.
- Folder mode cover best practice:
	- image.url: './cover.jpg'
	- image.alt: clear, descriptive text

## Output Rules

- Keep date format as YYYY-MM-DD.
- Ensure draft is false for publish-ready posts.
- If user did not request hosted images, preserve folder-local relative image paths.
- If user requested hosted images, upload first, then replace all mentions consistently.
- For multi-post tasks, return a concise list: post folder, created files, preview URL.
