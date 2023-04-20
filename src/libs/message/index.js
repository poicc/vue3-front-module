import { h, render } from 'vue'
import messageComponent from './index.vue'

/**
 *
 * @param {*} type 类型
 * @param {*} content 文本
 * @param {*} duration 展示时间
 */
export const message = (type, content, duration = 3000) => {
  /**
   * 动画结束时的回调
   */
  const onDestroy = () => {
    // 3. message 销毁
    render(null, document.body)
  }

  // 1. 拿到 vnode
  const vnode = h(messageComponent, {
    type,
    content,
    duration,
    destroy: onDestroy
  })
  // 2. render vnode
  render(vnode, document.body)
}
