<template>
  <button
    class="text-sm text-center rounded duration-150 flex justify-center items-center"
    :class="[
      typeEnum[type],
      sizeEnum[sizeKey].button,
      {
        'active:scale-105': isActiveAnim
      }
    ]"
    @click.stop="onBtnClick"
  >
    <!-- loading按钮 -->
    <poi-svg-icon
      v-if="loading"
      name="loading"
      class="w-2 h-2 animate-spin mr-1"
    ></poi-svg-icon>
    <!-- icon按钮 -->
    <poi-svg-icon
      v-if="icon"
      :name="icon"
      class="m-auto"
      :class="sizeEnum[sizeKey].icon"
      :color="iconColor"
      :fillClass="iconClass"
    ></poi-svg-icon>
    <!-- 文字按钮 -->
    <slot v-else />
  </button>
</template>

<script>
import { computed } from 'vue'
import PoiSvgIcon from '../svg-icon/index.vue'

const EMITS_CLICK = 'click'
// type按钮风格可选项
const typeEnum = {
  primary:
    'text-white  bg-zinc-800 dark:bg-zinc-900  hover:bg-zinc-900 dark:hover:bg-zinc-700 active:bg-zinc-800 dark:active:bg-zinc-700',
  main: 'text-white  bg-main dark:bg-zinc-900  hover:bg-hover-main dark:hover:bg-zinc-700 active:bg-main dark:active:bg-zinc-700',
  info: 'text-zinc-800 dark:text-zinc-300  bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-700 '
}
//size按钮大小可选项
const sizeEnum = {
  // 文字按钮
  default: {
    button: 'w-8 h-4 text-base',
    icon: ''
  },
  // icon按钮
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5'
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: ''
  },
  'icon-small': {
    button: 'w-3 h-3',
    icon: 'w-1.5 h-1.5'
  }
}
</script>

<script setup>
/**
 *  构建type风格可选项和size大小可选项
 *  通过props让开发者控制按钮
 *  区分icon button 和 text button
 *  依据当前的数据 实现试图
 *  处理点击事件
 */
const props = defineProps({
  // icon图标
  icon: String,
  // icon颜色
  iconColor: String,
  // icon图标类名
  iconClass: String,
  // 按钮风格
  type: {
    type: String,
    default: 'main',
    validator(val) {
      // 获取所有的可选项
      const keys = Object.keys(typeEnum)
      const res = keys.includes(val)
      if (!res) {
        throw new Error(`你的 type 必须是 ${keys.join('、')}中的一个`)
      }
      return res
    }
  },
  // 大小风格
  size: {
    type: String,
    default: 'default',
    validator(val) {
      const keys = Object.keys(sizeEnum).filter((key) => !key.includes('icon'))
      const res = keys.includes(val)
      if (!res) {
        throw new Error(`你的 size 必须是 ${keys.join('、')}中的一个`)
      }
      return res
    }
  },
  // 按钮点击时 是否需要动画
  isActiveAnim: {
    type: Boolean,
    default: true
  },
  // 加载状态
  loading: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits([EMITS_CLICK])

const sizeKey = computed(() => {
  return props.icon ? 'icon-' + props.size : props.size
})

const onBtnClick = () => {
  if (props.loading) return
  emits(EMITS_CLICK)
}
</script>

<style lang="scss" scoped></style>
