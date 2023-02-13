<template>
  <div class="basket">
    <div class="items">

      <div class="item">
        <div class="remove">Remover Produto</div>
        <div class="photo"><img src="https://m.media-amazon.com/images/I/41-RhQeujUL.__AC_SY445_SX342_QL70_ML2_.jpg" alt=""></div>
        <div class="description">Macbook Air </div>
        <div class="price">
          <span class="quantity-area">
            <button disabled="">-</button>
            <span class="quantity">1</span>
            <button>+</button>
          </span>
          <span class="amount">R$ 7.000,00</span>
        </div>
      </div>
      <div class="grand-total"> Total do pedido: R$ 7.000,00 </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'BasketView',

  methods: {
   
  },
 
}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
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
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>
