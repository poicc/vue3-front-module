import { ALL_CATEGORY_ITEM, CATEGORY_NOMAR_DATA } from '@/constants'
import { getCategory } from '@/api/category'

/**
 * 处理 nagationBar 中的数据categorys
 */
export default {
  // 独立作用域
  namespaced: true,
  state: () => {
    return {
      // 让categorys具备一个初始化数据
      // 从服务端获取数据 替换初始化数据
      // 为了防止初始化数据太老 把每次获取到的新数据 作为下一次的初始化数据
      // 第三步方案：每次从接口得到的数据 进行缓存 在下次运行时将缓存的数据作为初始值
      categorys: CATEGORY_NOMAR_DATA
    }
  },
  mutations: {
    setCategorys(state, newCategorys) {
      state.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
    }
  },
  actions: {
    async useCategoryData(context) {
      const { categorys } = await getCategory()
      context.commit('setCategorys', categorys)
    }
  }
}
