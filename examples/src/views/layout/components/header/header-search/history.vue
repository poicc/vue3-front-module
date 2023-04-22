<template>
  <div>
    <div class="flex items-center text-xs mb-1 text-zinc-400">
      <span> 最新搜索</span>
      <PoiSvgIcon
        name="delete"
        class="w-2.5 h-2.5 ml-1 p-0.5 cursor-pointer duration-300 rounded-sm hover:bg-zinc-400"
        fillClass="fill-zinc-400"
        @click="onDeleteAllClick"
      ></PoiSvgIcon>
    </div>

    <div class="flex flex-wrap">
      <div
        v-for="(item, index) in $store.getters.historys"
        :key="index"
        class="mr-2 mb-1.5 flex items-center cursor-pointer bg-zinc-100 py-0.5 px-1.5 text-zinc-900 text-sm font-bold rounded-sm duration-300 hover:bg-zinc-200"
        @click="onItemClick(item)"
      >
        <span>{{ item }}</span>
        <PoiSvgIcon
          name="input-delete"
          class="w-2.5 h-2.5 p-0.5 ml-1 duration-300 rounded-sm hover:bg-zinc-100"
          @click.stop="onDeleteClick(index)"
        ></PoiSvgIcon>
      </div>
    </div>
  </div>
</template>

<script>
const EMITS_ITEM_CLICK = 'itemClick'
</script>

<script setup>
import { PoiSvgIcon } from 'poicc-components'
import { useStore } from 'vuex'
import { PoiConfirm } from 'poicc-components'

const store = useStore()

const emits = defineEmits([EMITS_ITEM_CLICK])

/**
 * 删除全部
 */
const onDeleteAllClick = () => {
  PoiConfirm('标题', '你要删除所有记录吗？')
    .then(() => {
      store.commit('search/deleteAllHistory')
    })
    .catch(() => {
      console.log('点击了取消')
    })
}
/**
 * 单个删除
 */
const onDeleteClick = (index) => {
  store.commit('search/deleteHistory', index)
}
/**
 * 触发搜索
 */
const onItemClick = (item) => {
  emits(EMITS_ITEM_CLICK, item)
}
</script>

<style lang="scss" scoped></style>
