<template>
  <div
    class="w-full h-5 border-b flex items-center z-10 bg-white dark:bg-zinc-800 border-b-zinc-200 dark:border-b-zinc-700"
    :class="[sticky ? 'sticky top-0 left-0' : 'relative']"
  >
    <!-- 左 -->
    <div
      class="h-full w-5 absolute left-0 flex items-center justify-center"
      @click="onClickLeft"
    >
      <slot name="left">
        <PoiSvgIcon
          name="back"
          class="w-2 h-2"
          fillClass="fill-zinc-900 dark:fill-zinc-200"
        ></PoiSvgIcon>
      </slot>
    </div>
    <!-- 中 -->
    <div
      class="h-full flex items-center justify-center m-auto font-bold text-base text-zinc-900 dark:text-zinc-200"
    >
      <slot />
    </div>
    <!-- 右 -->
    <div
      class="h-full w-5 absolute right-0 flex items-center justify-center"
      @click="onClickRight"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<script setup>
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'vue-router'
import PoiSvgIcon from '../svg-icon/index.vue'

const props = defineProps({
  // 左边按钮的点击
  clickLeft: Function,
  // 右边按钮的点击
  clickRight: Function,
  // 是否吸顶
  sticky: Boolean
})

const router = useRouter()
const onClickLeft = () => {
  if (props.clickLeft) {
    props.clickLeft()
    return
  }
  router.back()
}
const onClickRight = () => {
  if (props.clickRight) {
    props.clickRight()
  }
}
</script>

<style lang="scss" scoped></style>
