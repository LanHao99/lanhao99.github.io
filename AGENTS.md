# AGENTS.md

## Project Overview

Astro 5 + Svelte 5 personal blog (Twilight/Adastra template). Deployed to GitHub Pages. Site: `https://site.lanhao.cc/`

## Core Task: Article Migration

Primary workflow: copy articles from external sources into `src/content/posts/`, matching the existing frontmatter format.

### Post Frontmatter Template

```yaml
---
title: 文章标题
published: 2026-07-15
description: 简短描述
cover: ''          # 图床URL或/public路径，先上传图床
coverInContent: false
pinned: false
tags: [标签1, 标签2]
category: 分类名    # 或多级: [一级, 二级]
author: LanHao
licenseName: CC BY-NC-SA 4.0
sourceLink: ""     # 原文链接
draft: false
---
```

- File path: `src/content/posts/<分类>/<slug>.md`
- Use `pnpm new-post -- <filename>` to scaffold (creates in `src/content/posts/` root only)
- Subdirectories are created automatically by the script

### Directory Structure for Posts

```
src/content/posts/
  科普/           # 科普类
  医学/           # 医学类
  AI/             # AI相关
  guide/          # 指南
  dialogue_manager/ # Godot对话系统文档
  schema/         # 模板示例
  video/          # 视频相关
```

## Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Dev server (runs generate-icons.js first)
pnpm build        # Production build (includes Pagefind index)
pnpm preview      # Preview production build
pnpm lint         # Biome check + auto-fix on ./src
pnpm format       # Biome format on ./src
pnpm check        # Astro diagnostics
pnpm type-check   # TypeScript check
```

## Code Style

- **Formatter**: Biome, tab indentation, double quotes for JS/TS
- **Lint**: `pnpm lint` before committing (Biome auto-fixes)
- Svelte/Astro files have relaxed lint rules (const/import warnings off)

## Key Config Files

- `twilight.config.yaml` — site config (theme, navbar, sidebar, profile, etc.)
- `astro.config.mjs` — Astro integrations, markdown plugins, Vite config
- `biome.json` — linter/formatter rules
- `src/config.ts` — site config TS export
- `_frontmatter.json` — Front Matter CMS schema

## Git & Deployment

- GitHub Actions deploys on push (static build, no adapter)
- Branch: `main`

## Content Notes

- Markdown supports: math (KaTeX), mermaid diagrams, GitHub admonitions (`:::warning` etc.), custom directives (`:github[repo]`, `:music[...]`)
- Expressive Code for syntax highlighting (github-light/github-dark themes)
- Images: prefer external URLs (图床) for covers; article inline images go to `public/media/<分类>/`, referenced as `/media/<分类>/image.png` in markdown
- `draft: true` hides post from site
