<template>
  <div>
    <item-vue v-for="item in pexlesList" :key="item.id" :data="item"></item-vue>
  </div>
</template>

<script setup>
import { getPexlesList } from '@/api/pexels'
import { ref } from 'vue'
import itemVue from './item.vue'

/**
 * 构建数据请求
 */
let query = {
  page: 1,
  size: 20
}
const pexlesList = ref([])
const getPexlesData = async () => {
  const res = await getPexlesList(query)
  pexlesList.value = res.list
}

getPexlesData()
</script>

<style lang="scss" scoped></style>
