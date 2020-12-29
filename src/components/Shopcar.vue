<template>

    <div class="shopcar">
        <Top></Top>
        <Search></Search>
        <table>
            <tr>
                <div class="list">
                <th style="width:420px ">商品</th>
                <th style="width:300px">价格</th>
                <th style="width:300px">数量</th>
                <th style="width:300px">总价</th>
                </div>
            </tr>
             <tr v-for="(item, index) in buylist" :key="index" >
                 <div class="goodlist">
                 <th style="width:30px height:30px"><img :src="buylist[index].gimg" >{{buylist[index].gname}}</th>
                
                <th style="width:300px">{{buylist[index].gprice}}</th>
                <th style="width:300px">{{buylist[index].num}}</th>
    
                <th style="width:300px">{{buylist[index].gprice*buylist[index].num}}</th>
                 </div>
                 
            </tr>
            
        </table>
        <div id="gopay">
            <span><font size="4" color="red"><b><i>共计总价： ￥{{getpay}}</i></b></font></span>
            <el-button @click="goPay">去支付</el-button>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Top from './Top'
import Search from './Search'
export default {
     components:{
    Top,
    Search
      },
  data () {
        return {
            buylist : [],
            gname:'',
            needpay:''
        }
    },
    mounted(){
        this.getGood();
    },
    
    methods:{
        getGood(){
            var url = 'http://localhost:3000/shopcar';
            axios.get(url).then((res) => {
                this.buylist = JSON.parse(JSON.stringify(res.data))
               

            })
            
        },goPay: function(){
      this.$router.push('/Gopay')
            }
        
    },
    computed:{

        getpay(){
            var i;
            var sum=0;
            for(i=0;i<this.buylist.length;i++){
                sum+=this.buylist[i].gprice*this.buylist[i].num
            }
            return sum;
        }
    }
    
}
</script>

<style scoped>
img{
    height: 100px;
    width: 100px;
}
.goodlist{
    border: solid 2px rgb(129, 94, 29);
    
}
.list{
    height: 50px;
}
.shopcar{
    background: rgb(255, 255, 255);
    border: solid 2px black;
}
.gopay{
    width: 100%;
    height: 70px;
    position: absolute;
    bottom: 0px;
    background: chocolate;
}
</style>