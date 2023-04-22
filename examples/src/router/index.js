import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '@/utils/flexible'
import mobileRouter from './modules/mobile-router'
import pcRouter from './modules/pc-router'

const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRouter : pcRouter
})

export default router
