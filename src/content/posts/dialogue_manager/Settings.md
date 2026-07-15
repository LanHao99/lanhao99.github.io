---
title: "设置选项"
published: 2026-06-18
pinned: false
description: "Dialogue Manager 设置选项说明"
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

# 设置

Dialogue Manager 的设置位于项目设置的常规标签页底部。

## 运行时

- **State Autoload Shortcuts**

  一个自动加载名称的数组，您希望在对话中为其创建快捷方式。例如，如果您有一个 `SomeGlobal` 自动加载，其中包含 `some_property` 属性，您可以在对话中这样引用它：

  ```
  if SomeGlobal.some_property > 0:
    Nathan: There are {{SomeGlobal.some_property}} of them!
  ```

  但如果您将 "SomeGlobal" 添加到 State Autoload Shortcuts 列表中，那么在对话中您可以直接这样写：

  ```
  if some_property > 0:
    Nathan: There are {{some_property}} of them!
  ```

- **Warn about method property or signal name conflicts**（高级）

  如果启用，当顶层存在多个同名的属性、方法或信号时（即额外的游戏状态、当前场景或自动加载快捷方式），调试器面板将显示警告。

  > [!NOTE]
  > 即使启用，在非调试构建中运行时此设置也不会生效。_

- **Balloon Path**

  使用 `DialogueManager.show_dialogue_balloon` 时实例化的气泡场景。

- **Ignore Missing State Values**（高级）

  当状态中缺少属性或变更时抑制错误。

## 编辑器

- **Wrap Long Lines**

  在对话编辑器中自动换行而不是水平滚动。

- **New File Template**

  新建对话文件时默认使用此内容。

- **Missing Translations Are Errors**

  没有静态 ID 的任何行都将被视为错误。

- **Include Characters in Translatable Strings List**

  在模板生成导出中包含任何角色名称。

- **Dialogue Processor Path**（高级）
  
   指向扩展 `DMDialogueProcessor` 的类的路径。用于预处理原始行和后处理编译后的行。

- **Custom Test Scene Path**（高级）

  在对话编辑器中运行 "Test" 时使用自定义测试场景。该场景必须扩展 `BaseDialogueTestScene`。

- **Extra Auto Complete Script Sources**（高级）

  添加脚本文件以检查顶级自动补全成员。

  此处添加的任何脚本都被假定在所有对话文件中可用（例如，您的气泡在运行时将自身插入 `extra_game_states`）。
