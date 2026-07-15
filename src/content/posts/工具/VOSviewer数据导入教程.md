---
title: VOSviewer 数据导入教程
published: 2026-07-15
description: 详细介绍 VOSviewer 的三种数据导入方式：文献计量数据、纯文本和网络文件。
cover: /media/VOSviewer/vw-1-en.png
coverInContent: false
pinned: false
tags: [VOSviewer, 数据可视化, 文献计量, 教程]
category: [工具, 数据分析]
author: LanHao
licenseName: CC BY-NC-SA 4.0
sourceLink: https://seinecle.github.io/vosviewer-tutorials/
draft: false
---

> 原作者：Clément Levallois（emlyon 商学院副教授）
> 原始版本：v. 1.6.5, 2017-03-29
> 中文翻译：基于 [vosviewer-tutorials](https://seinecle.github.io/vosviewer-tutorials/) 项目

---

## 教程简介

本教程介绍如何使用 VOSviewer 创建如下所示的语义图谱：

![VOSviewer 图示示例](/media/VOSviewer/vw-1-en.png)

VOSviewer 由莱顿大学 CWTS 研究中心的 Nees Jan van Eck 和 Ludo Waltman 开发。该软件最初为科学计量数据（对科学活动的科学研究）分析而设计，但其应用范围远不止于此。VOSviewer **尤其擅长生成各类文本图谱**，不限于科学计量数据集。

---

## 导入数据集

VOSviewer 支持三种数据导入方式：

1. **直接导入文献计量数据集**（Web of Science、Scopus、Medline 或 RIS 格式）
2. **导入纯文本**，每个段落被视为一个"文本单元"用于计算共现关系
3. **导入自建网络**（例如用 Gephi 等工具创建的网络文件）

下面逐一介绍。

---

### 方式一：导入文献计量数据集（WoS、Scopus 等）

我们需要一个文献计量数据集来练习。

从 PubMed 数据库检索的 1484 篇研究文章（MEDLINE 格式），检索策略为：

```
"social neuroscience" OR "neuroeco*" OR "decision neuroscience"
```

> 在线查看检索式：[PubMed 检索链接](https://www.ncbi.nlm.nih.gov/pubmed?term=(%22social%20neuroscience%22%20OR%20%22neuroeco*%22%20OR%20%22decision%20neuroscience%22))

准备好 `pubmed_medline.txt` 文件后，按以下步骤操作：

**第一步：选择数据源**

![向导步骤 1](/media/VOSviewer/vw-2-en_New.png)

选择"文献计量数据库"类型，加载文件。

**第二步：选择文件**

![向导步骤 2](/media/VOSviewer/vw-3-en_New.png)

**第三步：选择网络类型**

![向导步骤 3](/media/VOSviewer/vw-4-en_New.png)

在这一步决定要构建什么类型的网络。

> **提示：** 关键词共现网络不使用文献条目的摘要，仅使用作者或编辑提供的关键词——这些关键词通常信息量较少。VOSviewer 还提供了另一种利用摘要的方式。

> 关于完全计数（full counting）与二值计数（binary counting）的区别，请参阅：http://seinecle.github.io/gephi-tutiorals/working-with-text-en.html#binary-counting

**第四步：设置作者出现频率阈值**

![向导步骤 4](/media/VOSviewer/vw-5-en.png)

决定作者在数据集中需要达到多高的出现频率才能被纳入可视化。此处设定为：发表论文少于 5 篇的作者将被排除。

**第五步：设置连接强度阈值**

![向导步骤 5](/media/VOSviewer/vw-6-en.png)

可以排除与其他作者连接较弱的作者（因为合著论文较少）。

**第六步：确认作者列表**

![向导步骤 6](/media/VOSviewer/vw-7-en.png)

下一页以表格形式汇总将被纳入可视化的作者。

> 注意：表中存在近似重复项（如 `luo yj` 和 `luo y`），这意味着应该更早使用同义词库文件进行合并。

**第七步：选择是否只显示最大连通组**

![向导步骤 7](/media/VOSviewer/vw-8-en.png)

向导的最后一步询问是否只显示最大的连通作者群组。较小的、与主群组隔离的群组将被丢弃。

点击"否"可以确保显示所有群组。

**结果展示**

![向导步骤 8](/media/VOSviewer/vw-9-en_New.png)

最终生成的网络由作者群组及其连接组成，连接表示他们之间存在合著关系。节点越大，代表该作者发表的论文越多。

> 提示：背景可以切换为黑色——这样更容易阅读。

---

### 方式二：导入文本（不限于文献计量数据）

我们需要一个数据集来练习。

数据集必须是**单个文本文件**，其中每个**段落**被视为一个文本单元。网络将由文本中最频繁出现的术语构成，出现在同一段落中的术语之间会建立连接。

关于文本单元/段落的更多说明，请参阅：https://seinecle.github.io/gephi-tutorials/generated-html/working-with-text-en.html#_computing_connections_edges_in_the_network

从 PubMed 数据库提取的 1484 篇文章摘要（纯文本），检索策略同上。

> 附注：这些摘要是使用 Python 的 Metaknowledge 文献计量工具包从 PubMed 记录中提取的：
>
> ```python
> import metaknowledge as mk
> import networkx as nx
> import matplotlib.pyplot as plt
> %matplotlib inline
> import metaknowledge.contour as mkv
> import pandas
>
> RC = mk.RecordCollection("pubmed_medline.txt")
> for R in RC:
>     if 'AB' in R.keys():
>         print(R['AB'])
>         print('\n')
> ```

![使用 Metaknowledge 提取摘要](/media/VOSviewer/vw-10-en.png)

**按向导创建文本图谱：**

**第一步：启动文本图谱向导**

![文本图谱向导 1](/media/VOSviewer/vw-11-en.png)

**第二步：选择输入文件格式**

![选择 VOSviewer 格式](/media/VOSviewer/vw-13-en.png)

`Vosviewer` 格式：加载由段落组成的纯文本文件。

但 VOSviewer 也内置了科学计量功能，可以直接从 MEDLINE 条目（或 Scopus、Web of Science 等）中提取摘要。因此也可以回到教程开头使用的 `pubmed_medline.txt` 文件，选择 `PubMed` 格式：

![选择 PubMed 格式](/media/VOSviewer/vw-14-en.png)

以 PubMed / Medline 格式加载文件可以进行更精细的控制：

- 可以选择加载摘要、标题或两者
- 系统会自动删除版权声明（如"Copyright @Elsevier 2016"），避免污染文本

![PubMed 格式选项](/media/VOSviewer/vw-15-en.png)

**第三步：选择计数方式和同义词库**

与之前一样，选择二值计数或完全计数，以及是否有同义词库文件。

**第四步：设置术语最低频率**

选择术语出现在文本中的最低总频率：

![术语最低频率](/media/VOSviewer/vw-16-en.png)

**第五步：选择最相关的术语**

系统会邀请你选择最"相关"的术语，并已设置默认参数值。

"相关性"的基本思想是：一个术语越是倾向于与特定词汇关联（而非与所有词汇均匀关联），其相关性就越高。

VOSviewer 开发者在以下论文中详细解释了他们的方法：https://arxiv.org/ftp/arxiv/papers/1109/1109.2058.pdf

![选择最相关的词](/media/VOSviewer/vw-17-en.png)

**第六步：确认术语列表**

向导最后一页以表格形式汇总将被纳入图谱的术语，按相关性排序。

![汇总表格](/media/VOSviewer/vw-18-en.png)

**结果展示**

![术语图谱结果](/media/VOSviewer/vw-19-en.png)

---

### 方式三：导入网络文件（GML 或 Pajek 格式）

这部分比较简单：如果你有 GML 或 Pajek 格式的文件，直接导入即可。

![导入网络](/media/VOSviewer/vw-20-en.png)

> **注意：** 导入用 Gephi 创建的 GML 文件可能会产生错误——这可能是 GML 格式定义不够严格导致的。

---

## 更多资源

- VOSviewer 的使用手册包含在软件下载的压缩包中（PDF 格式）
- VOSviewer 教程网站：https://seinecle.github.io/vosviewer-tutorials/
