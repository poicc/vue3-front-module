<template>
  <mobile-navigation-view v-if="isMobileTerminal" />
  <pc-navigation-view v-else />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationView from './mobile/index.vue'
import pcNavigationView from './pc/index.vue'
import { useStore } from 'vuex'

const store = useStore()
store.dispatch('category/useCategoryData')
</script>

<style lang="scss" scoped></style>
