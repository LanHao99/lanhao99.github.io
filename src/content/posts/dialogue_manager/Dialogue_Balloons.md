---
title: "对话气泡系统"
published: 2026-06-18
pinned: false
description: "Dialogue Manager Balloon 对话气泡系统说明"
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

# 示例气泡

实际的对话渲染和输入控制需要由你来实现。我的 [Itch.io 页面](https://nathanhoad.itch.io) 上有一些示例项目，展示了一些可能的实现方式。

Dialogue Manager 还提供了一个_示例气泡_，帮助你开始构建自己的气泡。

## 复制示例气泡

在 _项目 > 工具_ 菜单中有一个"Create copy of example dialogue balloon..."选项。点击后，系统会提示你选择一个目录来保存复制的文件。之后，你可以编辑新的气泡，使其成为你自己的版本。

你最常做的事情可能是调整字体和边距大小。最简单的方法是编辑新复制的示例气泡中 `Balloon` 面板上附加的 `theme`。

## 使用气泡

你有几种方式来使用气泡。如果使用示例气泡（或者你的气泡有类似的实现），你可以：

- 通过代码调用气泡，例如：`DialogueManager.show_dialogue_balloon(load("res://some/dialogue/file.dialogue"), "start")`
- 通过代码调用气泡（如果你有多个气泡）：`DialogueManager.show_dialogue_balloon_scene("res://path/to/balloon.tscn", load("res://some/dialogue/file.dialogue"), "start")`
- 将气泡添加到你的场景中，并在检查器中提供对话资源和起始提示。然后你可以启用"auto start"，或者通过对气泡的引用调用 `start()` 来从代码中启动气泡。

你也可以编写一个完全自定义的方法来实例化和显示你的气泡。这是最灵活的选项。

例如，这是我在我的游戏 [Bravest Coconut](https://bravestcoconut.com) 中的实现：

![我的气泡](/media/dialogue_manager/real-example.jpg)  
_通过少量额外代码，气泡可以跟随角色移动。_

## 对话标记

如果你正在构建一个使用附着在玩家角色上的语音气泡的自定义气泡，你可以使用提供的 `DialogueMarker2D` 和 `DialogueMarker3D` 节点。

将其中一个添加到你的角色场景中，并将其放置在角色嘴巴附近。在属性检查器中指定角色名称，这样你就可以在气泡中通过 `DialogueMarker2D.find_for_character("...character name... ")` 或 `DialogueMarker3D.find_for_character("...character name... ")` 来引用它。
