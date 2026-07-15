---
title: "条件判断与修改器"
published: 2026-06-18
pinned: false
description: "Dialogue Manager 条件判断与修改器语法"
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

# 条件与变更

要使用条件和变更，你需要了解对话管理器如何使用 [State](https://site.lanhao.cc/posts/dialogue_manager/State/)。

## 条件

### If/else

你可以使用条件块来进一步分支对话。以 "if" 开始条件行，然后提供一个表达式。你可以比较变量或函数结果。

额外条件使用 "elif"，你可以使用 "else" 来捕获其他情况。

```
if SomeGlobal.some_property >= 10
    Nathan: That property is greater than or equal to 10
elif SomeGlobal.some_other_property == "some value"
    Nathan: Or we might be in here.
else
    Nathan: If neither are true, I'll say this.
```

_注意：要转义条件行（即如果你想以 "if" 开始对话行），可以在条件关键字前加上 "\\"。_

条件可以用 `and`/`or` 连接，并用 `(`,`)` 分组。例如：

```
if something == "a value" and (score < 0 or score > 100)
    Nathan: That condition was true!
```

响应也可以有 "if" 条件。用 `[` 和 `/]` 包裹这些条件（有时称为"自闭合"）。

```
Nathan: What would you like?
- This one [if SomeGlobal.some_property == 0 or some_node_in_scope.some_other_property == false /]
    Nathan: Ah, so you want this one?
- Another one [if SomeGlobal.some_method() /] => another_cue
- Nothing => END
```

如果在响应行上同时使用条件和 goto，请确保 goto 放在最后。

条件也可以内联使用在对话行中，用 "[if condition]" 和 "[/if]" 包裹。

```
Nathan: I have done this [if already_done]once again[/if]
```

对于简单的二选一条件，你可以这样写：

```
Nathan: You have {{num_apples}} [if num_apples == 1]apple[else]apples[/if], nice!
```

随机行和随机跳转行也可以有条件。随机行的条件放在 `%` 之后、行内容之前的方括号中：

```
% => some_cue
%2 => some_other_cue
% [if SomeGlobal.some_condition] => another_cue
```

### Match

要简化一些 if/elif/elif/elif 链，你可以使用 `match` 行：

```
match SomeGlobal.some_property
    when 1
        Nathan: It is 1.
    when > 5
        Nathan: It is less than 5 (but not 1).
    else
        Nathan: It was something else.
```

### While

你也可以用 "while" 开始条件块。只要条件为真，这些块就会循环。

```
while SomeGlobal.some_property < 10
    Nathan: The property is still less than 10 - specifically, it is {{SomeGlobal.some_property}}.
    $> SomeGlobal.some_property += 1
Nathan: Now, we can move on.
```

## 变更

你可以用 "set" 或 "do" 行来影响状态。

```
if SomeGlobal.has_met_nathan == false
    $> SomeGlobal.animate("Nathan", "Wave")
    Nathan: Hi, I'm Nathan.
    $> SomeGlobal.has_met_nathan = true
Nathan: What can I do for you?
- Tell me more about this dialogue editor
```

在上面的例子中，对话管理器期望一个名为 `SomeGlobal` 的全局对象实现一个签名为 `func animate(string, string) -> void` 的方法。

变更也可以内联使用。内联变更会在打字输出的对话到达文本中的该点时被调用。

```
Nathan: I'm not sure we've met before [$> wave()]I'm Nathan.
Nathan: I can also emit signals[$> SomeGlobal.some_signal.emit()] inline.
```

在实现中使用 `await` 的内联变更会暂停对话的打字输出，直到它们解析完成。要忽略等待，在 "$>" 指令后添加 ">" - 例如 "[\$>> something()]"。

### 额外游戏状态

在请求对话行时，你可以传递一个节点/对象/字典的数组作为 `extra_game_states` 参数，这也会被检查是否有可用的变更方法。类应该被实例化，即使其内容是静态的。对象会按提供的顺序遍历，寻找匹配的属性。以下是一个示例：
```
func pirate():
    print("yarrr")

class GameStateClass:
    var pirate_name = "phil"
    func hello():
        print("ahoy")

func _ready() -> void:
    # GameStateClass.new(), not GameStateClass!
    DialogueManager.show_example_dialogue_balloon(load("res://main.dialogue"), "start", [self, { "game" = GameStateClass.new() }]) 
```

在对话端，你可以直接从传入的对象调用函数（例如：`self.pirate()` 可以调用为 `$> pirate()`），或者通过解引用成员变量或字典键（例如：`$> game.hello()`）：

```
~ start
$> game.hello()
$> pirate()
$> game.pirate_name = "delilah"
$> debug(game.pirate_name)
=> END
```

额外游戏状态提供对对话系统外部存在的对象、节点或字典的引用。对其属性所做的更改在对话结束后会持续存在。与局部变量的主要区别是，额外游戏状态通过名称直接访问（例如 `level`），而使用 `$> locals.variable_name = value` 创建的变量必须始终以 `locals.` 为前缀（例如 `locals.counter`）。

### 信号

信号可以像在 GDScript 中一样发出 - 通过调用它们的 `emit` 方法。

例如，如果 `SomeGlobal` 有一个名为 `some_signal` 的信号，它有一个字符串参数，你可以这样从对话中发出它：

```
$> SomeGlobal.some_signal.emit("some argument")
```

### 空值合并

在某些情况下，你可能想要引用一个可能存在或不存在的对象的属性。这时你可以使用空值合并：

```
if some_node_reference?.name == "SomeNode"
    Nathan: Notice the "?." syntax?
```

如果 `some_node_reference` 为 null，那么比较的整个左侧将为 null，因此不等于 "SomeNode" 并且会失败。如果这里不使用空值合并，并且 `some_node_reference` 为 null，那么游戏将崩溃。

### 状态快捷方式

如果你想将状态引用从 `SomeGlobal.some_property` 这样的形式缩短为只是 `some_property`，有两种方法可以做到这一点。

1. 如果你在所有对话中使用相同的状态，可以在 [Settings](https://site.lanhao.cc/posts/dialogue_manager/Settings/) 中设置全局状态快捷方式。
2. 或者，如果你想每个对话文件有不同的快捷方式，可以在对话文件顶部添加一个 `using SomeGlobal` 子句（用于你正在使用的任何自动加载）。

## 特殊变量/变更

有几个特殊的内置变更你可以使用：

- `$> wait(float)` - 等待 `float` 秒（内联使用时无效）。
- `$> debug(...)` - 向输出窗口打印内容。

还有一个特殊的属性 `self`，你可以在对话中使用它来引用当前正在运行的 `DialogueResource`。
