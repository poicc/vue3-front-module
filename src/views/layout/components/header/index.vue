<template>
  <div
    class="w-full bg-white dark:bg-zinc-800 border-b border-b-zinc-200 dark:border-b-zinc-700 px-2 py-1 duration-500"
  >
    <div class="flex items-center">
      <img
        v-lazy
        class="h-4 cursor-pointer mr-2"
        src="https://tva1.sinaimg.cn/large/008vxvgGgy1h9evd3v579j30b40b4weh.jpg"
        @click="onToHome"
      />
      <header-search-vue></header-search-vue>
      <header-theme-vue></header-theme-vue>
      <header-my-vue></header-my-vue>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import headerSearchVue from './header-search/index.vue'
import headerThemeVue from './header-theme.vue'
import headerMyVue from './header-my.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const onToHome = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped></style>
