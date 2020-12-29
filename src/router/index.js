import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../components/Login'
import Home from '../components/Home'
import Goods from '../components/Goods'
import Showgoods from '../components/Showgoods'
import Shopcar from '../components/Shopcar'
import Gopay from  '../components/Gopay'

Vue.use(Router)

const routes = [
  {
      path:"/Login",
      component: Login
  },
  {
      path:"/Home",
      component: Home
  },
  {
    path:"/Goods",
    component: Goods
  },
  {
    path:"/Showgoods",
    component: Showgoods
  },
  {
    path:"/Shopcar",
    component: Shopcar
  },
  {
    path:"/Gopay",
    component: Gopay
  }
]

var router =  new Router({
  routes
})
export default router;