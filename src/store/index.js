import { createStore } from "vuex";
import getters from './getters'
import category from "./modules/category";
import createPersistedState from 'vuex-persistedstate'

const state = createStore({
  getters,
  modules: {
    category
  },
  plugins: [
    createPersistedState({
      // 指定保存到 localStorage 的key
      key: "vue3-front",
      // 需要保存的模块
      paths: ['category']
    })
  ]
})

export default state