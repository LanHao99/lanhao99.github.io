---
title: "倒影"
published: 2022-03-16
description: "音高集合倒影的运算方法，以及倒影与移位的关系。"
cover: /media/music/graphics/postTonal/inversion.png
coverInContent: false
pinned: false
tags: [后调性, 集合理论]
category: [音乐理论, 后调性音乐]
author: Open Music Theory
licenseName: CC BY-SA 4.0
licenseUrl: https://creativecommons.org/licenses/by-sa/4.0/
sourceLink: https://openmusictheory.github.io/inversion.html
comment: true
draft: false
---

*Inversion*

Inversion, like transposition, is often associated with motion that connects similar objects. You need to be able to (1) invert a collection of pitches and (2) determine the inversional relationship between two collections of pitches.

倒影与移位一样，常常与连接相似对象的运动相联系。你需要能够做到两件事：（1）把一个音高集合加以倒影；（2）确定两个音高集合之间的倒影关系。

[![倒影](/media/music/graphics/postTonal/inversion.png)](/media/music/graphics/postTonal/inversion.png)

This passage above from Debussy’s “Sunken Cathedral” is an example. Just as was the case in the [transpositionally-related passages｜移位相关的片段](/posts/music/post-tonal/set-theory/transposition/), these two gestures have the same intervallic content—and so, our ears recognize them as very similar. (Debussy underscores that similarity by giving both of the gestures the same rhythmic setting.) Unlike transposition, however, the interval content of these two gestures is not *arranged* in the same way.

上面选自德彪西《沉没的教堂》的这一片段即是一例。正如[移位相关的片段](/posts/music/post-tonal/set-theory/transposition/)中的情形一样，这两个动机具有相同的音程内容——因此我们的耳朵会把它们听成非常相似。（德彪西以相同的节奏形态赋予两个动机，从而强调这种相似性。）然而与移位不同，这两个动机的音程内容并非以相同的方式*排列*。

[![倒影相关的集合](/media/music/graphics/postTonal/inversionallyRelated.png)](/media/music/graphics/postTonal/inversionallyRelated.png)

Both have the same intervals, but the {A,D,E} collection has the +5 on the bottom instead of on the top.

二者含有相同的音程，但 {A,D,E} 集合把 +5 放在下方，而不是放在上方。

Inverting something is a two-step process, performed *in this order*: (1) Reflect the pitch classes in an object around the 0-6 axis of symmetry, and then (2) transpose it. I’ll illustrate first on a clock, and then show you an easier way:

对某事物进行倒影是一个分两步的过程，须*按此顺序*进行：（1）把对象中的音级围绕 0-6 对称轴加以反折，然后（2）对它进行移位。我先用钟面来说明，然后再向你介绍一种更简便的方法：

[![用钟面进行倒影](/media/music/graphics/postTonal/invertingWithAClock.png)](/media/music/graphics/postTonal/invertingWithAClock.png)

Fortunately, there is a much quicker way to invert a pitch or collection of pitches! Given any collection of pitch classes and a *TnI*, simply subtract the the pitch classes from *n:*

所幸，还有一种快得多的方法可以对某个音高或音高集合进行倒影！给定任意一个音级集合以及一个 *TnI*，只需用 *n* 减去这些音级：

[![差值](/media/music/graphics/postTonal/differences.png)](/media/music/graphics/postTonal/differences.png)

Conversely, to determine the *TnI* that relates two collections of pitch classes, find a common value to which they all sum. That is the *n* in *TnI:*

反之，要确定联系两个音级集合的 *TnI*，就找出它们各自相加后所共有的那个和。那个和就是 *TnI* 中的 *n*：

[![和](/media/music/graphics/postTonal/sums.png)](/media/music/graphics/postTonal/sums.png)
