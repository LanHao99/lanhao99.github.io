---
title: "常见问题"
published: 2026-06-18
pinned: false
description: "Dialogue Manager 常见问题解答"
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

# 常见问题

## 如何获取帮助？

你可以在 [Discord 上提问](https://nathanhoad.net/discord)、[在 Bluesky 上联系我](https://bsky.app/profile/nathanhoad.net)，或 [在 GitHub 上发起讨论](https://github.com/nathanhoad/godot_dialogue_manager/discussions)。

如果你遇到可能的 bug，可以 [提交 issue](https://github.com/nathanhoad/godot_dialogue_manager/issues)（请确保附上你的 Godot 版本和 Dialogue Manager 版本）。

## 如何支持这个项目？

你可以通过以下几种方式支持 Dialogue Manager 的开发：[在 Patreon 上成为赞助者](https://patreon.com/nathanhoad) 或 [在 GitHub 上赞助我](https://github.com/sponsors/nathanhoad)。

如果以上方式不太方便，你也可以 [在 YouTube 上订阅或点赞](https://youtube.com/@nathan_hoad)，或将 [Bravest Coconut 加入愿望单](https://bravestcoconut.com/wishlist)。

## 对话显示时如何阻止玩家移动？

最常见的原因之一是你在玩家的 `_process` 中实现了移动逻辑，而不是在 `_unhandled_input` 中。

更多指南请参考我的 [初学者对话示例项目](https://github.com/nathanhoad/beginner_godot4_dialogue/blob/finished/characters/coco/coco.gd#L17) 的代码，以及 [配套的视频教程](https://youtu.be/UhPFk8FSbd8)。

## 如何检测对话何时结束？

你可以连接 `DialogueManager.dialogue_ended(resource)` 信号。其中 `resource` 参数是用于启动对话链的 `DialogueResource`。

## 如何让示例气泡看起来更像我的游戏？

在 **Project > Tools** 菜单中有一个选项可以将示例气泡复制到你项目的某个位置（切勿直接编辑原始示例气泡，因为更新插件时你的修改会被覆盖）。

之后这主要是一个 UI 构建的练习，可以使用 Godot 的 UI 控制节点（附带的 `DialogueLabel` 和 `DialogueResponsesMenu` 节点除外）。我建议在修改之前先深入研究初始代码，熟悉其工作原理。

最常见的修改是对 `Balloon` 面板上附加的 `theme` 进行调整。

## 如何在我的游戏中为 Dialogue Manager 署名？

为了遵守许可协议，你只需在游戏中的某个位置包含许可文本（或其链接）即可。这通常放在制作人员名单的末尾。

如果你想特别标注，可以写上类似 "Dialogue System by Nathan Hoad" 之类的内容（我不太讲究具体格式）。

## 为什么 Dialogue Manager 没有内置在 Godot 中？

简短的回答是，并非所有游戏都需要任何形式的对话，更不用说分支对话树了，因此将其内置只会给引擎增加不必要的臃肿。将其作为插件还有一个好处，那就是我可以比等待引擎版本发布更快地进行迭代更新。

## 如何让你添加我的功能建议？

你可以在 GitHub 上提交一个 issue 并附上你的建议，但请注意，我通常不会仅因为有人建议就添加功能。不过，如果你的想法有足够广泛的适用性，我会考虑的。
