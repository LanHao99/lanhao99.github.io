---
title: "Modular 12 arithmetic｜模 12 运算"
published: 2022-03-11
description: "以模 12 算术表示音级与音程，为集合理论提供计算基础。"
cover: /media/music/graphics/postTonal/Pitch-class-Space.jpg
coverInContent: false
pinned: false
tags: [后调性, 基础概念]
category: [音乐理论, 后调性音乐]
author: Open Music Theory
licenseName: CC BY-SA 4.0
licenseUrl: https://creativecommons.org/licenses/by-sa/4.0/
sourceLink: https://openmusictheory.github.io/mod12.html
comment: true
draft: false
---

> **来源**：本文选自 [Open Music Theory](https://openmusictheory.github.io/mod12.html)，由 Hybrid Pedagogy Publishing 出版，采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可。
>
> **中文名**：模 12 运算　|　**归档说明**：中英对照，每段英文原文后附中文译文，英文原文未作删减；图片与音频已本地化，站内链接已改为本站链接。

What time is four hours later than 10 o’clock?

比 10 点晚四小时是几点？

When we make calculations like this, we are doing *modular arithmetic*. Modular arithmetic is like regular arithmetic, except that the numbers “wrap around” or restart when they reach a certain value, called the *modulus*. In the case of our 12-hour clock, the modulus is 12.

当我们进行这样的计算时，我们实际上是在做*模算术*。模算术与普通算术相似，只是当数字达到某一特定值时会“回绕”或重新开始，这个值称为*模*。就 12 小时的钟表而言，模为 12。

Musical structures can often be best understood using this modular arithmetic. Think of the C-major scale. We begin on C, then D, E, F, G *and back to A* before B and returning to C. This is a modular system — we might call it *modulo-G* because after G we go back to the beginning (A).

音乐结构往往要借助这种模算术才能得到最好的理解。想想 C 大调音阶。我们从 C 开始，然后是 D、E、F、G，*再回到 A*，接着是 B，最后回到 C。这是一个模系统——我们也许可以称之为*模 G*，因为在 G 之后我们回到开头（A）。

In post-tonal music, once we assume octave and enharmonic equivalence, our pitch-class environment includes twelve unique pitch classes, just like the twelve hours on the clock. In this universe, modular arithmetic is a very useful way to imagine getting around.

在后调性音乐中，一旦我们假定八度等价与等音等价，我们的音级环境便包含十二个彼此不同的音级，正如钟表上的十二个小时。在这个世界里，模算术是想象如何在其间穿行的一种极为有用的方式。

Counting in this *modulo 12* (or *mod12*) universe works just as in basic math [“1, 2, 3, …”], but after 11, we “begin again” at 0. (Note that while clocks start at 1 and end on 12, modular arithmetic always (re)starts with zero.) Conversely, when counting down [“10, 9, 8, …”], we follow 0 with 11.

在这个*模 12*（或*模12*）世界中计数与基础数学一样［“1, 2, 3, …”］，但在 11 之后，我们从 0“重新开始”。（注意：钟表从 1 开始、到 12 结束，而模算术总是以零（重新）开始。）反之，向下计数时［“10, 9, 8, …”］，0 之后接的是 11。

While we are used to thinking of numbers on an infinite line, modular thinking wraps them into a finite number, generally represented by a circle. On this circle, all values are a number from 0 to 11.

我们习惯于把数字设想在一条无限长的直线上，而模的思维把它们卷成一个有限的整体，通常用一个圆来表示。在这个圆上，所有的值都是 0 到 11 之间的数字。

**Pitch-Class Space**｜**音级空间**

[![音级空间](/media/music/graphics/postTonal/Pitch-class-Space.jpg)](/media/music/graphics/postTonal/Pitch-class-Space.jpg)

## Addition and Subtraction｜加法与减法

To add or subtract in mod12, perform the calculation in the usual manner (7 + 15 = 22) and then add or subtract 12s until you get a number from 0 to 11 (22 - 12 = 10).

在模 12 中做加法或减法，先按通常的方式计算（7 + 15 = 22），然后反复加 12 或减 12，直到得出 0 到 11 之间的数字（22 - 12 = 10）。

Adding and subtracting can represent many musical ideas: moving seven half steps above D takes you to A (2 + 7 = 9); combining 2 half steps and 11 half steps produces 1 half step (2 + 11 = 1; or starting with C, moving up 2 half steps reaches D, and 11 more C-sharp — 1 higher than the original C).

加法与减法可以表示许多音乐上的观念：从 D 向上移动七个半音到达 A（2 + 7 = 9）；把 2 个半音与 11 个半音相加得到 1 个半音（2 + 11 = 1；或者从 C 出发，向上移动 2 个半音到达 D，再移动 11 个半音到达升 C——比原来的 C 高 1）。

Modular arithmetic is a quick way to calculate various intervals between pitches or pitch classess. Some examples:

模算术是计算音高或音级之间各种音程的一种快捷方式。举几个例子：

What is the interval class from pitch class 7 (G) to pitch class 10 (B-flat)? 10 - 7 = 3
What is the pitch class 5 semitones above B-natural (11)? 11 + 5 = 4. That is, E.

从音级 7（G）到音级 10（降 B）的音程类是多少？10 - 7 = 3
比 B（11）高 5 个半音的音级是哪一个？11 + 5 = 4。即 E。
