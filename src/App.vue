<template>
  <div id="nav">
    <router-link to="/">Início</router-link>  | 
    <router-link to="/basket"
      >Carrinho ({{ this.productsInBag.length }})</router-link>
  </div>
  <div>
    <BannerComponent />
    <router-view />
  </div>
  <div>
    <FooterComponent />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BannerComponent from './components/BannerComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  created() {
    this.$store.dispatch("loadProducts");
    this.$store.dispatch("loadBag");
  },
  components: {
    BannerComponent,
    FooterComponent
  },
  computed: mapState(["productsInBag"]),
};
</script>


<style lang="scss">

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100vw;
  margin: 80px auto 0 auto;
}

#nav {
  padding: 16px 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-image: url(../public/img/header.jpeg);
  height: 30px;
  color: white;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;

    &.router-link-exact-active {
      font-weight: 700;
      color: #007bff;
    }
  }
}
</style>
