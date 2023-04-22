<template>
  <div
    class="h-full bg-zinc-200 dark:bg-zinc-800 duration-400 overflow-auto xl:pt-1"
  >
    <div
      class="relative max-w-screen-lg mx-auto bg-white dark:bg-zinc-900 duration-400 xl:rounded-sm xl:border-zinc-200 xl:dark:border-zinc-600 xl:border-[1px] xl:px-4 xl:py-2"
    >
      <!-- 移动端 navbar -->
      <PoiNavbar sticky v-if="isMobileTerminal" :clickLeft="onNavbarLeftClick">
        个人资料
      </PoiNavbar>
      <!-- pc 端 -->
      <div v-else class="text-lg font-bold text-center mb-4 dark:text-zinc-300">
        个人资料
      </div>
      <div class="h-full w-full px-1 pb-4 text-sm mt-2 xl:w-2/3 xl:pb-0">
        <!-- 头像 -->
        <div class="py-1 xl:absolute xl:right-[16%] xl:text-center">
          <span
            class="w-8 inline-block mb-2 font-bold text-sm dark:text-zinc-300 xl:block xl:mx-auto"
            >我的头像</span
          >
          <!-- 头像部分 -->
          <div
            class="relative w-[80px] h-[80px] group xl:cursor-pointer xl:left-[50%] xl:translate-x-[-50%]"
            @click="onAvatarClick"
          >
            <img
              v-lazy
              :src="$store.getters.userInfo.avatar"
              alt=""
              class="rounded-[50%] w-full h-full xl:inline-block"
            />
            <div
              class="absolute top-0 rounded-[50%] w-full h-full bg-[rgba(0,0,0,.4)] hidden xl:group-hover:block"
            >
              <PoiSvgIcon
                name="change-header-image"
                class="w-2 h-2 m-auto mt-2"
              ></PoiSvgIcon>
              <div
                class="text-xs text-white dark:text-zinc-300 scale-90 mt-0.5"
              >
                点击更换头像
              </div>
            </div>
          </div>
          <!-- 隐藏域 -->
          <input
            v-show="false"
            ref="inputFileTarget"
            type="file"
            accept=".png, .jpeg, .jpg, .gif"
            @change="onSelectImgHandler"
          />
          <p class="mt-1 text-zinc-500 dark:text-zinc-400 text-xs xl:w-10">
            支持 jpg、png、jpeg 格式大小 5M 以内的图片
          </p>
        </div>
        <!-- 用户名 -->
        <div class="py-1 xl:flex xl:items-center xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >用户名</span
          >
          <PoiInput
            v-model="userInfo.nickname"
            class="w-full"
            type="text"
            max="20"
          ></PoiInput>
        </div>
        <!-- 职位 -->
        <div class="py-1 xl:flex xl:items-center xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >职位</span
          >
          <PoiInput
            v-model="userInfo.title"
            class="w-full"
            type="text"
          ></PoiInput>
        </div>
        <!-- 公司 -->
        <div class="py-1 xl:flex xl:items-center xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >公司</span
          >
          <PoiInput
            v-model="userInfo.company"
            class="w-full"
            type="text"
          ></PoiInput>
        </div>
        <!-- 个人主页 -->
        <div class="py-1 xl:flex xl:items-center xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >个人主页</span
          >
          <PoiInput
            v-model="userInfo.homePage"
            class="w-full"
            type="text"
          ></PoiInput>
        </div>
        <!-- 个人介绍 -->
        <div class="py-1 xl:flex xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >个人介绍</span
          >
          <PoiInput
            v-model="userInfo.introduction"
            class="w-full"
            type="textarea"
            max="50"
          ></PoiInput>
        </div>
        <!-- 保存修改 -->
        <PoiButton
          class="w-full mt-2 mb-4 dark:text-zinc-300 dark:bg-zinc-800 xl:w-[160px] xl:ml-[50%] xl:translate-x-[-50%]"
          :loading="loading"
          @click="onChangeProfile"
          >保存修改</PoiButton
        >
        <!-- 移动端退出登录 -->
        <PoiButton
          v-if="isMobileTerminal"
          class="w-full dark:text-zinc-300 dark:bg-zinc-800 xl:w-[160px] xl:ml-[50%] xl:translate-x-[-50%]"
          @click="onLogoutClick"
        >
          退出登录
        </PoiButton>
      </div>
    </div>

    <!-- PC 端 -->
    <PoiDialog v-if="!isMobileTerminal" v-model="isDialogVisible">
      <change-avatar-vue
        :blob="currentBolb"
        @close="isDialogVisible = false"
      ></change-avatar-vue>
    </PoiDialog>
    <!-- 移动端 -->
    <PoiPopup
      v-else
      :class="{ 'h-screen': isDialogVisible }"
      v-model="isDialogVisible"
    >
      <change-avatar-vue
        :blob="currentBolb"
        @close="isDialogVisible = false"
      ></change-avatar-vue>
    </PoiPopup>
  </div>
</template>

<script setup>
import {
  PoiSvgIcon,
  PoiNavbar,
  PoiButton,
  PoiInput,
  PoiPopup,
  PoiDialog
} from 'poicc-components'
import { isMobileTerminal } from '@/utils/flexible'
import { putProfile } from '@/api/sys'
import { PoiMessage, PoiConfirm } from 'poicc-components'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref, watch } from 'vue'
import changeAvatarVue from './components/change-avatar.vue'

const store = useStore()
const router = useRouter()

/**
 * 移动端下 navbar 左侧点击事件
 */
const onNavbarLeftClick = () => {
  store.commit('app/changeRouterType', 'push')
  router.back()
}

/**
 * 移动端退出登录
 */
const onLogoutClick = () => {
  PoiConfirm('确实要退出登录吗？').then(() => {
    store.dispatch('user/logout')
  })
}

// 控制 dialog 的展示
const isDialogVisible = ref(false)
// 选中的图片
const currentBolb = ref('')

/**
 * 数据本地的双向同步，增加一个单层深拷贝
 */
const userInfo = ref({ ...store.getters.userInfo })
// const changeStoreUserInfo = (key, value) => {
//     store.commit('user/setUserInfo', {
//     ...store.getters.userInfo,
//     [key]: value
//   })
// }

/**
 * 选择头像
 */
const inputFileTarget = ref(null)
const onAvatarClick = () => {
  inputFileTarget.value.click()
}

/**
 * 选中文件之后的回调
 */
const onSelectImgHandler = () => {
  // 获取选中的文件
  const imgFile = inputFileTarget.value.files[0]
  // 生成blob对象
  const blob = URL.createObjectURL(imgFile)
  // 获取到 blob（类文件对象）
  currentBolb.value = blob
  // 展示 dialog
  isDialogVisible.value = true
}

/**
 * 当两次选择文件，是同一个的时候， change 的回调不会被再次触发
 * 解决这个问题 需要在每次选择的图片不再被使用之后  清空掉inputTargrt 的 value
 */
watch(isDialogVisible, (val) => {
  if (!val) {
    inputFileTarget.value.value = null
  }
})

/**
 * 修改个人信息
 */
const loading = ref(false)
const onChangeProfile = async () => {
  loading.value = true
  userInfo.value.avatar = store.getters.userInfo.avatar
  await putProfile(userInfo.value)
  PoiMessage('success', '用户信息修改成功')
  store.commit('user/setUserInfo', userInfo.value)
  loading.value = false
}
</script>

<style lang="scss" scoped></style>
