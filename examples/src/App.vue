<template>
  <div class="h-screen w-screen fixed top-0 left-0">
    <!-- <router-view /> -->
    <PoiTransitionRouterWiew
      :routerType="$store.getters.routerType"
      mainComponentName="home"
    >
    </PoiTransitionRouterWiew>
  </div>
</template>

<script setup>
import PoiTransitionRouterWiew from '@/components/transition-router-view/index.vue'
</script>

<style lang="scss" scoped></style>
