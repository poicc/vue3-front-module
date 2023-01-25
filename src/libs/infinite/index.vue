<template>
  <div>
    <!-- 内容 -->
    <slot />
    <div ref="loadingTarget" class="h-6 py-4">
      <!-- 加载更多 -->
      <m-svg-icon
        v-show="loading"
        class="w-4 h-4 mx-auto animate-spin"
        name="infinite-load"
      ></m-svg-icon>
      <!-- 没有更多数据 -->
      <p v-if="isFinished" class="text-center text-base text-zinc-400">
        已经没有更多数据了！
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useVModel, useIntersectionObserver } from '@vueuse/core'
const props = defineProps({
  // 是否处于加载状态
  modelValue: {
    type: Boolean,
    required: true
  },
  // 数据是否全部加载完成
  isFinished: {
    type: Boolean,
    required: false
  }
})

const emits = defineEmits(['onLoad', 'update:modelValue'])

// 处理 laoding 状态
const loading = useVModel(props)

// 滚动的元素
const loadingTarget = ref(null)
// 记录当前是否在底部
const targetIsIntersection = ref(false)
useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
  targetIsIntersection.value = isIntersecting
  emitLoad()
})

/**
 * 触发 load 事件
 */
const emitLoad = () => {
  // 当加载更多的视图可见时 同时 loading 为 false 同时数据尚未全部加载完成
  if (targetIsIntersection.value && !loading.value && !props.isFinished) {
    loading.value = true
    emits('onLoad')
  }
}

/**
 * 监听Loading变化 解决数据加载完成之后 首屏未铺满的问题
 */
watch(loading, () => {
  setTimeout(() => {
    emitLoad()
  }, 100)
})
</script>

<style lang="scss" scoped></style>
