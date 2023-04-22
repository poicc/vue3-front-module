import router from '@/router'
import store from '@/store'
import { PoiMessage } from 'poicc-components'

/**
 * 处理需要登录页面的访问权限
 */
router.beforeEach((to, form) => {
  // 无需登录的页面访问
  if (!to.meta.user) {
    return
  }
  // 已登录
  if (store.getters.token) {
    return true
  }
  // 需要登录才能访问的页面 并且用户没有登录
  PoiMessage('warn', '登录失效，请重新登录!')
  return '/'
})
