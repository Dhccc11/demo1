<template>
  <div id="app">

  <!-- <Home></Home> -->
  <router-view></router-view>
  </div>
  
</template>

<script>
import Home from './components/Home'
import Test from './components/Test'
export default {
  name: 'App',
  components:{
    Home,
    Test
  },
  mounted () {
    window.location.href = 'http://localhost:8080/#/Home'
  }
}
</script>

<style>
</style>
