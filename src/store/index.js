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
    loadBag(state, products) {
      state.productsInBag = products
    },
    addToBag(state, product) {
      state.productsInBag.push(product)
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag));
    },
    RemoveFromBag(state, productId) {
      const updatedBag = state.productsInBag.filter(item => productId != item.id);
      state.productsInBag = updatedBag;
      localStorage.setItem("productsInBag", JSON.stringify(state.productsInBag));  
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
    loadBag({ commit }) {
      if (localStorage.getItem("productsInBag")) {
        commit('loadBag', JSON.parse(localStorage.getItem("productsInBag")))
      }
    },
    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    removeFromBag({ commit }, productId) {
      if (confirm('Deseja realmente remover o produto do carrinho?')) {
        commit('RemoveFromBag', productId);
      }
      
    }    
  },
  modules: {
  }
})


