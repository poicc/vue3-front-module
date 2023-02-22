<template>
  <div>
    <!-- 蒙版 -->
    <transition name="fade">
      <div
        v-if="isVisible"
        @click="close"
        class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
      ></div>
    </transition>
    <!-- 内容区 -->
    <transition name="up">
      <div
        v-if="isVisible"
        class="max-w-[80%] max-h-[80%] overflow-auto fixed top-[10%] left-[50%] translate-x-[50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:min-w-[35%]"
      >
        <!-- 标题 -->
        <div class="text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2">
          {{ title }}
        </div>
        <!-- 内容 -->
        <div class="text-base text-zinc-900 dark:text-zinc-200 mb-2">
          <slot />
        </div>
        <!-- 按钮 -->
        <div class="flex justify-end" v-if="cancelHandler || confirmHandler">
          <m-button type="info" class="mr-2" @click="onCancelClick">{{
            cancelText
          }}</m-button>
          <m-button type="primary" class="mr-2" @click="onConfirmClick">{{
            confirmText
          }}</m-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useVModel } from '@vueuse/core'

const props = definePros({
  // 控制开关
  modelValue: {
    type: Boolean,
    required: true
  },
  // 标题
  title: {
    type: String
  },
  // 取消按钮文本
  cancelText: {
    type: String,
    default: '取消'
  },
  // 确实按钮文本
  confirmText: {
    type: String,
    default: '确定'
  },
  // 取消按钮点击事件
  cancelHandler: {
    type: Function
  },
  // 确定按钮点击事件
  confirmHandler: {
    type: Function
  },
  // 关闭的回调
  close: {
    type: Function
  }
})

defineEmits(['update:modelValue'])

// 控制显示
const isVisible = useVModel(props)

/**
 * 取消按钮点击事件
 */
const onCancelClick = () => {
  if(props.cancelHandler) {
    props.cancelHandler()
  }
  close()
}

/**
 * 确定按钮点击事件
 */
 const onConfirmClick = () => {
  if(props.confirmHandler) {
    props.confirmHandler()
  }
  close()
 }

 /**
  * 关闭
  */
 const close = () => {
  isVisible.value = false
  if(props.close) {
    props.close()
  }
 }
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all v-bind(duration);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.up-enter-active,
.up-leave-active {
  transition: all v-bind(duration);
}

.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 100px, 0);
}
</style>
