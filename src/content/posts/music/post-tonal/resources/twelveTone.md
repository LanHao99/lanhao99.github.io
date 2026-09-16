---
title: "Analyzing 12-tone music｜分析十二音音乐"
published: 2022-03-28
description: "十二音作品的分析步骤，含矩阵构建与操作标记。"
cover: /media/music/covers/gramophone.jpg
coverInContent: false
pinned: false
tags: [后调性, 分析方法]
category: [音乐理论, 后调性音乐]
author: Open Music Theory
licenseName: CC BY-SA 4.0
licenseUrl: https://creativecommons.org/licenses/by-sa/4.0/
sourceLink: https://openmusictheory.github.io/twelveTone.html
comment: true
draft: false
---

> **来源**：本文选自 [Open Music Theory](https://openmusictheory.github.io/twelveTone.html)，由 Hybrid Pedagogy Publishing 出版，采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 许可。
>
> **中文名**：分析十二音音乐　|　**归档说明**：中英对照，每段英文原文后附中文译文，英文原文未作删减；图片与音频已本地化，站内链接已改为本站链接。

The *pitch* material of a strict 12-tone work is entirely (or nearly entirely) derived from a single *12-tone row*. A row is an *ordered set* of the twelve pitch classes of the chromatic scale. Each of the 12 will appear exactly once, and order is paramount.

严格十二音作品的*音高*材料完全（或几乎完全）派生自单独一条*十二音序列行*。序列行是半音阶十二个音级的一个*有序集合*。这 12 个音级各出现且仅出现一次，顺序至关重要。

12-tone rows that can be related to each other by transposition, inversion, and/or retrograde operations are considered to be forms of the same row. Unless a row has certain properties that allow it to map onto itself when transposed, inverted, or retrograded, there will be 48 forms of the row: *prime* (**P**), *inversion* (**I**), *retrograde* (**R**), and *retrograde inversion* (**RI**) forms, transposed to begin on each of the 12 pitch classes.

能够通过移位、倒影和/或逆行操作相互关联的十二音序列行，被视为同一条序列行的各种形式。除非某条序列行具有某些性质，使其在移位、倒影或逆行时能映射到自身，否则该序列行会有 48 种形式：*原型*（**P**）、*倒影*（**I**）、*逆行*（**R**）与*逆行倒影*（**RI**）形式，各移位至以 12 个音级中的每一个开始。

#### Prime form｜原型形式

The prime form of the row is the main form to which all other forms are referenced. In some pieces, one form of the row will clearly dominate the texture. If that is not the case, choose the most salient row at the beginning of the work and label it **P**. If more than one row seem equally salient at the beginning, flip a coin. The decision of which to call “prime” is not always important, but the analysis of the piece depends on a single row form serving as a point of reference.

序列行的原型是其他所有形式所参照的主要形式。在某些作品中，序列行的某一种形式明显主导织体。若情况并非如此，则选取作品开头最突出的序列行并标记为 **P**。如果开头有不止一条序列行显得同样突出，那就抛硬币决定。把哪一条称为“原型”这一决定并不总是重要，但作品的分析依赖于以单一序列行形式作为参照点。

Any row form that is the same as, or a strict transposition of, that opening prime form is also a prime form. Once you have labeled the main prime form at the beginning of the piece, any subsequent row that is an exact transposition of that row is prime. Likewise, any row that exhibits the same succession of pitch-class intervals is also a prime form.

任何与开头那个原型相同、或为其严格移位的序列行形式，同样是原型形式。一旦你在作品开头标出了主要的原型，之后任何为该序列行精确移位的序列行都是原型。同样，任何呈现相同音级音程接续的序列行也是原型形式。

Since **P** can be transposed to any pitch-class level, we distinguish them with subscripts. There are multiple common systems for deciding the numbering. The simplest, which we will follow in this course, is to number the row by its starting pitch class. If the prime form begins on G (7), it is **P7**; on B (11), **P11**.

由于 **P** 可以移位到任何音级高度，我们用下标加以区分。决定编号的常见体系有多种。最简便的一种——本课程采用这一种——是按序列行的起始音级编号。若原型从 G（7）开始，即为 **P7**；从 B（11）开始，即为 **P11**。

#### Retrograde form｜逆行形式

A retrograde form of the row takes a prime form and exactly reverses the pitch classes. Its interval content, then, are the reverse of the prime forms. Retrograde forms are labeled **R** followed by a subscript denoting the *last* pitch class in the row. This will ensure that if two row forms are exact retrogrades of each other, they will have the same subscript.

序列行的逆行形式取一个原型并把音级完全倒转。其音程内容便是原型音程内容的反向。逆行形式标记为 **R**，后加下标表示序列行中*最后*一个音级。这样可以确保若两个序列行形式互为精确逆行，它们会拥有相同的下标。

For example, if a row has the exact reverse interval structure of the prime forms and ends on F-sharp (6), it is **R6**, regardless of its first pitch.

例如，若某条序列行的音程结构恰为原型的反向、并以 F-sharp（6）结束，则它是 **R6**，无论其第一个音高为何。

#### Inversion form｜倒影形式

A row form that exactly inverts the interval structure of the prime form (for example, 3 semitones up becomes 3 semitones down—or 9 semitones up, modulo12) is in inversion form. Inversion forms are labeled according to the first pitch class of the row form. An inversion-form row that begins on E-flat (3) is **I3**.

音程结构恰为原型之倒影的序列行形式（例如向上 3 个半音变为向下 3 个半音——或按模 12 计为向上 9 个半音）即为倒影形式。倒影形式按该序列行形式的第一个音级命名。从 E-flat（3）开始的倒影形式序列行是 **I3**。

This label is not always the same as the inversion *operation* that produces it. (See the [Analyzing atonal music](/posts/music/post-tonal/resources/atonal/) resource.) If you begin with **P0**, the inversion operation and the resulting row form will have the same subscript. Otherwise, they will be different. Take care not to confuse them.

这一标记并不总与产生它的倒影*操作*相同。（参见[分析无调性音乐](/posts/music/post-tonal/resources/atonal/)一节。）若从 **P0** 开始，倒影操作与所得序列行形式的下标相同。否则两者不同。注意不要混淆。

#### Retrograde inversion｜逆行倒影

The relationship of retrograde inversion (**RI**) and inversion (**I**) forms is the same as that between retrograde (**R**) and prime (**P**). Retrograde inversion forms reverse the pitch classes of inversion forms and are named for the *last* pitch class in the row form.

逆行倒影（**RI**）形式与倒影（**I**）形式之间的关系，同逆行（**R**）形式与原型（**P**）形式之间的关系一样。逆行倒影形式把倒影形式的音级倒转，并按该序列行形式中*最后*一个音级命名。

## Interval progressions｜音程进行

Once you have determined (or decided) which row is *prime*, analyze its interval content in *ordered pitch-class intervals*. This will help you determine if subsequent row forms are **P**, **I**, **R**, or **RI** (or if they do not belong to the same row family).

一旦你判定（或决定）了哪一条序列行是*原型*，就用*有序音级音程*分析其音程内容。这有助于你判断后续的序列行形式是 **P**、**I**、**R** 还是 **RI**（或它们是否不属于同一序列行族）。

For example, the row for Schoenberg’s Op. 25 is:
[E, F, G, Db, Gb, Eb, Ab, D, B, C, A, Bb].

例如，勋伯格 Op. 25 的序列行为：
[E, F, G, Db, Gb, Eb, Ab, D, B, C, A, Bb]。

Its intervals (ascending pitch-class intervals, modulo12) are:
1, 2, 6, 5, 9, 5, 6, 9, 1, 9, 1

其音程（上行音级音程，模 12）为：
1, 2, 6, 5, 9, 5, 6, 9, 1, 9, 1

(Notice that while no pitch class repeats in the row, several intervals appear more than once.)

（注意，虽然序列行中没有音级重复，但有几个音程出现了不止一次。）

The intervals of the inversion form of the row are the same size, opposite direction. You can calculate them by subtracting each of the prime-form intervals from 12:
11, 10, 6, 7, 3, 7, 6, 3, 11, 3, 11

该序列行倒影形式的音程大小相同、方向相反。可以用 12 减去每一个原型音程来计算：
11, 10, 6, 7, 3, 7, 6, 3, 11, 3, 11

Retrograde intervals are tricky (at first). Reversing pitch classes *changes the direction of each interval*. Thus C–A (9) becomes A–C (3). Thus to get the interval progression of the retrograde forms, reverse the intervals of the *inversion*:
11, 3, 11, 3, 6, 7, 3, 7, 6, 10, 11

逆行音程（起初）颇为棘手。倒转音级*会改变每个音程的方向*。于是 C–A（9）变成 A–C（3）。因此，要得到逆行形式的音程进行，就把*倒影*的音程反向：
11, 3, 11, 3, 6, 7, 3, 7, 6, 10, 11

(Test this out with the retrograde form of the row: Bb, A, C, B, . . .)

（可以用该序列行的逆行形式验证：Bb, A, C, B, . . .）

To get the interval succession of the retrograde forms, invert the retrograde interval progression, or reverse the prime interval progression:
1, 9, 1, 9, 6, 5, 9, 5, 6, 2, 1

要得到逆行形式的音程接续，就把逆行音程进行作倒影，或把原型音程进行反向：
1, 9, 1, 9, 6, 5, 9, 5, 6, 2, 1

Take care in determining these first, and it will be easy to classify row forms as you go through a piece. Its interval progression will tell you the type, and the pitch class of the first or last note will give you the subscript. That subscript will tell you the transposition relationship between it and the other row forms of the same type.

先把这些判定好，之后通读作品时对序列行形式进行分类就会很容易。它的音程进行会告诉你其类型，第一个或最后一个音的音级会给出下标。该下标会告诉你它与同类型的其他序列行形式之间的移位关系。
