import { ALL_CATEGORY_ITEM } from '@/constants'

/**
 * app模块中的数据
 */
export default {
  // 独立作用域
  namespaced: true,
  state: () => {
    return {
      // 当前选中的分类
      currentCategory: ALL_CATEGORY_ITEM,
      // 搜索的文本
      searchText: '',
      // 路由跳转类型
      routerType: 'none'
    }
  },
  mutations: {
    /**
     * 切换选中的分类
     */
    changeCurrentCategory(state, newCategory) {
      state.currentCategory = newCategory
    },
    /**
     * 修改 searchText
     */
    changeSearchText(state, newSearchText) {
      state.searchText = newSearchText
    },
    /**
     * 修改 routerType
     */
    changeRouterType(state, newRouterType) {
      state.routerType = newRouterType
    }
  },
  actions: {}
}
