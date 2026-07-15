---
title: "对话脚本语法基础"
published: 2026-06-18
pinned: false
description: "Dialogue Manager 对话脚本语法详解"
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

# 基础对话

在编辑器中导航到"Dialogue"选项卡。

![Dialogue 选项卡](/media/dialogue_manager/dialogue-tab.jpg)

通过点击"new dialogue file"按钮或"open dialogue"按钮来打开对话。

![新建和打开按钮](/media/dialogue_manager/new-open-buttons.jpg)

最基础的对话就是一个字符串：

```
This is some dialogue.
```

如果你想添加一个说话的角色，可以在冒号前包含一个名字，然后是对话内容：

```
Nathan: This is me talking.
```

你可以使用 [BBCode](https://docs.godotengine.org/en/stable/tutorials/ui/bbcode_in_richtextlabel.html#reference) 为你的对话增添一些趣味。除了 Godot 的 `RichTextLabel` 提供的所有功能外，你还可以使用 Dialogue Manager 提供的一些额外功能：

- `[[This|Or this|Or even this]]` 在对话中间随机选择一个选项（注意双括号"[["）。
- `[wait=N]` 其中 N 是暂停对话输入的秒数。你也可以通过编写类似 `[wait="ui_accept"]` 的内容来等待操作，其中"ui_accept"写成字符串（你*还可以*通过类似 `[wait=["ui_accept","ui_cancel"]]` 的方式等待操作列表中的任何一个，或者只是等待任何操作，`[wait]`）。
- `[speed=N]` 其中 N 是一个数字，用于乘以默认输入速度。
- `[next=N]` 其中 N 是在自动继续到下一行对话之前等待的秒数。你也可以使用 `[next=auto]` 让标签根据文本长度确定等待时间。

对话行是一行接一行编写的：

```
Nathan: I'll say this first.
Nathan: Then I'll say this line.
```

要为对话添加一些交互性，你可以指定响应。响应是以 `- ` 开头的行：

```
- This is a response
- This is a different response
- And this is the last one
```

## 响应

在响应之后分支对话的一种方式是在每个响应下方嵌套更多对话。嵌套的响应对话可以无限嵌套，随着越来越多的分支被添加

```
Nathan: How many projects have you started and not finished?
- Just a couple
	Nathan: That's not so bad.
- A lot
	Nathan: Maybe you should finish one before starting another one.
- I always finish my projects
	Nathan: That's great!
	Nathan: ...but how many is that?
	- A few
		Nathan: That's great!
	- I haven't actually started any
		Nathan: That's what I thought.
```

响应可以包含决定其是否可选择的条件。要在响应中包含条件，请添加用方括号包裹的条件表达式，如下所示：

```
- This is a normal response
- This is a conditional response [if SomeGlobal.some_property == true /]
```

## 随机化对话行

如果你想从多个对话行中随机选择一个，可以在行的开头用 `%` 标记它们，如下所示：

```
Nathan: I will say this.
% Nathan: And then I might say this
% Nathan: Or maybe this
% Nathan: Or even this?
```

每行都有相同的概率被选中。

要加权行，请使用 `%` 后跟一个数字来加权。例如，`%2` 意味着该行被选中的概率是普通行的两倍。

```
%3 Nathan: This line has a 60% chance of being picked
%2 Nathan: This line has a 40% chance of being picked
```

要分隔多个随机行组，请使用空行：

```
% Group 1
% Also group 1

% Group 2
% And this is also group 2
```

你也可以让整个块随机：

```
%
	Nathan: This is the first block.
	Nathan: Still the first block.
% Nathan: This is the possible outcome.
```

如果选择了第一个随机项目，它将播放两个嵌套的行。

## 标签

如果你需要用标签注释你的行，可以用 `[#` 和 `]` 包裹它们，用逗号分隔。因此，要为一行指定"happy"和"surprised"标签，你可以这样做：

```
Nathan: [#happy, #surprised] Oh, Hello!
```

在运行时，`DialogueLine` 的 `tags` 属性将包含 `["happy", "surprised"]`。

你还可以给标签赋值，这些值可以通过 `DialogueLine` 上的 `get_tag_value` 方法访问：

```
Nathan: [#mood=happy] Oh, Hello!
```

对于这行对话，`tags` 数组将是 `["mood=happy"]`，而 `line.get_tag_value("mood")` 将返回 `"happy"`。

## 同时对话

如果你想让多个角色同时说话，可以使用并发行语法。在常规对话行之后，任何要同时说出的行可以用"| "作为前缀。

```
Nathan: This is a regular line of dialogue.
| Coco: And I'll say this line at the same time!
| Lilly: And I'll say this too!
```

要使用并发行，请访问 `DialogueLine` 上的 `concurrent_lines` 属性。

_注意：为了保持简单，内置的示例气球不包含并发行的实现。_

## 提示和跳转

提示是你对话中的标记，你可以从它们开始并跳转到它们。通常，在你的游戏中，你会通过提供一个提示来开始某些对话（默认提示是 `start`，但它可以是你对话中编写的任何内容）。

提示以 `~ ` 开头，并被命名（没有任何空格）：

```
~ this_is_a_cue
```

要从对话中的某个地方跳转到提示，可以使用跳转/goto 行。跳转行以 `=> ` 为前缀，然后指定要转到的提示。

```
=> this_is_a_cue
```

当对话运行时遇到跳转时，它将把流程引导到该提示标记并从那里继续。

如果你想从对话内部结束流程，可以跳转到 `END`：

```
=> END
```

这将结束当前的对话流程。

你还可以使用"跳转并返回"类型的跳转，它重定向对话流程，然后返回到跳转的起点。这些行以 `=>< ` 为前缀，然后指定要跳转到的提示。一旦流程遇到 `END`（或文件末尾），流程将返回到跳转的起点并从那里继续。

如果你想强制结束对话，不管是否有任何链接的"跳转和返回"，可以使用 `=> END!` 行。

跳转也可以内联用于响应：

```
~ start
Nathan: Well?
- First one
- Another one => another_cue
- Start again => start
=> END

~ another_cue
Nathan: Another one?
=> END
```

## 将对话导入其他对话

如果你有一个包含通用对话的对话文件，并且你想在多个其他文件中使用它，可以将它 `import` 到这些文件中。

例如，我们可以有一个 `snippets.dialogue` 文件：

```
~ banter
Nathan: Blah blah blah.
=> END
```

然后我们可以将它导入另一个对话文件，并从片段文件跳转到 `banter` 提示（注意 `=><` 语法，它表示在跳转的对话完成后返回到这一行）：

```
import "res://snippets.dialogue" as snippets

~ start
Nathan: The next line will be from the snippets file:
=>< snippets/banter
Nathan: That was some banter!
=> END
```

## 状态

 参见 [State](https://site.lanhao.cc/posts/dialogue_manager/state/)。

## 条件和变更

 参见 [Conditions & Mutations](https://site.lanhao.cc/posts/dialogue_manager/conditions_mutations/)。

## 翻译

 参见 [Translations](https://site.lanhao.cc/posts/dialogue_manager/translations/)。
