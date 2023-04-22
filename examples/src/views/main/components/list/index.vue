<template>
  <div>
    <PoiInfinite
      v-model="loading"
      :isFinished="isFinished"
      @onLoad="getPexlesData"
    >
      <PoiWaterfull
        class="px-1 w-full"
        :data="pexlesList"
        :column="isMobileTerminal ? 2 : 5"
        :picturePreReading="false"
      >
        <template v-slot="{ item, width }">
          <item-vue :data="item" :width="width" @click="onToPins"></item-vue>
        </template>
      </PoiWaterfull>
    </PoiInfinite>

    <!-- 详情内容展示  -->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <pins-vue v-if="isVisiblePins" :id="currentPins.id"></pins-vue>
    </transition>
  </div>
</template>

<script setup>
import { PoiInfinite, PoiWaterfull } from 'poicc-components'
import { getPexlesList } from '@/api/pexels'
import { ref, watch } from 'vue'
import itemVue from './item.vue'
import { isMobileTerminal } from '@/utils/flexible'
import { useStore } from 'vuex'
import pinsVue from '../../../pins/components/pins.vue'
import gsap from 'gsap'
import { useEventListener } from '@vueuse/core'

const store = useStore()
/**
 * 构建数据请求
 */
let query = {
  page: 1,
  size: 20,
  categoryId: '',
  searchText: ''
}
// 数据是否在加载中
const loading = ref(false)
// 数据是否全部加载完成
const isFinished = ref(false)
// 数据源
const pexlesList = ref([])
const getPexlesData = async () => {
  // 数据全部加载完成 return
  if (isFinished.value) {
    return
  }

  // 完成第一次请求之后 后续的请求让page自增
  if (pexlesList.value.length) {
    query.page += 1
  }

  const res = await getPexlesList(query)
  if (query.page === 1) {
    pexlesList.value = res.list
  } else {
    pexlesList.value.push(...res.list)
  }

  // 判断数据是否全部加载完成
  if (pexlesList.value.length === res.total) {
    isFinished.value = true
  }
  loading.value = false
}

const resetQuery = (newQuery) => {
  query = { ...query, ...newQuery }
  // 重置状态
  isFinished.value = false
  pexlesList.value = []
}

/**
 * 监听 currentCategory变化
 */
watch(
  () => store.getters.currentCategory,
  (currentCategory) => {
    console.log(currentCategory)
    resetQuery({
      page: 1,
      categoryId: currentCategory.id
    })
  }
)

/**
 * 监听搜索内容项的变化
 */
watch(
  () => store.getters.searchText,
  (val) => {
    // 重置请求参数
    resetQuery({
      page: 1,
      searchText: val
    })
  }
)

//控制 pins 展示
const isVisiblePins = ref(false)
// 当前选中的 pins 属性
const currentPins = ref({})

/**
 * 监听浏览器后退按钮事件
 */
useEventListener(window, 'popstate', () => {
  isVisiblePins.value = false
})

/**
 * 进入 pins
 */
const onToPins = (item) => {
  history.pushState(null, null, `/pins/${item.id}`)
  currentPins.value = item
  isVisiblePins.value = true
}

const beforeEnter = (el) => {
  gsap.set(el, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: '0 0',
    translateX: currentPins.value.location?.translateX,
    translateY: currentPins.value.location?.translateY,
    opacity: 0
  })
}
const enter = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    translateX: 0,
    translateY: 0,
    onComplete: done
  })
}
const leave = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 0,
    scaleY: 0,
    opacity: 0,
    translateX: currentPins.value.location?.translateX,
    translateY: currentPins.value.location?.translateY,
    onComplete: done
  })
}
</script>

<style lang="scss" scoped></style>
