---
title: "状态管理"
published: 2026-06-18
pinned: false
description: "Dialogue Manager 变量与全局状态管理"
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

# 状态

Dialogue Manager 的运行时是无状态的。这意味着你的游戏是所有游戏状态的权威来源，Dialogue Manager 会委托你的游戏来读写这些状态。

有多种方式可以将你的游戏状态暴露给对话系统。

- **全局变量** - 最简单的方式是使用自动加载项（autoloads）。在 Godot 的自动加载项中定义的任何全局变量都可以直接在对话中使用。
- **DialogueStateContext 节点** - 在场景中添加 `DialogueStateContext` 节点，只要该节点存在于当前场景树中，就可以使目标节点在对话中可用。
- **extra_game_states** - 最后的手段通常是向 `get_next_dialogue_line` 传递一个包含更多状态的额外节点或字典数组。这种方式是最脆弱的。

要查看运行时当前可用的上下文节点和全局变量，可以在调试器的"Dialogue"标签页中查看。该标签页还会显示已运行的每条对话行的历史记录。

## DialogueStateContext 节点

你可以在场景树中的任意场景上添加 `DialogueStateContext` 节点，为其设置别名，并将其指向另一个节点。

只要该上下文节点存在于当前场景树中，它就会通过别名使其目标节点可用。

例如，如果你有一个玩家角色场景并添加了 `DialogueStateContext` 节点，你可以将其别名设置为"player"，并将目标设置为该树的根节点（`CharacterBody2D` 或其他节点）。现在，只要你的玩家在运行的根场景树中，就可以在对话中使用 `player` 来引用它，并且它定义的属性和方法可以作为变更（mutations）使用。

```
if player.health > 10
    Someone: Wow, you are at full health!
```

## 条件与变更

一旦你连接了一些状态，就可以开始在分支和对话中使用条件，以及运行变更来影响状态。

参见[条件与变更](./Conditions_Mutations.md)。

## 对话中的变量

要在对话行中显示某个游戏状态的值，请用双花括号包裹它。

```
Nathan: The value of some property is {{some_node_in_scope.some_property}}.
```

类似地，如果角色的名称基于某个变量，你也可以用双花括号提供它：

```
{{SomeGlobal.some_character_name}}: My name was provided by the player.
```

### `_to_string` 和 `_to_dialogue_string`

默认情况下，变量会通过 `str` 解析，该方法会调用值的 `_to_string`，但如果你需要不同的字符串表示（例如，调试非原始类型时可能需要与在对话中使用时不同的字符串），可以在你的对象上定义 `_to_dialogue_string() -> String`。

### 局部变量

如果你需要仅在对话会话期间存在的临时变量，可以使用局部变量（locals）。局部变量是仅在当前对话中存活的临时变量。当对话结束或切换对话文件时，这些变量会被删除。

_注意：`locals` 是示例对话气泡提供的功能，用于演示如何处理临时状态，而非 Dialogue Manager 本身的内置功能。_

你可以通过两种方式创建局部变量：

1. **在对话中使用变更设置**：

```
~start
Nathan: What would you like to know?

- Tell me about yourself [if not locals.asked_about_nathan /]
    $> locals.asked_about_nathan = true
    Nathan: Well, I'm a game developer who loves making dialogue systems.
    => start

- What's your favorite color? [if not locals.asked_favorite_color /]
    $> locals.asked_favorite_color = true
    Nathan: I'd say blue. It's calming.
    => start

- That's all for now
    Nathan: Alright, see you around!
    => END
```

2. **在开始对话时传递额外的游戏状态**（详见[额外游戏状态](./Conditions_Mutations.md#extra-game-states)）。来自额外游戏状态的变量可以直接引用，无需 `locals.` 前缀。

### 表达式跳转

你可以使用表达式作为跳转指令。该表达式需要解析为一个已知的提示点（cue）名称，否则结果将是不可预期的。

**请谨慎使用**，因为对话编译器无法在编译时验证表达式的值是否匹配任何提示点。

表达式跳转的写法如下：

`=> {{SomeGlobal.some_property}}`
