<template>
  <div class="h-screen w-screen fixed top-0 left-0">
    <!-- <router-view /> -->
    <poi-transition-router-view
      :routerType="$store.getters.routerType"
      mainComponentName="home"
    >
    </poi-transition-router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
