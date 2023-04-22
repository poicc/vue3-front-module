<template>
  <PoiPopover placement="bottom-left">
    <template #reference>
      <PoiSvgIcon
        :name="svgIconName"
        class="guide-theme w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900"
        fillClass="fill-zinc-900 dark:fill-zinc-300"
      ></PoiSvgIcon>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in themeArr"
        :key="item.id"
        @click="onItemClikck(item)"
      >
        <PoiSvgIcon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></PoiSvgIcon>
        <span class="text-zinc-900 text-sm dark:text-zinc-300">{{
          item.name
        }}</span>
      </div>
    </div>
  </PoiPopover>
</template>

<script setup>
import { PoiSvgIcon, PoiPopover } from 'poicc-components'
import { computed } from 'vue'
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'
import { useStore } from 'vuex'
const store = useStore()

const themeArr = [
  {
    id: '0',
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '极简白'
  },
  {
    id: '1',
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '极简黑'
  },
  {
    id: '2',
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统'
  }
]

// 1.监听主题切换行为
// 2.根据行为保存当前需要展示的主题到 vuex 中
// 3.根据 vuex 中保存的当前主题，展示 header-theme 下的显示图标
// 4.根据 vuex 中保存的当前主题，修改 html 的 class

/**
 * menu 切换事件
 */
const onItemClikck = (themeItem) => {
  store.commit('theme/changeThemeType', themeItem.type)
}

/**
 * 展示图标
 */
const svgIconName = computed(() => {
  const findTheme = themeArr.find((item) => {
    return item.type === store.getters.themeType
  })

  return findTheme?.icon || THEME_LIGHT
})
</script>

<style lang="scss" scoped></style>
