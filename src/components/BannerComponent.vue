<template>
  <div id="banner">
    <img src="../../public/img/banner-principal.jpeg" alt="banner" class="banner">
  </div>
</template>

<script>
    export default {
        name: 'banner-component'
    }
</script>

<style scoped>
  #banner {
    display: flex;
    justify-content: center;
    margin: 1rem auto; 
  }

  .banner {
    width: 90vw;
    max-height: 500px;
    background-size: cover;
  }
</style>