<template>
  <PoiPopover class="flex items-center" placement="bottom-left">
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
        <PoiSvgIcon
          class="h-1.5 w-1.5 ml-0.5"
          name="down-arrow"
          fillClass=" fill-zinc-900 dark:fill-zinc-300"
        ></PoiSvgIcon>
        <!-- vip -->
        <PoiSvgIcon
          class="h-1.5 w-1.5 absolute right-[16px] bottom-0"
          name="vip"
          v-if="$store.getters.userInfo.vipLevel"
        ></PoiSvgIcon>
      </div>
      <div class="guide-my" v-else>
        <PoiButton
          icon="profile"
          iconColor="#fff"
          @click="onToLogin"
        ></PoiButton>
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
        <PoiSvgIcon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></PoiSvgIcon>
        <span class="text-zinc-900 text-sm dark:text-zinc-300">{{
          item.title
        }}</span>
      </div>
    </div>
  </PoiPopover>
</template>

<script setup>
import { PoiSvgIcon, PoiPopover, PoiButton } from 'poicc-components'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { PoiConfirm } from 'poicc-components'

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
  store.commit('app/changeRouterType', 'push')
  router.push('/login')
}

/**
 * menu点击事件
 */
const onItemClick = (item) => {
  if (item.id === '2') {
    // 退出登录
    PoiConfirm('您确定要退出登录吗').then(() => {
      store.dispatch('user/logout')
    })
    return
  }
  store.commit('app/changeRouterType', 'push')
  router.push(item.path)
}
</script>

<style lang="scss" scoped></style>
