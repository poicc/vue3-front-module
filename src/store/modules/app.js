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
      currentCategory: ALL_CATEGORY_ITEM
    }
  },
  mutations: {
    /**
     * 切换选中的分类
     */
    changeCurrentCategory(state, newCategory) {
      state.currentCategory = newCategory
    }
  },
  actions: {}
}
