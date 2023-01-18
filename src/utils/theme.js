import { watch } from 'vue'
import store from '@/store'
import { THEME_LIGHT, THEME_DARK } from '@/constants'

/**
 * 初始化主题
 */
export default () => {
  // 当主题发生改变 进行html class的设置
  watch(
    () => store.getters.themeType,
    (val) => {
      let themeClassName = ''

      switch (val) {
        case THEME_LIGHT:
          themeClassName = 'light'
          break
        case THEME_DARK:
          themeClassName = 'dark'
          break
      }

      // 修改 html 的 class
      document.querySelector('html').className = themeClassName
    },
    {
      // 初始执行一次
      immediate: true
    }
  )
}
