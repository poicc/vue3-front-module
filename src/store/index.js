import { createStore } from "vuex";
import getters from './getters'
import category from "./modules/category";

const state = createStore({
  getters,
  modules: {
    category
  }
})

export default state