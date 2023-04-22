<template>
  <div class="bg-white dark:bg-zinc-900 xl:dark:bg-zinc-800 rounded pb-1">
    <div
      class="relative w-full rounded cursor-zoom-in group"
      :style="{ backgroundColor: randomRGB() }"
      @click="onToPinsClick"
    >
      <!-- 图片 -->
      <img
        ref="imgTarget"
        v-lazy
        :src="data.photo"
        class="w-full rounded bg-transparent"
        :style="{
          height: (width / data.photoWidth) * data.photoHeight + 'px'
        }"
        alt=""
      />
      <!-- 遮罩层 -->
      <div
        class="hidden opacity-0 w-full h-full bg-zinc-900/50 absolute top-0 left-0 rounded duration-300 group-hover:opacity-100 xl:block"
      >
        <!-- 分享 -->
        <PoiButton class="absolute top-1.5 left-1.5" @click="onShareClick"
          >分享</PoiButton
        >
        <!-- 点赞 -->
        <PoiButton
          class="absolute top-1.5 right-1.5"
          type="info"
          icon="heart"
          iconClass=" fill-zinc-900 dark:fill-zinc-200"
        ></PoiButton>
        <!-- 下载 -->
        <PoiButton
          class="absolute bottom-1.5 left-1.5 bg-zinc-100/70"
          type="info"
          icon="download"
          iconClass=" fill-zinc-900 dark:fill-zinc-200"
          @click="onDownload"
        ></PoiButton>
        <!-- 全屏 -->
        <PoiButton
          class="absolute bottom-1.5 right-1.5 bg-zinc-100/70"
          type="info"
          icon="full"
          iconClass=" fill-zinc-900 dark:fill-zinc-200"
          @click="onImgFullScreen"
        ></PoiButton>
      </div>
    </div>
    <!-- 标题 -->
    <p class="text-sm mt-1 font-bold text-zinc-900 dark:text-zinc-300 px-1">
      {{ data.title }}
    </p>
    <!-- 作者 -->
    <div class="flex items-center mt-1 px-1">
      <img v-lazy :src="data.avatar" class="h-2 w-2 rounded-full" alt="" />
      <span class="text-sm text-zinc-500 ml-1">{{ data.author }}</span>
    </div>
  </div>
</template>

<script setup>
import { PoiButton } from 'poicc-components'
import { randomRGB } from '@/utils/color'
import { saveAs } from 'file-saver'
import { PoiMessage } from 'poicc-components'
import { ref, computed } from 'vue'
import { useFullscreen, useElementBounding } from '@vueuse/core'
import { weiboShare } from '@/utils/share'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  width: {
    type: Number
  }
})

const emits = defineEmits(['click'])

/**
 * 下载按钮点击事件
 */
const onDownload = () => {
  PoiMessage('success', '图片开始下载')
  // 延迟一段时间执行 可以得到更好的体验
  setTimeout(() => {
    /**
     * 1. 下载的图片链接
     */
    saveAs(props.data.photoDownLink)
  }, 100)
}

/**
 * 生成全屏的方法
 */
const imgTarget = ref(null)
const { enter: onImgFullScreen } = useFullscreen(imgTarget)

/**
 * pins 跳转记录 记录图片的中心点（x | y 位置 + 宽 ｜ 高 一半）
 */
const {
  x: imgContainerX,
  y: imgContainerY,
  width: imgContainerWidth,
  height: imgContainerHeight
} = useElementBounding(imgTarget)
const imgContainerCenter = computed(() => {
  return {
    translateX: parseInt(imgContainerX.value + imgContainerWidth / 2),
    translateY: parseInt(imgContainerY.value + imgContainerHeight / 2)
  }
})

/**
 * 进入详情点击事件
 */
const onToPinsClick = () => {
  emits('click', {
    id: props.data.id,
    location: imgContainerCenter
  })
}

/**
 * 分享按钮点击处理
 */
const onShareClick = () => {
  weiboShare(
    props.data.photo,
    `https://imooc-front.lgdsunday.club/pins/${props.data.id}`
  )
}
</script>

<style lang="scss" scoped></style>
