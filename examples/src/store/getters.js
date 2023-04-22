import { isMobileTerminal } from '@/utils/flexible'

export default {
  // 简单访问
  categorys: (state) => state.category.categorys,
  // 当前主题
  themeType: (state) => state.theme.themeType,
  // 当前选中的分类
  currentCategory: (state) => state.app.currentCategory,
  // category选中项的下标
  currentCategoryIndex: (state, getters) => {
    return getters.categorys.findIndex((item) => {
      console.log(item.id)
      console.log(getters.currentCategory.id)
      return item.id === getters.currentCategory.id
    })
  },
  // 搜索历史
  historys: (state) => state.search.historys,
  /**
   * 搜索文本
   */
  searchText: (state) => state.app.searchText,
  /**
   * token
   */
  token: (state) => state.user.token,
  /**
   * userInfo
   */
  userInfo: (state) => state.user.userInfo,
  /**
   * 路由跳转方式
   */
  routerType: (state) => {
    // pc端下永远没有跳转动画
    if (!isMobileTerminal.value) {
      return 'none'
    }
    return state.app.routerType
  }
}
