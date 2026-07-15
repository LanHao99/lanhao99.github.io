---
title: "如何使用对话"
published: 2026-06-18
pinned: false
description: "Dialogue Manager 核心使用流程"
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

# 在游戏中使用对话

在游戏中显示对话最简单的方式是调用 [`DialogueManager.show_dialogue_balloon(resource, cue)`](https://site.lanhao.cc/posts/dialogue_manager/api/#func-show_dialogue_balloonresource-dialogueresource-cue-string--0-extra_game_states-array-----node)，传入一个对话资源和一个起始提示（cue）。默认情况下会显示示例气泡，但你可以在[设置](https://site.lanhao.cc/posts/dialogue_manager/settings/)中配置为显示你的自定义气泡。

对话的渲染和输入控制需要你根据自己的游戏需求来实现和定制。不过，[我的 Itch.io 页面](https://nathanhoad.itch.io)上有一些示例项目可以帮助你入门。

当你开始构建自己的气泡时，你需要了解如何获取一行对话以及如何使用对话提示节点。

## 获取对话行

提供了一个名为 `DialogueManager` 的全局对象来获取对话行。

要请求一行对话，可以调用 `await DialogueManager.get_next_dialogue_line(resource, cue)`，传入一个对话资源（*.dialogue 文件）和一个起始提示（也可以直接在资源上调用 `get_next_dialogue_line`，见下文）。这将遍历每一行（沿途执行变更操作），并返回第一个可打印的对话行。

例如，如果你有如下对话：

```
~ start

Nathan: Hi! I'm Nathan.
Nathan: Here are some options.
- First one
	Nathan: You picked the first one.
- Second one
	Nathan: You picked the second one.
```

然后在你的游戏中：

```gdscript
var resource = load("res://some_dialogue.dialogue")
# then
var dialogue_line = await DialogueManager.get_next_dialogue_line(resource, "start")
# or
var dialogue_line = await resource.get_next_dialogue_line("start")
```

此时 `dialogue_line` 将包含一个 `DialogueLine`，其中存储了对话行 `Nathan: Hi! I'm Nathan` 的信息。

要获取下一行对话，你可以再次调用 `get_next_dialogue_line`，以 `dialogue_line.next_id` 作为提示：

```
dialogue_line = await DialogueManager.get_next_dialogue_line(resource, dialogue_line.next_id)
# or
dialogue_line = await resource.get_next_dialogue_line(dialogue_line.next_id)
```

现在 `dialogue_line` 包含了对话行 `Nathan: Here are some options.` 的信息。该对象还包含响应选项列表。

每个选项还包含一个 `next_id` 属性，可用于沿该分支继续对话。

有关 `DialogueLine` 的更多信息，请参阅 [API 文档](https://site.lanhao.cc/posts/dialogue_manager/api/)。

## DialogueLabel 节点

该插件提供了一个 `DialogueLabel` 节点（RichTextLabel 节点的扩展），用于辅助渲染对话文本。

该节点接收一个 `dialogue_line`（如上所述），并利用其属性来确定如何处理对话的逐字显示。它会自动处理任何 `bb_code`、`wait`、`speed` 和 `inline_mutation` 引用。

使用 `type_out()` 开始逐字显示文本。标签会在文本开始显示时发出 `started_typing` 信号，在显示完成时发出 `finished_typing` 信号。

当显示过程中出现停顿时，标签会发出 `paused_typing` 信号（附带停顿时长）；每输入一个字符时会发出 `spoke` 信号（附带输入的字符和当前速度）。

`DialogueLabel` 的显示速度可以通过修改 `seconds_per_step` 属性在你的气泡中进行配置。当遇到 `pause_at_characters` 属性中指定的字符时（默认只有 "."），它还会自动短暂等待。

## 使用自定义 `current_scene` 实现

如果你的游戏有自己的方法来管理"当前场景"，你可能需要向 `DialogueManager.get_current_scene` 传入一个重写的 `Callable`。内置实现会先查看 `get_tree().current_scene`，然后假设 `get_tree().root` 的最后一个子节点是当前场景。如果你的游戏不适用此逻辑，你可以传入一个 `Callable`，返回一个代表当前场景的 `Node`。

## 在运行时生成对话资源

如果需要在运行时构建对话资源，可以使用 `create_resource_from_text(string)`：

```gdscript
var resource = DialogueManager.create_resource_from_text("~ cue\nCharacter: Hello!")
```

这会将给定文本通过对话编译器进行处理。

如果存在语法错误，该方法将失败。

如果没有错误，你可以像正常使用一样使用这个临时资源：

```gdscript
var dialogue_line = await resource.get_next_dialogue_line("cue")
```
