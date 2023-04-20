import { defineAsyncComponent } from 'vue'
export { confirm } from './confirm/index.js'
export { message } from './message/index.js'

import PoiButton from './button/index.vue'
import PoiConfirm from './confirm/index.vue'
import PoiCountDown from './count-down/index.vue'
import PoiDialog from './dialog/index.vue'
import PoiInfinite from './infinite/index.vue'
import PoiInput from './input/index.vue'
import PoiNavbar from './navbar/index.vue'
import PoiPopover from './popover/index.vue'
import PoiSearch from './search/index.vue'
import PoiSvgIcon from './svg-icon/index.vue'
import PoiTransitionRouterWiew from './transition-router-view/index.vue'
import PoiTriggerMenu from './trigger-menu/index.vue'
import PoiTriggerMenuItem from './trigger-menu-item/index.vue'
import PoiWaterfull from './waterfull/index.vue'

// export {
//   PoiButton,
//   PoiConfirm,
//   PoiCountDown,
//   PoiDialog,
//   PoiInfinite,
//   PoiInput,
//   PoiNavbar,
//   PoiPopover,
//   PoiSearch,
//   PoiSvgIcon,
//   PoiTransitionRouterWiew,
//   PoiTriggerMenu,
//   PoiTriggerMenuItem,
//   PoiWaterfull
// }

const components = [
  PoiButton,
  PoiConfirm,
  PoiCountDown,
  PoiDialog,
  PoiInfinite,
  PoiInput,
  PoiNavbar,
  PoiPopover,
  PoiSearch,
  PoiSvgIcon,
  PoiTransitionRouterWiew,
  PoiTriggerMenu,
  PoiTriggerMenuItem,
  PoiWaterfull
]
// export function registerPoiUi(app){
export default {
  install(app) {
    // 获取当前路径下所有文件夹中的 index.vue
    const components = import.meta.glob('./*/index.vue')
    // 遍历获取到的组件模块
    for (const [fullPath, fn] of Object.entries(components)) {
      // 利用 app.component 进行注册
      const componentName = 'poi-' + fullPath.replace('./', '').split('/')[0]
      app.component(componentName, defineAsyncComponent(fn))
    }

    // for (const component of components) {
    //   app.component(component.name, component)
    // }
  }
}

// export default registerPoiUi
