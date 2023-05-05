# POICC-COMPONENTS 是什么?
> 一个自制组件库，基于Vite技术栈，为学习中前台常用解决方案的通用组件库。

# Features
- ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier
- 🎨 TailwindCSS - the instant on-demand atomic CSS engine

# Install
```bash
npm i poicc-components
```

# Quick Start
```vue
import Vue from 'vue'
import {
  PoiButton,
} from 'poicc-components'

const App = {
  template: `
          <PoiButton/>
      `,
};

createApp(App)
    .mount("#app");
```


# Browser Support

支持大多数现代浏览器和IE10+


