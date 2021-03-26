import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carList: []
  },
  mutations: {
    addCart(state, payload) {
      // let oldPro = null;
      // for (let item of state.carList) {
      //   if (item.iid === payload.iid) {
      //     oldPro = item;
      //   }
      // }
      let oldPro = state.carList.find(item => item.iid === payload.iid)
      if (oldPro) {
        oldPro.count += 1;
      } else {
        payload.count = 1;
        state.carList.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
