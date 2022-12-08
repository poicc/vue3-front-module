<template>
    <mobile-navigation-view v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationView from './mobile/index.vue'

</script>

<style lang="scss" scoped>

</style>