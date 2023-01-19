<template>
  <div>
    <m-waterfull :data="pexlesList" nodeKey="id" :column="5" :picturePreReading="true">
      <template v-slot="{ item, width }">
        <item-vue :data="item"></item-vue>
      </template>
    </m-waterfull>
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
