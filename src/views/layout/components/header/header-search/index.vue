<template>
  <div class="w-full">
    <m-search v-model="inputValue">
      <template #dropdown>
        <div>
          <!-- 搜索提示 -->
          <hint-vue
            :searchText="inputValue"
            v-show="inputValue"
            @itemClick="onSearchHandler"
          ></hint-vue>
        </div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import hintVue from './hint.vue'

const inputValue = ref('')

/**
 * 搜索回调
 */
const onSearchHandler = (val) => {
  inputValue.value = val
}
</script>

<style lang="scss" scoped></style>
