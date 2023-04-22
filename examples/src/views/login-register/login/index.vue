<template>
  <div
    class="relative h-screen bg-white dark:bg-zinc-800 text-center xl:bg-zinc-200"
  >
    <!-- 头部图标：PC端 -->
    <header-vue></header-vue>
    <!-- 表单区 -->
    <div
      class="block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:m-auto xl:mt-8 xl:py-4 xl:rounded-sm xl:shadow-lg"
    >
      <h3
        class="hidden mb-2 font-semibold text-base text-main dark:text-zinc-300 xl:block"
      >
        账号登录
      </h3>
      <!-- 表单 -->
      <vee-form @submit="onLoginHandler">
        <!-- 用户名 -->
        <vee-field
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b w-full outline-0 pb-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:default:bg-zinc-900"
          type="text"
          name="username"
          placeholder="用户名"
          autocomplete="on"
          :rules="validateUsername"
          v-model="loginForm.username"
        />
        <vee-error-message
          class="text-sm text-red-600 block mt-0.5 text-left"
          name="username"
        />
        <!-- 密码 -->
        <vee-field
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b w-full outline-0 pb-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:default:bg-zinc-900"
          type="password"
          name="password"
          placeholder="密码"
          autocomplete="on"
          :rules="validatePassword"
          v-model="loginForm.password"
        />
        <vee-error-message
          class="text-sm text-red-600 block mt-0.5 text-left"
          name="password"
        />

        <!-- 跳转按钮 -->
        <div class="pt-1 pb-3 leading-[0px] text-right">
          <a
            class="inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-300 cursor-pointer"
            @click="onToRegister"
            >去注册</a
          >
        </div>

        <!-- 登录按钮 -->
        <PoiButton
          class="w-full dark:bg-zinc-900 xl:dark:bg-zinc-800"
          :isActiveAnim="false"
          :loading="loading"
          >登录</PoiButton
        >

        <!-- 第三方登录 -->
        <div class="flex justify-around mt-4">
          <!-- qq -->
          <qq-login-vue></qq-login-vue>
          <!-- 微信 -->
          <wx-login-vue></wx-login-vue>
        </div>
      </vee-form>
    </div>

    <!-- 人类行为验证模块 -->
    <slider-captcha-vue
      v-if="isSliderCaptchaVisible"
      @close="isSliderCaptchaVisible = false"
      @success="onCaptchaSuccess"
    ></slider-captcha-vue>
  </div>
</template>

<script setup>
import { PoiButton } from 'poicc-components'
import headerVue from '../components/header.vue'
import sliderCaptchaVue from './slider-captcha.vue'
import { ref } from 'vue'
import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage as VeeErrorMessage
} from 'vee-validate'
import { validateUsername, validatePassword } from '../validate'
import { LOGIN_TYPE_USERNAME } from '@/constants'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import qqLoginVue from './qq-login.vue'
import wxLoginVue from './weixin-login.vue'

const store = useStore()
const router = useRouter()

// 控制 sliderCaptcha 展示
const isSliderCaptchaVisible = ref(false)
/**
 * 触发登录
 */
const onLoginHandler = () => {
  isSliderCaptchaVisible.value = true
}

/**
 * 人类行为验证成功回调
 */
const onCaptchaSuccess = () => {
  isSliderCaptchaVisible.value = false
  // 登录操作
  onLogin()
}

/**
 * 用户登录行为
 */
const loading = ref(false)
const loginForm = ref({
  username: 'LGD_Sunday',
  password: '123123'
})
const onLogin = async () => {
  loading.value = true
  // 执行登录操作
  try {
    await store.dispatch('user/login', {
      ...loginForm.value,
      loginType: LOGIN_TYPE_USERNAME
    })
  } finally {
    loading.value = false
  }
  router.push('/')
}

/**
 * 进入注册页面
 */
const onToRegister = () => {
  // 配置跳转方式
  store.commit('app/changeRouterType', 'push')
  router.push('/register')
}
</script>

<style lang="scss" scoped></style>
