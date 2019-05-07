import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart:[]
  },
  mutations: {
    addtocar(state, goods) {
      let flag = false
      state.cart.some(item => {
        if (item.id == goods.id) {
          item.count += goods.count
          flag = true
          return true;
        }
      })  
      if (!flag) {
        state.cart.push(goods)
      }
    },
  },
  getters:{
    getCount(state) {
      // xiaoqiu商品数量
      let c = 0
      state.cart.forEach(item => c += item.count)
      return c
    },
  }

})
   

export default store