---
title: "节点说明"
published: 2026-06-18
pinned: false
description: "Dialogue Manager 对话管理器节点说明"
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

# 节点

Dialogue Manager 提供了一些节点，让你在游戏中使用对话更加便捷。

## `Actionable2D` 和 `Actionable3D`

这些是 `Area2D` 和 `Area3D` 的扩展，用于帮助触发对话。

### 信号

#### `actioned()`

当此可交互对象被调用 `action()` 时发出。

#### `dialogue_ended()`

当与此可交互对象关联的 `DialogueResource` 结束时发出。

> [!WARNING]
> 如果同一个资源被场景树中的多个可交互节点使用，该信号也会被触发。

### 属性

#### `dialogue_resource: DialogueResource = null`

开始对话时使用的 [DialogueResource]。

#### `dialogue_cue: String = ""`

开始对话的目标线索。

#### `dialogue_balloon: Node`

调用 `action()` 时最后使用的对话气泡（如果有的话）。

#### `static start_dialogue: Callable = func(with_dialogue_resource: DialogueResource, from_cue: String, extra_game_states: Array) -> Node2D`

调用 `action()` 时用于启动对话的方法。如果需要不同的逻辑，可以重写此方法。

### 方法

`action() -> void`

执行此可交互对象的操作。如果已在此节点上设置了 `DialogueResource` 和线索，则会开始对话。

#### `static get_nearest_actionable_to(target_position: Vector2) -> Actionable2D`（或 `Actionable3D`）

查找距离给定位置最近的可交互对象。

## `DialogueMarker2D` 和 `DialogueMaker3D`

这些用于你的角色场景中，帮助标记角色相对于视口的位置。你也可以将它们用作语音气泡样式对话气泡的原点。

### 属性

#### `character_name: String = ""`

此标记指向的角色名称。

### 方法

#### `static func all() -> Array[DialogueMarker2D]`

获取当前场景树中的所有 `DialogueMarker2D` 节点。

#### `static func find_for_character(target_character_name: String) -> DialogueMarker2D`

在当前场景树中查找具有给定角色名称的标记。

#### `func get_position_in_viewport() -> Vector2`

获取标记相对于视口的位置。

## `DialogueStateContext`

在你希望某个节点在运行场景树中存在时能被对话使用的场景中使用这些。

### 属性

#### `alias: String = ""`

在对话中用于引用暴露的目标节点的名称。

#### `target: Node`

其值被暴露给对话的目标。

## `DialogueResponsesMenu`

在你的自定义气泡中使用此组件，为对话提供一个简单的响应选择菜单。示例对话气泡已经使用了它。

### 信号

#### `response_focused(response: Variant)`

当某个响应获得焦点时发出。

#### `signal response_selected(response: Variant)`

当某个响应被选中时发出。

### 属性

#### `response_template: Control`

可选地指定一个控件，为每个响应进行复制。

#### `next_action: StringName = &""`

用于接受响应的操作（可能被父级对话气泡覆盖）。

#### `auto_configure_focus: bool = true`

当响应列表变化时自动设置焦点邻居。

#### `auto_focus_first_item: bool = true`

显示时自动聚焦第一个项目。

#### `hide_failed_responses: bool = false`

隐藏任何响应的 `is_allowed` 为 false 的响应。

#### `responses: Array = []`

对话响应列表。

### 方法

#### `func get_menu_items() -> Array`

获取菜单中可选择的项目。

#### `func configure_focus() -> void`

为键盘和鼠标导航准备菜单。

## `DialogueLabel`

在你的自定义气泡中使用此组件来显示对话文本。它处理文本的逐字显示、暂停、速度、内联变异等。

> [!NOTE]
> Dialogue Label 也可以被实例化以获得一些预配置的默认属性。

### 属性

#### `seconds_per_step: float = 0.02`

文本逐字显示的速度。

#### `pause_at_characters: String = ".?!"`

遇到这些字符时自动短暂暂停。

#### `skip_pause_at_character_if_followed_by: String = ")\""`

如果暂停字符后跟着这些字符之一，则忽略自动暂停。

#### `skip_pause_at_abbreviations: Array = ["Mr", "Mrs", "Ms", "Dr", "etc", "ex"]`

这些缩写后不自动暂停（仅当 "." 在 `pause_at_characters` 中时）。

#### `seconds_per_pause_step: float = 0.3`

当遇到 pause_at_characters 中的字符时暂停的时间量。

### 信号

#### `spoke(letter: String, letter_index: int, speed: float)`

逐字显示时每一步发出。

#### `started_typing()`

当标签开始逐字显示时发出。

#### `skipped_typing()`

当玩家跳过标签的逐字显示时发出。

#### `finished_typing()`

当标签完成逐字显示时发出。

### 方法

#### `func type_out() -> void`

开始逐字显示标签的文本。

#### `func skip_typing() -> void`

停止逐字显示文本并直接跳到结尾。这将发出 `skipped_typing` 信号。
