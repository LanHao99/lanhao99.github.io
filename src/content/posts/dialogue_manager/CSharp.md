---
title: "C# 专用说明"
published: 2026-06-18
pinned: false
description: "Dialogue Manager C# 专用说明"
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

# C# 封装

如果你的项目使用 C#，这里提供了一个围绕 Dialogue Manager 的小型便捷封装。

首先，添加命名空间：

```cs
using DialogueManagerRuntime;
```

然后你可以加载对话资源并显示示例气泡：

```cs
var dialogue = GD.Load<Resource>("res://example.dialogue");
DialogueManager.ShowExampleDialogueBalloon(dialogue, "start");
```

或者显示你的自定义气泡（如果已配置）：

```cs
var dialogue = GD.Load<Resource>("res://example.dialogue");
DialogueManager.ShowDialogueBalloon(dialogue, "start");
```

或者手动遍历对话：

```cs
var line = await DialogueManager.GetNextDialogueLine(dialogue, "start");
```

返回的行是一个 `DialogueLine`，其属性与 [GDScript 版本](API.md) 基本相同。

## 状态

在查找状态时，Dialogue Manager 会在当前场景（即 `GetTree().CurrentScene` 返回的场景）、所有自动加载节点，以及传递给 `GetNextDialogueLine(resource, key, extraGameStates)` 中 `extraGameStates` 数组的任何内容中进行搜索。为了让属性对 Dialogue Manager 可见，需要为该属性添加 `[Export]` 装饰器。

## 变异

在 C# 中编写变异时，通常需要一个返回 `Task` 的 `async` 方法。以下是一个示例方法，用于询问玩家名称并将其存储在名为 `PlayerName` 的属性中：

```csharp
public async Task AskForName()
{
  var nameInputDialogue = GD.Load<PackedScene>("res://path/to/some/name_input_dialog.tscn").Instantiate() as AcceptDialog;
  GetTree().Root.AddChild(nameInputDialogue);
  nameInputDialogue.PopupCentered();
  await ToSignal(nameInputDialogue, "confirmed");
  PlayerName = nameInputDialogue.GetNode<LineEdit>("NameEdit").Text;
  nameInputDialogue.QueueFree();
}
```

你需要这样声明 `PlayerName` 属性：

```csharp
[Export] string PlayerName = "Player";
```

然后，在你的对话中可以这样调用变异：

```
do AskForName()
Nathan: Hello {{PlayerName}}!
```

如果你想做同样的事情，但不想每次都存储到同一个属性中，可以将值作为 `Variant` 返回：

```csharp
public async Task<Variant> AskForName()
{
  var nameInputDialogue = GD.Load<PackedScene>("res://path/to/some/name_input_dialog.tscn").Instantiate() as AcceptDialog;
  GetTree().Root.AddChild(nameInputDialogue);
  nameInputDialogue.PopupCentered();
  await ToSignal(nameInputDialogue, "confirmed");
  nameInputDialogue.QueueFree();
  return nameInputDialogue.GetNode<LineEdit>("NameEdit").Text;
}
```

## 信号

有两种方式可以连接到 Dialogue Manager 的信号——使用 `Connect` + `Callable` 或通过附加事件处理器。

使用事件处理器是更简单的方法（但仅适用于 Dialogue Manager 本身）：

```csharp
DialogueManager.DialogueStarted += (Resource dialogueResource) =>
{
  // ...
};

DialogueManager.DialogueEnded += (Resource dialogueResource) =>
{
  // ...
};

DialogueManager.PasssedCue += (string cue) =>
{
  // ...
};

DialogueManager.GotDialogue += (DialogueLine line) =>
{
  // ...
};

DialogueManager.Mutated += (Godot.Collections.Dictionary mutation) =>
{
  // ...
};
```

如果你使用内置的响应菜单节点，则需要使用 `Connect` 方式：

```csharp
responsesMenu.Connect("response_selected", Callable.From((DialogueResponse response) =>
{
  // ...
}));
```

## 运行时生成对话资源

如果你需要在运行时构建对话资源，可以使用 `CreateResoureFromString(string)`：
请注意，必须先打开一个气泡或对话，对话才能挂载到其上。

```csharp
var resource = DialogueManager.CreateResourceFromText("~ cue\nCharacter: Hello!");
```

这会将给定的文本通过解析器运行。

如果存在语法错误，该方法将失败。

如果没有错误，你可以像平常一样使用这个临时资源：

```csharp
 var line = DialogueManager.ShowExampleDialogueBalloon(resource, "start");
```

## 示例

在 [我的 Itch.io](https://nathanhoad.itch.io) 页面上有一些示例项目，所有项目都包含整个项目的 C# 版本。
