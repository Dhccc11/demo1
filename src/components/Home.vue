<template>
  <div id="app">

<Top></Top>
<Search></Search>
<Zmd></Zmd>
<Goods></Goods>
<Foot></Foot>
<!-- <Test></Test> -->
<!-- <Mirror></Mirror> -->
<!-- <Test></Test> -->
<!-- <router-link to="/Login">Home</router-link> -->
<div id="loginbox">
  <el-button type="warning" plain @click="goLogin" v-show="!this.$route.query.isLogin">登录||注册</el-button>
  <!-- <button @click="goLogin" v-show="!this.$route.query.isLogin">请登录</button> -->
<div id="logo" v-show="this.$route.query.isLogin">
  <img src="../assets/imagebox/16.jpg" style="height:50px">
</div>

  <span v-show="this.$route.query.isLogin"><font color="orange" size='4'><i>'欢迎您{{this.$route.query.username}}'</i></font>
  <el-button @click="toShopCar" style="color:snow" id="sc"> 我的购物车</el-button></span>
</div> 

  </div>
  
</template>

<script>
//import VueRouter from'vue-route'
import Top from './Top'
import Search from './Search'
import Zmd from './Zmd'
import Goods from './Goods'
import Foot from './Foot'
import Test from './Test'
import Mirror from'./Mirror'
import Shopcar from './Shopcar'

export default {
  name: 'App',
  data(){
      return{
           isLogin:''
      }
  },
  created(){
    this.isLogin=this.$route.query.isLogin
  },
  components:{
    Top,
    Search,
    Zmd,
    Goods,
    Foot,
    Test,
    Mirror,
    Shopcar
  },
  methods: {
    goLogin: function(){
      this.$router.push('/Login')
    },
    toShopCar: function(){
      this.$router.push({path:'/Shopcar'});

    }
  }
}
</script>

<style>
    
    #app{
      background-color: rgb(243, 240, 231);
    }
    #loginbox{
      position: absolute;
      top:30px;
      right: 100px;

    }
    #logo{
      position: absolute;
      top:-10px;
      right: 200px;

    }
    #sc{
      height: 40px;
      width: 100px;
      background: rgb(185, 77, 77);

    }
</style>
