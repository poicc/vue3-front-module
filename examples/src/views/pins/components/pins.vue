<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen text-xl bg-white dark:bg-zinc-800 z-20 backdrop-blur-4xl xl:bg-transparent pb-2 overflow-y-auto xl:p-2"
  >
    <!-- 移动端下的 navbar -->
    <PoiNavbar v-if="isMobileTerminal" sticky>
      {{ pexelData.title }}

      <template #right>
        <PoiSvgIcon
          name="share"
          class="w-3 h-3"
          fillClass="fill-zinc-900 dark:fill-zinc-200"
        ></PoiSvgIcon>
      </template>
    </PoiNavbar>

    <!-- pc端下的navbar -->
    <PoiSvgIcon
      v-else
      name="close"
      class="w-3 h-3 ml-1 p-0.5 cursor-pointer duration-200 rounded-sm hover:bg-zinc-100 absolute right-2 top-2"
      fillClass="fill-zinc-400"
      @click="onPop"
    ></PoiSvgIcon>

    <!-- 内容区 -->
    <div
      v-if="pexelData.title"
      class="xl:w-[80%] xl:h-full xl:mx-auto xl:rounded-lg xl:flex"
    >
      <img
        class="w-screen mb-2 xl:w-3/5 xl:h-full xl:rounded-tl-lg xl:rounded-bl-lg"
        :src="pexelData.photo"
        alt=""
      />
      <div
        class="xl:w-2/5 xl:h-full xl:bg-white xl:dark:bg-zinc-900 xl:rounded-tr-lg xl:rounded-tb-lg xl:p-3"
      >
        <!-- pc:收藏、分享 -->
        <div v-if="!isMobileTerminal" class="flex justify-between mb-2">
          <!-- 分享  -->
          <PoiSvgIcon
            name="share"
            class="w-4 h-4 p-1 cursor-pointer hover:bg-zinc-200 dark:hover-zinc-800 duration-300 rounded"
          ></PoiSvgIcon>
          <!-- 收藏 -->
          <PoiButton
            type="info"
            icon="heart"
            iconClass="fill-zinc-900 dark:fill-zinc-200"
          ></PoiButton>
        </div>
        <!-- 标题  -->
        <p
          class="text-base text-zinc-900 dark:text-zinc-200 ml-1 font-bold xl:text-xl xl:mb-5"
        >
          {{ pexelData.title }}
        </p>
        <!-- 作者 -->
        <div class="flex items-center px-1 mt-1">
          <img class="h-3 w-3 rounded-full" :src="pexelData.avatar" alt="" />
          <span class="text-base text-zinc-900 dark:text-zinc-200 ml-1">{{
            pexelData.author
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PoiSvgIcon, PoiNavbar, PoiButton } from 'poicc-components'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getPexelsFromId } from '@/api/pexels'
import { isMobileTerminal } from '@/utils/flexible'
import { useStore } from 'vuex'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const router = useRouter()

const pexelData = ref({})
const getPexlesData = async () => {
  const data = await getPexelsFromId(props.id)
  pexelData.value = data
}
getPexlesData()

const store = useStore()
const onPop = () => {
  store.commit('app/changeRouterType', 'push')
  router.back()
}
</script>

<style lang="scss" scoped></style>
