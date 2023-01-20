<template>
  <div>
    <m-waterfull
    class="px-1 w-full"
      :data="pexlesList"
      :column="isMobileTerminal ? 2 : 5"
      :picturePreReading="false"
    >
      <template v-slot="{ item, width }">
        <item-vue :data="item" :width="width"></item-vue>
      </template>
    </m-waterfull>
  </div>
</template>

<script setup>
import { getPexlesList } from '@/api/pexels'
import { ref } from 'vue'
import itemVue from './item.vue'
import { isMobileTerminal } from '@/utils/flexible'
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
