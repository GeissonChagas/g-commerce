<template>
  <div id="footer">
    <a href="https://github.com/GeissonChagas"><font-awesome-icon icon="fa-brands fa-github" class="icon"/></a>
    <h4>Geisson Chagas</h4>
    <a href="https://www.linkedin.com/in/geissonchagas/"><font-awesome-icon icon="fa-brands fa-linkedin" class="icon"/></a>
  </div>
</template>

<script>
    export default {
        name: 'footer-component'
    }
</script>

<style scoped>

  #footer {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: #000;
    color: #fff;
  }
  .icon{
    margin: 0 1rem;
    scale: 1.75;
    color: #fff;
  }
  .icon:hover{
    margin: 0 1rem;
    scale: 2.0;
    opacity: 0.5;

  }
</style>