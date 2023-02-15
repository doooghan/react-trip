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
6. React 的 class component 的生命周期，组件由生到死可以分为三个阶段

   1. Mounting: 创建虚拟 DOM，渲染 UI

      这是组件第一次绘制，将会创建虚拟 DOM 元素，渲染 UI，在这里完成了组件的加载和初始化

   2. Updating：更新虚拟 DOM，重新渲染 UI

      组件在运行和交互的阶段，在这个阶段可以处理用户的交互，收集监听事件，更新 DOM 元素，重新渲染 UI

   3. Unmounting：删除虚拟 DOM，移除 UI

      是组件卸载消亡的阶段，在这里，我们会对组件做一些清理工作，删除虚拟 DOM 元素，移除 UI

   4. 具体函数
      ![alt生命周期](生命周期.jpeg)

7. setState 是异步还是同步的？
   1. 答案：异步更新，同步执行
   2. setState 本身并非异步，但对 state 的处理机制给人一种异步的假象。state 处理一般发生在生命周期变化的时候
8. 类组件和函数式组件
   1. 类组件由本身携带 state
   2. 函数式组件使用 hook 钩入状态
9. useEffect 的无限循环
   1. 不带第二个参数，当 update 之后执行回调，回调又回 setState，然后触发 update
10. 使用 context 来解决 prop drilling
