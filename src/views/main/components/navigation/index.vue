<template>
    <mobile-navigation-view v-if="isMobileTerminal" :data="categoryList" />
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationView from './mobile/index.vue'
import { getCategory } from "@/api/category"
import { ref } from 'vue'

const categoryList = ref([])
const getCategoryData = async () => {
    const { categorys } = await getCategory()
    categoryList.value = categorys
    console.log(categorys)
}
getCategoryData()
</script>

<style lang="scss" scoped>

</style>