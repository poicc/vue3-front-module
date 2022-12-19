<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
      >
        <m-svg-icon name="hamburger" class="w-1.5 h-1.5"></m-svg-icon>
      </li>
      <li
        v-for="(item, index) in data"
        :key="item.id"
        :ref="setItemRef"
        @click="onItemClick(index)"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100': currentCategoryIndex === index
        }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core'
defineProps({
  data: {
    type: Array,
    required: true
  }
})

// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})

// 选中 item 下标
const currentCategoryIndex = ref(0)

// 获取所有的 item 元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}

// 数据改变之后 dom 变化之前
onBeforeUpdate(() => {
  itemRefs = []
})
//获取 ul 元素
const ulTarget = ref()
// 获取响应式的滚动距离
const { x: ulScrollLeft } = useScroll(ulTarget)

// 监听currentCategoryIndex
watch(currentCategoryIndex, (val) => {
  const { left, width } = itemRefs[val].getBoundingClientRect()
  sliderStyle.value = {
    // 滑块的位置 = ul 横向滚动的位置 + 当前元素的left - ul的padding
    transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  }
})

const onItemClick = (index) => {
  currentCategoryIndex.value = index
}
</script>

<style lang="scss" scoped></style>
