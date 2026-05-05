---
title: 模板指南 - 快速开始
published: 2001-10-02
description: 如何使用这个博客模板。
cover: https://img.lanhao.cc/file/AgACAgUAAxkDAAMYabZPCrylXWbzIznfEAdAOF0MYzUAAmgPaxv3Z7BV4aSDV7c4YlABAAMCAAN3AAM6BA.jpg
coverInContent: false
pinned: false
tags: []
category:
  - 指南:
      - 快速开始
draft: false
---


提示：本指南未覆盖的内容，你可以在 [Astro 文档](https://docs.astro.build/) 中找到答案。


## 文章 Frontmatter

```yaml
---
title: 我的第一篇博客
published: 2020-02-02
description: 这是我新 Astro 博客的第一篇文章。
cover: https://img.lanhao.cc/file/AgACAgUAAxkDAAMYabZPCrylXWbzIznfEAdAOF0MYzUAAmgPaxv3Z7BV4aSDV7c4YlABAAMCAAN3AAM6BA.jpg
coverInContent: false
tags: []
category: 指南
comment: true
draft: false
---
```


| 字段 | 说明 |
|------------------|------------------|
| `title`          | 文章标题。 |
| `published`      | 文章发布日期。 |
| `pinned`         | 是否置顶到文章列表顶部。 |
| `description`    | 文章简介，会显示在索引页。 |
| `cover`          | 文章封面路径。<br/>1. 以 `http://` 或 `https://` 开头：网络图片<br/>2. 以 `/` 开头：`public` 目录下图片<br/>3. 不带上述前缀：相对当前 Markdown 文件路径 |
| `coverInContent` | 是否在正文中显示封面图。 |
| `tags`           | 文章标签。 |
| `category`       | 文章分类。<br/>1. 单分类：`category: 指南`<br/>2. 多级分类：`category: [指南, 快速开始]` |
| `licenseName`    | 文章内容许可名称。 |
| `author`         | 文章作者。 |
| `sourceLink`     | 文章来源或参考链接。 |
| `comment`        | 是否开启评论，默认 `true`。 |
| `draft`          | 是否草稿。草稿不会展示在站点中。 |


## 文章文件放在哪里

文章文件应放在 `src/content/posts/` 目录下。你也可以通过子目录组织文章和资源文件。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.jpg
    └── index.md
```