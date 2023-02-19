import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products
    },
    addToBag(state, product) {
      state.productsInBag.push(product)
    },
    RemoveFromBag(state, productId) {
      const updatedBag = state.productsInBag.filter(item => productId != item.id);
      state.productsInBag = updatedBag;
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios
        .get('https://raw.githubusercontent.com/geissonchagas/Minhas-API-s/main/gcommerce.json')
        .then(response => {
          commit('loadProducts', response.data)
        })
    },
    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    removeFromBag({ commit }, productId) {
      commit('RemoveFromBag', productId);
    }    
  },
  modules: {
  }
})


