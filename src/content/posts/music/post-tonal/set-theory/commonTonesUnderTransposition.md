---
title: "移位下的共同音"
published: 2022-03-20
description: "集合在移位操作下保持不变的共同音数量与计算方法。"
cover: /media/music/graphics/postTonal/commonTonesUnderTransposition.png
coverInContent: false
pinned: false
tags: [后调性, 集合理论]
category: [音乐理论, 后调性音乐]
author: Open Music Theory
licenseName: CC BY-SA 4.0
licenseUrl: https://creativecommons.org/licenses/by-sa/4.0/
sourceLink: https://openmusictheory.github.io/commonTonesUnderTransposition.html
comment: true
draft: false
---

*Common Tones under Transposition*

## Common Tones under Transposition｜移位下的共同音

We’ve already seen that the set class list can tell us some very interesting and important things about the intervallic properties of a set class and its complement.

我们已经看到，集合类表可以就某一集合类及其补集的音程性质，告诉我们一些十分有趣且重要的信息。

It can also tell us how many common tones are retained when a set is transposed. Here’s how it works:

它还可以告诉我们，当一个集合被移位时能保留多少个共同音。其原理如下：

Each placeholder in the interval vector tells us how many of a particular interval class are in a given set class. For example, in the (027) set class shown below, all members of that class will have two interval class 5s and one interval class 2.

音程向量中的每一个数位都告诉我们，某一特定音程类在给定集合类中出现多少个。例如，在下面所示的 (027) 集合类中，该类的所有成员都含有两个音程类 5 和一个音程类 2。

*Those numbers also tell us how many common tones are retained when those sets are transposed by a member of that interval class*. That is, because there is a *1* in the second column, a pitch class set belonging to (027) will retain *1* common tone when transposed by either *T2* or *T10*. Because there is a *2* in the fifth column, it will retain *2* common tones when transposed by either *T5* or *T7*.

*这些数字还告诉我们，当这些集合被该音程类中的某个音程移位时，能保留多少个共同音*。也就是说，由于第二列是 *1*，属于 (027) 的音级集合在经 *T2* 或 *T10* 移位后会保留 *1* 个共同音。由于第五列是 *2*，它在经 *T5* 或 *T7* 移位后会保留 *2* 个共同音。

[![移位下的共同音](/media/music/graphics/postTonal/commonTonesUnderTransposition.png)](/media/music/graphics/postTonal/commonTonesUnderTransposition.png)

You can see this explicitly below. I’ve taken four arbitrary members of (027)—show on the left—and transposed them in various ways. As indicated above, only *T2*, *T10*, *T5*, or *T7* will keep common tones. Any other transposition will have zero common tones.

下面可以更清楚地看到这一点。我取出 (027) 的四个任意成员——显示在左侧——并以各种方式对它们进行移位。如上所述，只有 *T2*、*T10*、*T5* 或 *T7* 会保留共同音。任何其他移位都会得到零个共同音。

[![移位下的共同音（示例二）](/media/music/graphics/postTonal/commonTonesUnderTransposition2.png)](/media/music/graphics/postTonal/commonTonesUnderTransposition2.png)

If an interval class vector has a tritone, it will retain twice as many common tones under tritone transposition than is indicated in the vector. For example, the trichord (016) has an interval vector of <100011>. When transposed by *T6*, it will have 2—not 1—common tones.

如果音程向量中含有三全音，那么在经三全音移位时保留的共同音数量将是向量中所指示的两倍。例如，三音集合 (016) 的音程向量为 <100011>。当经 *T6* 移位时，它将有 2 个——而不是 1 个——共同音。
