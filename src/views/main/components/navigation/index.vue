<template>
    <mobile-navigation-view v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationView from './mobile/index.vue'
import { useStore } from 'vuex';

const store = useStore()
store.dispatch('category/useCategoryData')
</script>

<style lang="scss" scoped>

</style>