<template>
  <div id="app">
     <QueryUser></QueryUser>
  </div>
</template>

<script>
import QueryUser from './components/queryUser.vue'

export default {
  name: 'App',
  components: {
    QueryUser
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
