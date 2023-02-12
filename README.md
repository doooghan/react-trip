# react-trip

## 技术栈

react + ts + vite + pnpm

## 学习点

1. tsconfig 的简单讲解
2. react 设计理念
   1. 单向数据流
   2. 虚拟 dom
3. css 模组化（css module）
   1. 使用 \*.d.ts 来定义
   2. jss 模块化引入组件
   3. 使用 typescript-plugin-css-modules 来做 css 模块化的 ts 提示
4. 加载图片和字体
5. React 的事件系统，e.target 描述事件发生的元素 和 e.currentTarget 描述事件绑定的元素
6. React 的 class component 的生命周期
7. setState 是异步还是同步的？
   1. 答案：异步更新，同步执行
   2. setState 本身并非异步，但对 state 的处理机制给人一种异步的假象。state 处理一般发生在生命周期变化的时候
