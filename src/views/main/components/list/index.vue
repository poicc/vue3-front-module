<template>
  <div>
    <m-infinite
      v-model="loading"
      :isFinished="isFinished"
      @onLoad="getPexlesData"
    >
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
    </m-infinite>
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
// 数据是否在加载中
const loading = ref(false)
// 数据是否全部加载完成
const isFinished = ref(false)
// 数据源
const pexlesList = ref([])
const getPexlesData = async () => {
  // 数据全部加载完成 return
  if (isFinished.value) {
    return
  }

  // 完成第一次请求之后 后续的请求让page自增
  if (pexlesList.value.length) {
    query.page += 1
  }

  const res = await getPexlesList(query)
  if (query.page === 1) {
    pexlesList.value = res.list
  } else {
    pexlesList.value.push(...res.list)
  }

  // 判断数据是否全部加载完成
  if (pexlesList.value.length === res.total) {
    isFinished.value = true
  }
  loading.value = false
}

getPexlesData()
</script>

<style lang="scss" scoped></style>
