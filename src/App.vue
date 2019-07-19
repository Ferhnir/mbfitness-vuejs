<template>
  <div id="app">
    <navbar />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/navbar/navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    HelloWorld
  }
}
</script>

<style>
body {

  padding: 0;
  margin: 0;
  background-color: #000 !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
