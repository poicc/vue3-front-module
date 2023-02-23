import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import mDirectives from './directives'
import useTheme from './utils/theme'
import './permission'

// 注册svg-icons 使用虚拟地址virtual
import 'virtual:svg-icons-register'

useREM()
useTheme()
createApp(App).use(router).use(store).use(mLibs).use(mDirectives).mount('#app')
