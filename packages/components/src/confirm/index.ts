// import PoiConform from './index.vue';

// export default PoiConform;

import { h, render } from 'vue'
import confirmComponent from './index.vue'

/**
 * 展示Confrim 若用户只传递一个参数 就会作为content
 * @param {*} title 标题(若不传内容 标题就会作为内容)
 * @param {*} content 内容(若不传标题 内容就会作为标题)
 * @param {*} cancelText 取消按钮文本
 * @param {*} confirmText 确定按钮文本
 * @returns
 */
const confirm = (
  title,
  content,
  cancelText = '取消',
  confirmText = '确定'
) => {
  return new Promise((resolve, reject) => {
    // 允许只传递 content
    if (title && !content) {
      content = title
      title = ''
    }

    // 关闭弹层事件
    const close = () => {
      render(null, document.body)
    }

    // 取消按钮事件
    const cancelHandler = () => {
      reject(new Error('取消按钮点击'))
    }

    // 确定按钮事件
    const confirmHandler = () => {
      resolve()
    }

    // 1. vnode
    const vnode = h(confirmComponent, {
      title,
      content,
      cancelText,
      confirmText,
      confirmHandler,
      cancelHandler,
      close
    })
    // 2. render
    render(vnode, document.body)
  })
}


export default confirm