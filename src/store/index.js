import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    products:[],
    user:{}
  },
  mutations: {
    initProducts(state, products){
      state.products = products
    },
  },
  actions: {
    initApp(context){
      axios.get("http://localhost:8031/products")
          .then(response => {
            context.commit("initProducts", response.data)
          })
          .catch()
    },
  },
  modules: {
  },
  getters:{
    getProducts(state){
      return state.products
    },
  },
  plugins: [
    createPersistedState()
  ]
})
