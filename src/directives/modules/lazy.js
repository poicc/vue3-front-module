import { useIntersectionObserver } from '@vueuse/core'

export default {
  // 图片懒加载：在用户无法看到图片时，不加载图片，用户可以看到图片时再去加载图片
  mounted(el) {
    // 拿到当前 img 的 src
    const imgSrc = el.src
    // 把 src 变为空
    el.src = ''

    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 当图片可见时 加载图片
        el.src = imgSrc
        // 停止监听
        stop()
      }
    })
  }
}
