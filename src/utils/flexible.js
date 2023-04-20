// import { PC_DEVICE_WIDTH } from '@/constants'
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
// const { width } = useWindowSize()
/**
 * 判断当前是否为移动设备 判断依据屏幕宽度是否小雨一个指定宽度(1280)
 */
/**
 * 判断当前是否为移动设备
 */
export const isMobileTerminal = computed(() => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
})

/**
 * 动态指定rem基准值 最大为40px
 * 根据用户屏幕宽度 进行计算 把计算出来的值赋值给 html 根标签作为fontsize大小
 */
export const useREM = () => {
  const MAX_FONT_SIZE = 40
  // 监听 html 文档被解析完成的事件
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    html.style.fontSize = fontSize + 'px'
  })
}
