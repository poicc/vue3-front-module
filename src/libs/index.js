import { defineAsyncComponent } from 'vue'
export { confirm } from './confirm/index'
export { message } from './message/index'

export default {
  install(app) {
    // app.component('m-svg-icon', svgIcon)
    // app.component('m-popup', popup)

    // 获取当前路径下所有文件夹中的 index.vue
    const components = import.meta.glob('./*/index.vue')
    // 遍历获取到的组件模块
    for (const [fullPath, fn] of Object.entries(components)) {
      // 利用 app.component 进行注册
      const componentName = 'm-' + fullPath.replace('./', '').split('/')[0]
      app.component(componentName, defineAsyncComponent(fn))
    }
  }
}
