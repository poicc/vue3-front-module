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
import { ref } from 'vue'
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
useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
  // 当加载更多的视图可见时 同时 loading 为 false 同时数据尚未全部加载完成
  if (isIntersecting && !loading.value && !props.isFinished) {
    loading.value = true
    emits('onLoad')
  }
})
</script>

<style lang="scss" scoped></style>
