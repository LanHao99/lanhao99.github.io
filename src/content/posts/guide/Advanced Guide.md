---
title: 模板指南 - 高级自定义
published: 2024-02-10
description: "掌握 Twilight 模板的高级功能与自定义配置。"
cover: ""
coverInContent: false
pinned: false
tags: []
category:
    - 指南:
        - 高级自定义
draft: false
---


这篇指南会介绍 Twilight 模板中的高级自定义能力，从全局配置到扩展 Markdown 功能。


## 全局配置

`twilight.config.yaml` 是博客配置的核心文件。下面是一些常用的高级选项：

### 站点与本地化

- **语言与翻译**：通过 `site.translate.enable` 启用客户端翻译。你可以选择不同翻译服务并配置自动检测。

- **自定义字体**：在 `site.font` 下提供 CSS 链接或本地路径，即可接入你自己的字体。

### 视觉效果

- **主题色**：通过 `site.themeColor.hue`（0-360）调整博客主色调。

- **壁纸模式**：可选 `banner`、`fullscreen` 或 `none`。还可启用 `carousel` 轮播，并配合 `kenBurns` 动效。

- **波纹效果**：通过 `site.wallpaper.banner.waves.enable` 控制 Banner 水波纹动画。

- **粒子效果**：通过 `particle.enable` 开启背景浮动粒子。

### UI

- **导航栏透明度**：将 `site.wallpaper.banner.navbar.transparentMode` 设为 `semi`、`full` 或 `semifull`。

- **侧栏组件**：在 `sidebar.components` 中重排或开关 `profile`、`announcement`、`categories`、`tags`、`toc`、`statistics` 等模块。


## Markdown 扩展

### GitHub 仓库卡片

你可以插入指向 GitHub 仓库的动态卡片。页面加载时会通过 GitHub API 拉取仓库信息。

::github{repo="Spr-Aachen/Twilight"}

使用 `::github{repo="Spr-Aachen/Twilight"}` 即可创建 GitHub 仓库卡片。

```markdown
::github{repo="Spr-Aachen/Twilight"}
```

### 音乐卡片

- 在线资源
::music{meting="https://api.i-meto.com/meting/api?server=netease&type=song&id=1390882521"}

```markdown
::music{meting="https://api.i-meto.com/meting/api?server=netease&type=song&id=1390882521"}
```

- 本地资源
::music{title="深海之息" artist="Youzee Music" cover="https://p1.music.126.net/PhKOqFtljgHDDpKYM2ADUA==/109951169858309716.jpg" audio="assets/music/深海之息.m4a" lrc="assets/music/深海之息.lrc"}

```markdown
::music{title="深海之息" artist="Youzee Music" cover="https://p1.music.126.net/PhKOqFtljgHDDpKYM2ADUA==/109951169858309716.jpg" audio="assets/music/深海之息.m4a" lrc="assets/music/深海之息.lrc"}
```

### 提示块（Admonitions）

支持以下类型：`note` `tip` `important` `warning` `caution`

:::note
强调即使在快速浏览时也应该关注的信息。
:::

:::tip
提供可选信息，帮助读者更顺利地完成操作。
:::

:::important
关键说明，读者若忽略可能无法成功完成任务。
:::

:::warning
存在潜在风险、需要立即关注的重要内容。
:::

:::caution
某些操作可能带来的负面后果提示。
:::

- **基础语法**

    ```markdown
    :::note
    强调即使在快速浏览时也应该关注的信息。
    :::

    :::tip
    提供可选信息，帮助读者更顺利地完成操作。
    :::
    ```

- **自定义标题**

    提示块的标题可以自定义。
    :::note[MY CUSTOM TITLE]
    这是一个带自定义标题的 note。
    :::
    ```markdown
    :::note[MY CUSTOM TITLE]
    这是一个带自定义标题的 note。
    :::
    ```

- **GitHub 语法**

    > [!TIP]
    > 同样支持 [GitHub 提示块语法](https://github.com/orgs/community/discussions/16925)。
    ```markdown
    > [!TIP]
    > 也支持 GitHub 的提示块语法。
    ```

- **剧透（Spoiler）**

    你可以在文本中加入剧透内容，并且支持 **Markdown** 语法。

    这段内容 :spoiler[被隐藏了 **ayyy**]！
    ```markdown
    这段内容 :spoiler[被隐藏了 **ayyy**]！
    ```

---

更多说明请查看[官方文档](https://docs.twilight.spr-aachen.com)。