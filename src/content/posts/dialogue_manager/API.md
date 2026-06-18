---
title: "API 参考"
published: 2026-06-18
pinned: false
description: "Dialogue Manager GDScript / C# API 参考"
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

# API

## `DialogueManager`

### 信号

- `dialogue_started(resource: DialogueResource)` - 当对话气泡由 `DialogueManager` 创建且对话开始时发出。
- `passed_Cue(Cue: String)` - 当经过一个 Cue 标记时发出。
- `got_dialogue(line: DialogueLine)` - 当找到一行对话时发出。
- `mutated(mutation: Dictionary)` - 当一个变异行即将执行时发出（不包括 `set` 行）。
- `dialogue_ended(resource: DialogueResource)` - 当下一行对话为空时发出，并提供调用它的资源。

### 方法

#### `func show_dialogue_balloon(resource: DialogueResource, Cue: String = "", extra_game_states: Array = []) -> Node`

打开在设置中配置的对话气泡（如果未设置则打开示例气泡）。

返回气泡的基础节点，以便你可以自行调用 `queue_free()` 释放它。

#### `func show_dialogue_balloon_scene(balloon_scene: Node | String, resource: DialogueResource, Cue: String = "", extra_game_states: Array = []) -> Node`

打开在 `balloon_scene` 中指定的对话气泡。

返回气泡的基础节点，以便你可以自行调用 `queue_free()` 释放它。

#### `func get_next_dialogue_line(resource: DialogueResource, key: String = "", extra_game_states: Array = [], mutation_behaviour: MutationBehaviour = MutationBehaviour.Wait) -> DialogueLine`

> [!IMPORTANT]
> 必须与 `await` 一起使用。

给定一个资源和 Cue/key，它将找到下一行可打印的对话（期间会执行变异操作，除非 `mutation_behaviour` 被覆盖）。

返回一个 `DialogueLine` 或 `null`。

传入一个节点/字典数组作为 `extra_game_states`，以临时添加可用于条件和变异的游戏状态快捷方式。

你可以将 `mutation_behaviour` 指定为 `DialogueManager.MutationBehaviour` 枚举中提供的值之一。`Wait` 是默认值，会 `await` 所有变异行。`DoNoWait` 会运行变异但不会等待它们完成就进入下一行。`Skip` 将完全跳过变异。在大多数情况下，你应该保留默认值。

> [!NOTE]
> 示例气泡仅支持 `Wait`。

#### `func show_example_dialogue_balloon(resource: DialogueResource, Cue: String = "", extra_game_states: Array = []) -> CanvasLayer`

打开示例气泡。

如果你的游戏视口小于 400，它将打开低分辨率气泡。否则，它将打开通常的气泡。

对话结束后它会自动关闭。

返回示例气泡的基础 CanvasLayer，以便你可以自行调用 `queue_free()` 释放它。

## `DialogueLine`

一行对话。

- `id: String` - 该行的 ID。
- `next_id: String` - 该行之后下一行对话的 ID。
- `character: String` - 说话角色的名称（或 `""`）。
- `text: String` - 角色正在说的文本。
- `tags: PackedStringArray` - 标签列表。
- `static_id: String` - 用于翻译文本的键（如果该行未指定 ID，则为完整文本本身）。
- `responses: Array[DialogueResponse]` - 对该行的响应列表（如果没有可用响应则为 `[]`）。
  - `id: String` - 响应的 ID。
  - `next_id: String` - 选择此响应后下一行的 ID。
  - `is_allowed: bool` - 该行是否通过了条件检查。
  - `condition_as_text: String` - 用于检查此响应是否允许的原始条件（字符串形式）。
  - `character: String` - 角色名称（或 `""`）。
  - `text: String` - 此响应的文本。
  - `tags: PackedStringArray` - 标签列表。
  - `static_id: String` - 用于翻译文本的键（如果该响应未指定 ID，则为完整文本本身）。
- `concurrent_lines: Array[DialogueLine]` - 与此行同时说出的行列表。

#### `func to_serialized() -> String`

将一行对话转换为字符串，以便稍后恢复。

#### `static func new_from_serialized(serialized_string: String, extra_game_states: Array = []) -> DialogueLine`

恢复一行已序列化的对话。如有需要，传入一个游戏状态数组。

> [!WARNING]
> 序列化仅适用于持久化资源，不适用于通过 `DialogueManager.create_resource_from_text()` 创建的资源。


## 节点

参见 [Nodes](./Nodes.md)
