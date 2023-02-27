<div align="center">
  <h1>Vue3 Admin Vite</h1>
</div>

## ⚡ 简介

一个可供直接使用的后台管理系统模板，基于 Vue3、TypeScript、Element Plus、Pinia 和 Vite 等主流技术.

- 地址: [vue3-admin-vite](https://github.com/5Iris5/vue3-admin-vite)

## 🌠 特性

- **Vue3**：采用 Vue3 + script setup 最新的 Vue3 组合式 API
- **Element Plus**：Element UI 的 Vue3 版本
- **Pinia**: 传说中的 Vuex5
- **Vite**：真的很快
- **Vue Router**：路由
- **TypeScript**：JavaScript 语言的超集
- **PNPM**：更快速的，节省磁盘空间的包管理工具
- **Scss**：和 Element Plus 保持一致
- **CSS 变量**：主要控制项目的布局和颜色
- **Axios**：发送网络请求（已封装好）
- **ESlint**：语法校验
- **Prettier**：代码格式化
- **Husky**：一款 Git Hooks 工具，可用于挂载 git 钩子
- **Lint-Staged**：对暂存的 git 文件进行校验
- **注释**：各个配置项都写有尽可能详细的注释

## ✨ 功能

- **用户管理**：登录、登出演示
- **权限管理**：内置页面权限（动态路由）、指令权限、权限函数、路由守卫
- **多环境**：开发环境（development）、预发布环境（staging）、正式环境（production）
- **兼容移动端**：布局兼容移动端页面分辨率
- **双主题**：内置普通、暗黑两种主题模式
- **错误页面**: 404
- **其他内置功能**：动态菜单栏、标签页快捷导航、Screenfull 全屏、自适应收缩侧边栏、SVG 等

## 📚 文档

[中文文档]()

## 🍀 思维导图

![web-norm.png](./src/assets/images/web-norm.png)

## 🚀 开发

```bash
# 配置
1. node 版本 16+
2. pnpm 版本 7.x

# 克隆项目
git clone

# 进入项目目录
cd vue3-admin-vite

# 安装依赖
pnpm i

# 启动服务
pnpm dev
```

## ✔️ 预览

```bash
# 预览预发布环境
pnpm preview:stage

# 预览正式环境
pnpm preview:prod
```

## 📦️ 多环境打包

```bash
# 构建预发布环境
pnpm build:stage

# 构建正式环境
pnpm build:prod
```

## 🔧 代码检查

```bash
# 代码格式化
pnpm format

# 代码语法校验
pnpm eslint

# 代码提交并推送到远程仓库
pnpm git
```

## 📝 Git 提交规范参考

- `feat` 增加新的业务功能
- `fix` 修复业务问题/BUG
- `perf` 优化性能
- `style` 更改代码风格, 不影响运行结果
- `types` 类型定义文件更改
- `refactor` 重构代码
- `revert` 撤销更改
- `test` 测试相关, 不涉及业务代码的更改
- `docs` 文档和注释相关
- `chore` 更新依赖/修改脚手架配置等琐事
- `wip` 开发中
- `workflow` 工作流改进
- `ci` 持续集成相关
- `build` 打包
- `release` 发布

## 👷 项目结构

```
vue3-admin-vite
├─ .husky
├─ .vscode
├─ public
│  └─ vite.svg
├─ src
│  ├─ assets  // 静态资源
│  │  ├─ logo.png
│  │  ├─ images
│  │  └─ css
│  │     ├─ reset.css
│  │     └─ element-variables.scss
│  ├─ presets     // 预配置-文件自动生成
│  │  ├─ eslint
│  │  │  └─ eslintrc-auto-import.json  // eslint配置文件
│  │  └─ types
│  │     ├─ auto-imports.d.ts  // api自动导入声明文件位置
│  │     └─ components.d.ts    // 组件自动导入声明文件位置
│  ├─ interfaces // ts类型
│  │  └─ index.ts
│  ├─ api
│  │  └─ login.ts
│  ├─ axios  // http 方法封装
│  │  ├─ index.ts
│  │  └─ request.ts
│  ├─ routers  // 路由配置
│  │  ├─ index.ts
│  │  └─ route.ts
│  ├─ stores  // 状态管理库配置
│  │  └─ index.ts
│  ├─ utils  // 公共方法
│  │  └─ index.ts
│  ├─ layouts   // 布局系统
│  │  └─ notFound.vue
│  ├─ components  // 公共组件
│  │  └─ demo.vue
│  ├─ views   // 业务页面
│  │  └─ business.vue
│  ├─ App.vue
│  ├─ main.ts
│  └─ env.d.ts
├─ .cz-config.cjs
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts // vite 配置
```

## ✔️ 项目预览图

![preview1.png]()

## 📄 License

[MIT](./LICENSE) Copyright (c) 2023 [IrisLong](https://github.com/5Iris5)
