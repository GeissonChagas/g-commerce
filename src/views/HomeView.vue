<template>
  <div>
    <div class="home">
      <div class="products">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="product"
          :class="{ inBag: isInBag(product) }"
        >
          <div
            class="product-image"
            :style="{ backgroundImage: 'url(' + product.image + ')' }"
          ></div>
          <h4>{{ product.title }}</h4>
          <p class="price">
            R$ {{ isNaN(product.price) ? "" : product.price.toFixed(2) }}
          </p>
          <button v-if="!isInBag(product)" @click="addToBag(product)">
            Adicionar ao carrinho
          </button>
          <button
            v-else
            class="remove"
            @click="this.$store.dispatch('removeFromBag', product.id)"
          >
            Remover do carrinho
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "home-view",
  computed: mapState(["products", "productsInBag"]),
  created() {
    this.$store.dispatch("loadProducts");
  },
  methods: {
    addToBag(product) {
      product.quantity = 1;
      this.$store.dispatch("addToBag", product);
    },
    isInBag(product) {
      return this.productsInBag.find((item) => item.id == product.id);
    },
  },
};
</script>


<style lang="scss">
.home {
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .product {
      flex: 0 0 30%;
      box-sizing: border-box;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      margin: 8px;
      height: 360px;

      @media only screen and (max-width: 769px) {
        flex: 0 0 40%;
      }

      @media only screen and (max-width: 640px) {
        flex: 0 0 90%;
      }

      &.inBag {
        border: 1px solid #007bff;
        box-shadow: 0 0 20px 10px rgba(47, 130, 255, 0.5) inset;


      }

      .product-image {
        margin: 20px auto;
        width: 160px;
        height: 140px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      h4 {
        margin: 22px auto;
        font-size: 12px;
        max-width: 60%;
        font-weight: normal;
      }

      p.price {
        font-size: 20px;
        font-weight: bold;
      }

      button {
        color: #007bff;
        background-color: transparent;
        border: 1px solid #007bff;
        border-radius: 5px;
        font-weight: 700;
        text-align: center;
        padding: 8px 16px;
        cursor: pointer;

        &:hover {
          opacity: 0.7;
        }

        &.remove {
          background-color: transparent;
          border: 1px solid #555;
          color: #FF0000;
        }
      }
    }
  }
}
</style>
