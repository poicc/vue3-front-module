<template>
  <div class="w-full guide-search">
    <PoiSearch
      v-model="inputValue"
      @search="onSearchHandler"
      @clear="onSearchHandler"
    >
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <hint-vue
            :searchText="inputValue"
            v-show="inputValue"
            @itemClick="onSearchHandler"
          ></hint-vue>
          <!-- 最近搜索 -->
          <historyVue
            v-show="!inputValue"
            @itemClick="onSearchHandler"
          ></historyVue>
          <!-- 推荐主题 -->
          <theme-vue v-show="!inputValue"></theme-vue>
        </div>
      </template>
    </PoiSearch>
  </div>
</template>

<script setup>
import { PoiSearch } from 'poicc-components'
import { ref } from 'vue'
import hintVue from './hint.vue'
import historyVue from './history.vue'
import { useStore } from 'vuex'
import themeVue from './theme.vue'

const inputValue = ref('')
const store = useStore()

/**
 * 搜索回调
 */
const onSearchHandler = (val) => {
  inputValue.value = val
  if (val) {
    store.commit('search/addHistory', val)
    // 触发 searchText 变化
    store.commit('app/changeSearchText', val)
  }
}
</script>

<style lang="scss" scoped></style>
