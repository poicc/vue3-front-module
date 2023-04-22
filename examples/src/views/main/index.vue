<template>
  <div
    class="h-full overflow-auto bg-whited dark:bg-zinc-800 duration-500 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
    ref="containerTarget"
  >
    <navigation-vue />
    <div class="max-w-screen-xl mx-auto relative m-1 xl:mt-4">
      <list-vue></list-vue>
    </div>

    <!-- 移动端下的 tabbar -->
    <PoiTriggerMenu
      v-if="isMobileTerminal"
      class="fixed bottom-6 m-auto left-0 right-0 w-[220px]"
    >
      <PoiTriggerMenuItem
        icon="home"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
        >首页</PoiTriggerMenuItem
      >
      <PoiTriggerMenuItem
        v-if="$store.getters.token"
        icon="vip"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
        textClass="text-zinc-400 dark:text-zinc-500"
        @click="onVipClick"
        >VIP</PoiTriggerMenuItem
      >
      <PoiTriggerMenuItem
        icon="profile"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
        textClass="text-zinc-400 dark:text-zinc-500"
        @click="onMyClick"
        >{{ $store.getters.token ? '我的' : '去登录' }}</PoiTriggerMenuItem
      >
    </PoiTriggerMenu>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<script setup>
import { PoiTriggerMenu, PoiTriggerMenuItem } from 'poicc-components'
import navigationVue from './components/navigation/index.vue'
import listVue from './components/list/index.vue'
import { isMobileTerminal } from '@/utils/flexible'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useScroll } from '@vueuse/core'
import { onActivated, ref } from 'vue'

const router = useRouter()
const store = useStore()

/**
 * 记录滚动
 */
const containerTarget = ref(null)
const { y: containerTargetScrollY } = useScroll(containerTarget)
// 被缓存的组件再次可见会回调次方法
onActivated(() => {
  if (!containerTarget.value) {
    return
  }
  containerTarget.value.scrollTop = containerTargetScrollY.value
})

const onVipClick = () => {
  store.commit('app/changeRouterType', 'push')
  router.push('/member')
}

const onMyClick = () => {
  store.commit('app/changeRouterType', 'push')
  if (store.getters.token) {
    router.push('/profile')
  } else {
    router.push('/login')
  }
}
</script>

<style lang="scss" scoped></style>
