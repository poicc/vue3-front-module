<template>
  <m-popover class="flex items-center" placement="bottom-left">
    <template #reference>
      <div
        class="guide-my relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:hover:bg-zinc-900"
        v-if="$store.getters.token"
      >
        <img
          v-lazy
          class="w-3 h-3 rounded-sm"
          :src="
            $store.getters.userInfo.avatar ||
            'https://avatars.githubusercontent.com/u/59445871?v=4'
          "
          alt=""
        />
        <!-- 下箭头 -->
        <m-svg-icon
          class="h-1.5 w-1.5 ml-0.5"
          name="down-arrow"
          fillClass=" fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <!-- vip -->
        <m-svg-icon
          class="h-1.5 w-1.5 absolute right-[16px] bottom-0"
          name="vip"
          v-if="$store.getters.userInfo.vipLevel"
        ></m-svg-icon>
      </div>
      <div class="guide-my" v-else>
        <m-button icon="profile" iconColor="#fff" @click="onToLogin"></m-button>
      </div>
    </template>

    <!-- 气泡 -->
    <div v-if="$store.getters.token" class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
        v-for="item in menuArr"
        :key="item.id"
        @click="onItemClick(item)"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></m-svg-icon>
        <span class="text-zinc-900 text-sm dark:text-zinc-300">{{
          item.title
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { confirm } from '@/libs'

const store = useStore()
const router = useRouter()

const menuArr = [
  {
    id: '0',
    path: '/profile',
    icon: 'profile',
    title: '个人资料'
  },
  {
    id: '1',
    path: '/member',
    icon: 'vip-profile',
    title: '升级VIP'
  },
  {
    id: '2',
    path: '/',
    icon: 'logout',
    title: '退出登录'
  }
]

/**
 * 登录按钮点击事件
 */
const onToLogin = () => {
  router.push('/login')
}

/**
 * menu点击事件
 */
const onItemClick = (item) => {
  if (item.id === '2') {
    // 退出登录
    confirm('您确定要退出登录吗').then(() => {
      store.dispatch('user/logout')
    })
    return
  }
  router.push(item.path)
}
</script>

<style lang="scss" scoped></style>
