<template>
  <div
    class="h-full overflow-auto bg-whited dark:bg-zinc-800 duration-500 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
  >
    <navigation-vue />
    <div class="max-w-screen-xl mx-auto relative m-1 xl:mt-4">
      <list-vue></list-vue>
    </div>

    <!-- 移动端下的 tabbar -->
    <m-trigger-menu
      v-if="isMobileTerminal"
      class="fixed bottom-6 m-auto left-0 right-0 w-[220px]"
    >
      <m-trigger-menu-item
        icon="home"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
        >首页</m-trigger-menu-item
      >
      <m-trigger-menu-item
        v-if="$store.getters.token"
        icon="vip"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
        textClass="text-zinc-400 dark:text-zinc-500"
        @click="onVipClick"
        >VIP</m-trigger-menu-item
      >
      <m-trigger-menu-item
        icon="profile"
        iconClass="fill-zinc-900 dark:fill-zinc-200"
        textClass="text-zinc-400 dark:text-zinc-500"
        @click="onVipClick"
        >{{ $store.getters.token ? '我的' : '去登录' }}</m-trigger-menu-item
      >
    </m-trigger-menu>
  </div>
</template>

<script setup>
import navigationVue from './components/navigation/index.vue'
import listVue from './components/list/index.vue'
import { isMobileTerminal } from '@/utils/flexible'
import { useRouter } from 'vue-router'

const router = useRouter()
const onVipClick = () => {}
</script>

<style lang="scss" scoped></style>
