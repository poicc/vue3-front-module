import DefaultTheme from 'vitepress/theme'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import POICCUI from 'poicc-components/es/index.js'

import './styles/var.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(POICCUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}
