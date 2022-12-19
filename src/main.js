import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import { useREM } from './utils/flexible'
import mLibs from './libs'
// 注册svg-icons 使用虚拟地址virtual
import 'virtual:svg-icons-register'

useREM()
createApp(App).use(router).use(mLibs).mount('#app')
