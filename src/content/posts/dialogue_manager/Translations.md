---
title: "翻译与多语言支持"
published: 2026-06-18
pinned: false
description: "Dialogue Manager 翻译与多语言功能"
cover: ""
coverInContent: false
tags:
  - dialogue manager
  - godot
  - gdscript
category: guide
licenseName: none
author: LanHao
sourceLink: "https://github.com/nathanhoad/godot_dialogue_manager"
draft: false
---

# 翻译

默认情况下，所有对话和响应提示都会通过 Godot 的 `tr` 函数来提供翻译。

对话中的翻译工作方式会略有不同，具体取决于你使用的是 CSV 文件还是 PO 文件来定义翻译短语。

默认情况下，Dialogue Manager 会尝试根据你在区域设置项目设置中配置的文件来猜测你使用的是哪一种。如果找到 PO 文件，则会假定你使用的是 PO 文件。如果没有，则会退而假定你使用 CSV。

你可以通过将 `DialogueManager.translation_source` 设置为 `DialogueManager.TranslationSource` 提供的值之一来覆盖此行为。`None` 会完全关闭翻译，这意味着你需要自己处理翻译。`CSV` 告诉 Dialogue Manager 你使用 CSV 进行翻译。`PO` 告诉它你使用 PO 文件进行翻译。`Guess` 是默认行为，会尝试猜测是 CSV 还是 PO。

## 对话中的静态行 ID

对话行和响应行可以通过 `[ID:SOME_KEY]` 的形式为每行指定一个唯一 ID，其中 "SOME_KEY" 是标识该行/响应的唯一字符串。

例如：

```
Nathan: Hi! I'm Nathan. [ID:HI_IM_NATHAN]
Coco: Meow. [ID:MEOW]
```

静态行 ID 在你需要将对话行与配音对话进行匹配时非常有用。

> [!IMPORTANT]
> 运行时标签/bbcode（例如 `[next=auto]`、`[wave]` 等）是对话行的一部分，因此在任何翻译中都应包含它们。_

## 生成用于翻译的 POT/gettext 或 CSV 文件

所有 `.dialogue` 文件都会自动添加到 **项目设置 > 本地化** 中的模板生成列表中，以便它们被包含在通用翻译导出中。

![将对话文件添加到模板生成列表](/media/dialogue_manager/translations.png)

> [!NOTE]
> 如果对话行中存在静态行 ID，该键将用作该行的 POT 上下文，而对话内容本身将作为实际的 POT 键。_

从这里你可以导出为 gettext 的 PO 模板或 CSV。

## 为翻译人员添加注释

为未来的翻译人员提供上下文至关重要。如你所知，在 gettext 文件中，以 `#. TRANSLATORS:` 开头的行用作翻译人员的注释。要实现此行为，你可以在对话行之前添加以 `##` 开头的行，这将在你的 `POT` 和 `PO` 文件中作为翻译人员的特殊注释。

_注意：此行为由 Godot 本身实现_

```
## This is the first time that Nathan meets Coco
Nathan: Hi! I'm Nathan. [ID:HI_IM_NATHAN]
Coco: Moew. [ID:MEOW]
```

```
#. TRANSLATORS: This is the first time that Nathan meets Coco
#: [path to the dialogue file]nathan_meets_coco.dialogue
msgctxt "HI_IM_NATHAN"
msgid "Hi! I'm Nathan."
```
