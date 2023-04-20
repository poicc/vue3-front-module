<template>
  <div>
    <!-- 蒙版 -->
    <transition name="fade">
      <div
        v-if="isVisable"
        @click="close"
        class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
      ></div>
    </transition>
    <!-- 内容 -->
    <transition name="up">
      <div
        v-if="isVisable"
        class="w-[80%] fixed top-1/3 left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:w-[35%]"
      >
        <!-- 标题 -->
        <div class="text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2">
          {{ title }}
        </div>
        <!-- 内容 -->
        <div class="text-base text-zinc-900 dark:text-zinc-200 mb-2">
          {{ content }}
        </div>
        <!-- 按钮 -->
        <div class="flex justify-end">
          <poi-button type="info" class="mr-2" @click="onCancelClick">{{
            cancelText
          }}</poi-button>
          <poi-button type="primary" @click="onConfirmClick">{{
            confirmText
          }}</poi-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 在方法调用的组件中，需要主动导入组件
import PoiButton from '../button/index.vue'
const props = defineProps({
  // 标题
  title: {
    type: String
  },
  // 描述
  content: {
    type: String,
    required: true
  },
  // 取消按钮文本
  cancelText: {
    type: String,
    default: '取消'
  },
  // 确定按钮文本
  confirmText: {
    type: String,
    default: '确定'
  },
  // 取消按钮事件
  cancelHandler: {
    type: Function
  },
  // 确定按钮事件
  confirmHandler: {
    type: Function
  },
  // 关闭 confirm 的回调
  close: {
    type: Function
  }
})

/**
 * 控制显示处理
 */
const isVisable = ref(false)
const show = () => {
  isVisable.value = true
}

/**
 * 处理动画（render函数的渲染 会直接进行）
 */
onMounted(() => {
  show()
})

const duration = '0.5s'

/**
 * 取消按钮
 */
const onCancelClick = () => {
  if (props.cancelHandler) {
    props.cancelHandler()
  }
  close()
}
/**
 * 确定按钮
 */
const onConfirmClick = () => {
  if (props.confirmHandler) {
    props.confirmHandler()
  }
  close()
}

/**
 * 关闭事件
 */
const close = () => {
  isVisable.value = false
  // 延迟一段时间关闭 等动画执行完之后再去执行close()
  setTimeout(() => {
    if (props.close) {
      props.close()
    }
  }, parseInt(duration.replace('0.', '').replace('s', '') * 100))
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
