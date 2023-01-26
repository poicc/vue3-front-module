<template>
  <div class="w-full">
    <m-search v-model="inputValue" @search="onSearchHandler" @clear="onSearchHandler">
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <hint-vue
            :searchText="inputValue"
            v-show="inputValue"
            @itemClick="onSearchHandler"
          ></hint-vue>
          <!-- 最近搜索 -->
          <historyVue v-show="!inputValue" @itemClick="onSearchHandler"></historyVue>
        </div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import hintVue from './hint.vue'
import historyVue from './history.vue';
import { useStore } from 'vuex';

const inputValue = ref('')
const store = useStore()

/**
 * 搜索回调
 */
const onSearchHandler = (val) => {
  inputValue.value = val
  if(val) {
    store.commit('search/addHistory', val)
  }
}
</script>

<style lang="scss" scoped></style>
