<template>
  <div class="basket">
    <div v-if="productsInBag.length">
      <div v-for="(product, index) in productsInBag" :key="index" class="items">
        <div class="item">
          <div
            class="remove"
            @click="
              product &&
                product.id &&
                this.$store.dispatch('removeFromBag', product.id)
            "
          >
            Remover Produto
          </div>

          <div class="photo"><img :src="product.image" alt="" /></div>
          <div class="description">{{ product.title }}</div>
          <div class="price">
            <span class="quantity-area">
              <button
                :disabled="product.quantity <= 1"
                @click="product.quantity--"
              >
                -
              </button>
              <span class="quantity">{{ product.quantity }}</span>
              <button @click="product.quantity++">+</button>
            </span>
            <span class="amount"
              >R$ {{ (product.price * product.quantity).toFixed(2) }}</span
            >
          </div>
        </div>
      </div>
      <div class="grand-total">Total do pedido: R$ {{ totalPrice() }}</div>
    </div>
    <template v-else>
      <h4>Não há itens no carrinho!</h4>
    </template>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "BasketView",

  methods: {
    totalPrice () {
      let total = 0;
      this.productsInBag.forEach( item => {
        total += item.price * item.quantity;
      });
      return total.toFixed(2);
    }
  },

  computed: mapState(["productsInBag"]),
};
</script>

<style lang="scss">

.basket {
  padding: 60px 0;
  .items {
    max-width: 70vw;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 20px;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 20px;
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
        color: #FF0000;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          background: #555;
          color: #fff;
          border: none;
        }

        button:hover{
          opacity: 0.7;
        }

        .quantity {
          margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;
      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;
        }
      }
    }
  }
  .grand-total {
      font-size: 24px;
      font-weight: 700;
      text-align: center;
      margin-top: 8px;
      border: 1px solid #888;
      padding: 1rem;
      box-shadow: 0 0 5px 2.5px rgba(0, 0, 0, 0.15) inset;
    }
  @media screen and (max-width: 480px ) {
    .item{
      width:90vw;
    }
    .items{
      width: 100%;
      margin: 0;
    }
    .amount{
      display: none;
    }
    .price{
      display: flex;
      flex-wrap: nowrap;
    }
  }
}
</style>
