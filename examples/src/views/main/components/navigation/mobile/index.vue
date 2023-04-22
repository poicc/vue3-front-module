<template>
  <div class="bg-white dark:bg-zinc-900 sticky top-0 left-0 z-10 duration-500">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 dark:bg-zinc-800 rounded-lg duration-200"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        @click="onShowPopup"
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 z-20 shadow-l-white dark:shadow-l-zinc"
      >
        <PoiSvgIcon name="hamburger" class="w-1.5 h-1.5"></PoiSvgIcon>
      </li>
      <li
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        :ref="setItemRef"
        @click="onItemClick(item)"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{
          'text-zinc-100': $store.getters.currentCategoryIndex === index
        }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <PoiPopup v-model="isOpenPopup">
    <menu-vue @onItemClick="onItemClick" />
  </PoiPopup>
</template>

<script setup>
import { PoiPopup, PoiSvgIcon } from 'poicc-components'
import { ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import MenuVue from '@/views/main/components/menu/index.vue'
import { useStore } from 'vuex'

const store = useStore()

// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})

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

// 监听currentCategoryIndex 监听getters 需要返回一个函数
watch(
  () => store.getters.currentCategoryIndex,
  (val) => {
    console.log(itemRefs)
    console.log(val)
    const { left, width } = itemRefs[val].getBoundingClientRect()
    sliderStyle.value = {
      // 滑块的位置 = ul 横向滚动的位置 + 当前元素的left - ul的padding
      transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
      width: width + 'px'
    }
  }
)

const onItemClick = (item) => {
  store.commit('app/changeCurrentCategory', item)
  isOpenPopup.value = false
}

// 控制 popup 展示
const isOpenPopup = ref(false)
const onShowPopup = () => {
  isOpenPopup.value = true
}
</script>

<style lang="scss" scoped></style>
