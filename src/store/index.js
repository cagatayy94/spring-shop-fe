import { createStore } from 'vuex'
import axios from 'axios'

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
            console.log(response.data[0])
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
})
