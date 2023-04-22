<template>
  <!-- PC端：头部图标 -->
  <div class="hidden pt-5 h-8 xl:block">
    <img v-lazy class="m-auto w-5 h-5" src="@/assets/images/logo.png" alt="" />
  </div>
  <!-- 移动端：头部图标 -->
  <div class="h-[111px] xl:hidden">
    <img
      class="dark:hidden"
      src="https://res.lgdsunday.club/login-bg.png"
      alt=""
    />
    <img
      class="h-5 absolute top-[5%] left-[50%] translate-x-[-50%]"
      src="@/assets/images/logo.png"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped></style>
