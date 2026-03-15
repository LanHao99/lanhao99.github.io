# Adastra

一个以「个人博客」为核心的极简站点。

Adastra 源自拉丁语 *ad astra*（向着群星），在这个项目里，它代表一种写作方式:

- 内容优先，视觉克制
- 结构清晰，阅读轻量
- 保持细节，但不过度装饰

## 特性

- 极简博客体验：主页、归档、分类内容页简洁直达
- Markdown 内容驱动：专注写作，减少模板心智负担
- Astro + Svelte 组合：静态内容性能与交互能力兼顾
- 全文检索：集成 Pagefind
- RSS / Atom：便于订阅
- 适配多端：桌面与移动端一致体验

## 技术栈

- Astro 5
- Svelte 5
- TypeScript
- Stylus / CSS
- Biome
- Pagefind

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发环境

```bash
pnpm dev
```

### 3. 构建生产版本

```bash
pnpm build
```

### 4. 本地预览

```bash
pnpm preview
```

## 常用命令

```bash
pnpm dev         # 本地开发
pnpm build       # 生产构建（含 Pagefind）
pnpm preview     # 预览构建结果
pnpm check       # Astro 检查
pnpm type-check  # TypeScript 检查
pnpm lint        # Biome 检查并写入修复
pnpm format      # Biome 格式化
pnpm new-post    # 新建文章
```

## 目录概览

```text
src/
  components/    # 组件
  content/       # 站点内容（文章、页面等）
  layouts/       # 页面布局
  pages/         # 路由页面
  styles/        # 全局样式
public/          # 静态资源
scripts/         # 构建与工具脚本
```

## 定位

这不是一个「功能越多越好」的博客模板。
它更适合:

- 个人长期写作
- 偏文档化的知识沉淀
- 喜欢克制设计语言的内容站点

## License

[MIT](LICENSE)


