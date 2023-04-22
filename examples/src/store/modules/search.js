/**
 * 搜索
 */
export default {
  // 独立作用域
  namespaced: true,
  state: () => {
    return {
      // 搜索历史
      historys: []
    }
  },
  mutations: {
    /**
     * 新增
     * 新增历史位于头部 不可出现重复记录
     */
    addHistory(state, newHistory) {
      const isFindIndex = state.historys.findIndex(
        (item) => item === newHistory
      )
      // 剔除旧数据
      if (isFindIndex !== -1) {
        state.historys.splice(isFindIndex, 1)
      }
      // 新增数据
      state.historys.unshift(newHistory)
    },
    /**
     * 单个删除
     */
    deleteHistory(state, index) {
      state.historys.splice(index, 1)
    },
    /**
     * 全部删除
     */
    deleteAllHistory(state) {
      state.historys = []
    }
  },
  actions: {}
}
