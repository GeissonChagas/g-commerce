import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
      products: [],
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products){
      state.products = products
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios
      .get('https://geissonchagas.github.io/Minhas-API-s/gcommerce.json')
        .then(response => {
          commit('loadProducts', response.data)
        })
    }
  },
  modules: {
  }
})
