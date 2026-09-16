---
title: "使用 Trinket 记写乐谱"
published: 2022-04-14
description: "以 Trinket 在线环境进行交互式音乐记谱与练习的方法。"
cover: /media/music/covers/gramophone.jpg
coverInContent: false
pinned: false
tags: [技术工具, 在线工具]
category: [音乐理论, 技术工具]
author: Open Music Theory
licenseName: CC BY-SA 4.0
licenseUrl: https://creativecommons.org/licenses/by-sa/4.0/
sourceLink: https://openmusictheory.github.io/trinket.html
comment: true
draft: false
---
*Using Trinket*

<iframe src="https://trinket.io/embed/music/a089e987ca" width="100%" height="300" frameborder="0" allowfullscreen></iframe>

*Error-detection exercise from [Composing a first-species counterpoint](http://openmusictheory.com/firstSpecies.html).*

*来自[写作第一类对位](http://openmusictheory.com/firstSpecies.html)的辨错练习。*

[Trinket](http://trinket.io) is a new tool for interactive music notation on the web. It can be added to any website that supports iFrames, and there are several music trinkets embedded in Open Music Theory (with more on the way as the textbook grows).

[Trinket](http://trinket.io) 是一种用于网页上交互式乐谱的新工具。它可以被添加到任何支持 iFrame 的网站中，《Open Music Theory》里就嵌入了若干个音乐 trinket（随着教材的扩充，还会有更多）。

## Notation guide｜记谱指南

Music notation is created by entering text into a box at the bottom of the trinket. Trinkets offer a limited set of musical features, in order to keep things simple. The text required for these features is provided below. Most of these features are included in the example trinket at the bottom of this page.

乐谱通过在 trinket 底部的输入框中键入文本而生成。为保持简洁，trinket 只提供一组有限的音乐功能。这些功能所需的文本如下所示。其中大多数功能都包含在本页底部的示例 trinket 中。

### Pitch｜音高

Pitch classes are designated by their letter names followed by - for flat, # for sharp, or “n” for natural. Rests are designated by “r”.

音级以字母名称标示，其后跟 - 表示降号、# 表示升号、“n”表示还原号。休止符以“r”标示。

In order to avoid confusion with rhythmic numbers, trinket uses a version of the Helmholtz register designation. So ISO Octave 4 (middle C up to the B above it) uses lower case letters:

为避免与节奏数字混淆，trinket 使用赫尔姆霍茨音区标记法的一种变体。因此 ISO 第 4 音区（中央 C 至其上方的 B）使用小写字母：

```plaintext
c d e f g a b
```

ISO Octave 5 adds primes:

ISO 第 5 音区加上撇号：

```plaintext
c' d' e' f' g' a' b'
```

ISO Octave 6 takes two primes (c’’), Octave 7 three primes (c’’’), etc.

ISO 第 6 音区加两个撇号（c’’），第 7 音区加三个撇号（c’’’），依此类推。

Octave 3 (immediately below middle C) uses capital letters:

第 3 音区（紧接中央 C 之下）使用大写字母：

```plaintext
C D E F G A B
```

Octave 2 uses two capital letters:

第 2 音区使用两个大写字母：

```plaintext
CC DD EE FF GG AA BB
```

And so on.

依此类推。

### Rhythm｜节奏

Rhythms are designated by numbers representing note values—2 for half note, 4 for quarter note, etc.—and periods for dotted notes—2. for dotted half note, 4.. for doubly dotted quarter note, etc. These numbers immediately follow the pitches.

节奏以代表音符时值的数字标示——2 表示二分音符，4 表示四分音符，等等——附点音符则用句点标示——2. 表示附点二分音符，4.. 表示双附点四分音符，等等。这些数字紧跟在音高之后。

Ties are denoted by placing a ~ immediately after the rhythmic value.

连音线通过紧接在时值之后放置一个 ~ 来表示。

### Chords｜和弦

To make a chord, simply put two or more notes within angled brackets (and put the rhythm outside the bracket).

要构成一个和弦，只需将两个或更多音符放入尖括号内（并把节奏放在括号之外）。

```plaintext
<c e g>4. <d f>8
```

### Lyrics｜歌词

When using lyrics, simple type lyrics (or analytical notation) into the lyric box. Use a space to move on to the next note. When skipping a note, put a ~ for the notes that don’t take lyrics.

使用歌词时，只需在歌词框中键入歌词（或分析标记）。用空格移动到下一个音符。需要跳过某个音符时，为那些不带歌词的音符放置一个 ~。

### Example｜示例

Here is an example that uses many of the features listed above. (International readers, please forgive the movable-do!)

以下是一个使用了上述许多功能的示例。（国际读者，请原谅这里使用首调唱名法！）

<iframe src="https://trinket.io/embed/music/91c673df7c" width="100%" height="260" frameborder="0" allowfullscreen></iframe>
