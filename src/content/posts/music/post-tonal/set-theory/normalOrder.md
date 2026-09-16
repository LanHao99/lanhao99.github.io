---
title: "Normal Order｜标准序"
published: 2022-03-14
description: "音高集合标准序的求法，即以最紧凑方式排列音级。"
cover: /media/music/covers/gramophone.jpg
coverInContent: false
pinned: false
tags: [后调性, 集合理论]
category: [音乐理论, 后调性音乐]
author: Open Music Theory
licenseName: CC BY-SA 4.0
licenseUrl: https://creativecommons.org/licenses/by-sa/4.0/
sourceLink: https://openmusictheory.github.io/normalOrder.html
comment: true
draft: false
---

> **来源**：本文选自 [Open Music Theory](https://openmusictheory.github.io/normalOrder.html)，由 Hybrid Pedagogy Publishing 出版，采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可。
>
> **中文名**：标准序　|　**归档说明**：中英对照，每段英文原文后附中文译文，英文原文未作删减；图片与音频已本地化，站内链接已改为本站链接。

Normal order (sometimes called normal form) has a lot in common with the concept of triad “root position.” Among other things, root position is a standard way to order the pitch-classes of triads and seventh chords so that we can classify and compare them easily. Normal order does the same, but in a more generalized way so as to apply to chords containing a variety of notes and intervals.

标准序（有时称为标准形式）与三和弦“原位”的概念有许多共同之处。除其他方面之外，原位是把三和弦与七和弦的音级加以排序的一种标准方式，使我们能够方便地对它们进行分类与比较。标准序的作用与之相同，只是更为一般化，因而适用于包含各种音与音程的和弦。

Normal order is the most compressed way to write a given collection of pitch classes. Often, you’ll be able to determine normal order intuitively using a keyboard or a clockface, but it’s good to learn a process that will always give you the correct answer.

标准序是书写给定音级集合最紧凑的方式。通常你可以借助键盘或钟面凭直觉确定标准序，但学习一套总能给出正确答案的步骤仍然是有益的。

1. Write as a collection of pitch classes (eliminating duplicates) in ascending order and within a single octave. There are many possible answers.／按上行顺序、在一个八度之内写成一个音级集合（去掉重复的音）。可能的答案有很多种。
2. Duplicate the first pitch class at the end.／把第一个音级复制到末尾。
3. Find the largest ordered pitch-class interval between adjacent pitch classes.／找出相邻音级之间最大的有序音级音程。
4. Rewrite the collection beginning with the pitch class to the right of the largest interval and write your answer in square brackets.／从最大音程右侧的那个音级开始重写该集合，并把答案写在方括号中。

For example, given {G-sharp4, A2, D-sharp3, A4}:

例如，给定 {升 G4, A2, 升 D3, A4}：

1. *Write as a collection of pitch classes (eliminating duplicates) in ascending order and within a single octave.* {8,9,3}／*按上行顺序、在一个八度之内写成一个音级集合（去掉重复的音）。* {8,9,3}
2. *Duplicate the first pitch class at the end.* {8,9,3,8}／*把第一个音级复制到末尾。* {8,9,3,8}
3. *Find the largest ordered pitch-class interval between adjacent pitch classes.* In this case, the largest interval is between “9” and “3.”／*找出相邻音级之间最大的有序音级音程。* 在此例中，最大的音程位于“9”与“3”之间。
4. *Rewrite the collection beginning with the pitch class to the right of the largest interval and write your answer in square brackets.* [3,8,9]／*从最大音程右侧的那个音级开始重写该集合，并把答案写在方括号中。* [3,8,9]

Occasionally you’ll have a tie in step 3. In these cases, write the ordering implied by each tie and calculate the interval from the first to the penultimate pitch class. The ordering with the smallest interval is the normal order.

有时在第 3 步会出现并列。此时，把每一种并列所隐含的排序都写出来，并计算从第一个音级到倒数第二个音级的音程。音程最小的那种排序即为标准序。
