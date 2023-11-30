<template>
  <div class="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';

  export default {
        components: {
          Header,
        }
  }
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #333333;
  overflow-x: hidden;
}

#app {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  color: white;
}

.app{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>