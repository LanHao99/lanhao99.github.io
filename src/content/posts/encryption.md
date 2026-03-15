---
title: 加密文章示例
published: 2020-02-02
description: '密码：123456'
encrypted: true
pinned: false
password: "123456"
tags: [加密]
category: 示例
---


# 密码保护文章

这是 Twilight 主题中一篇密码保护文章的示例。下方内容使用 AES 加密，只有输入正确密码后才能查看。


## Frontmatter 示例

```yaml
---
title: 加密文章示例
published: 2020-02-02
encrypted: true
password: "your-password"
...
---
```

- `encrypted` - 是否启用文章加密。
- `password` - 解锁内容所需的密码。


## 注意

:::warning
不要把它用于保存极其敏感的信息（例如银行卡密码或私钥）。该加密在客户端完成，且密码本身仍存储在文章元数据中（通常不会直接展示）。
:::