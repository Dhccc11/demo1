<template>
<div>
    <Top></Top>
    <Search></Search>
    <div class="box">
    <pic-zoom :url="list[goodId-1].showimg" :scale="1.5"></pic-zoom>
    </div>
    <div class="topbox">
    <div class="detial">
       <h3>{{list[goodId-1].name}}</h3>
       <p><font color="red" size='6'><i><b>￥{{list[goodId-1].price}}</b></i></font></p>
        <div>
           <span><font size='4'>配&nbsp; 送&nbsp; 至&nbsp;：</font></span>
           <el-select v-model="value" placeholder="常熟理工学院东南校区">
           <el-option>常熟理工学院东南校区</el-option>
           <el-option>常熟理工学院东湖校区</el-option>
           </el-select>
            <span>支持 &nbsp;<font size='2' color="blue">可配送至港澳台&nbsp;&nbsp;&nbsp;|99元免基础运费 </font></span>

             <div style="margin-top: 20px">
                <el-radio-group  size="medium">
                <el-radio-button  >{{list[goodId-1].type1}}</el-radio-button>
                <el-radio-button >{{list[goodId-1].type2}}</el-radio-button>
                <el-radio-button >{{list[goodId-1].type3}}</el-radio-button>
 
    </el-radio-group>
    </div>  

         </div>
    </div>
    <div class="buycount">
        <span>购买数量 ：</span>
    <button @click="sub"  style="height:30px">
                -
            </button>
            <span>{{num}}</span>
            <button @click="add" style="height:30px">
                +
            </button>
    </div>
    <div class="gobuy">
        <el-button @click="goshopcar" class="addcar">加入购物车</el-button>
    </div>
    </div>
    <div id="a">
    <div class="about-goods">
      <img :src="list[goodId-1].aboutgood1" style="width:850px">
      <img :src="list[goodId-1].aboutgood2"  style="width:850px">
      <img :src="list[goodId-1].aboutgood3"  style="width:850px">
      <img :src="list[goodId-1].aboutgood4"  style="width:850px">

  </div> 
    </div>

</div>
</template>

<script>
import axios from 'axios'
import PicZoom from "vue-piczoom"
import Search from './Search'
import Foot from './Foot'
import Top from './Top.vue'
export default {
    data(){
        return{
            goodId:'',
            list:[],
            num:1,
            goodname:'',
            goodimg:'',
            goodprice:''
         
            
        }
    },

    created(){
    this.goodId=this.$route.query.getId
    // console.log(this.goodId)
    
  },
  components:{
      PicZoom,
      Top,
      Search,
      Foot

  },
    mounted(){
        this.getDetial();
    },
    methods:{
        getDetial(){
            var url = 'http://localhost:3000/message';
            axios.get(url).then((res) => {
                this.list = res.data

               

            })
        },
         add:function(){
                   this.num++;
         },
         sub:function(){
                if(this.num>1){
                    this.num--;
                }else{
                    alert("商品最小数量不能低于1")
         }},
         goshopcar: function(){
        // this.$router.push({path:'/Shopcar'});
    
        axios.post("http://localhost:3000/shopcar",{
                num:this.num,
                 gId:this.goodId,
                 gname:this.list[this.goodId-1].name,
                  gimg:this.list[this.goodId-1].showimg,
                  gprice:this.list[this.goodId-1].price
                })
            alert("加入购物车成功")
        },
        deleteShopCar () {
            axios.delete("http://localhost:3000/shopcar/1")
        }

                
    }
    
}
</script>

<style scoped>
.box{
position: absolute;
top: 230px;
left: 200px;
  width: 300px;
  height: 390px;
  border: solid 2px slategrey;
}
.detial{
    position: absolute;
    top:220px;
    right: 250px;
    height: 320px;
    width: 400px;
}
.about-goods{
    position: absolute;
    top:800px;
    height: 320px;
    width: 800px;
    margin: 0 auto;
   
}
#a{
    width: 60%;
     margin: 0 auto;
}
.buycount{
    position: absolute;
    top: 520px;
    right: 340px;
    width: 300px;
    height: 30px;
    background: snow;
}
.gobuy{
    position: absolute;
    top: 520px;
    right: 310px;

}
.addcar{
    background: crimson;
    color: seashell;
}

.topbox{
    background: rgb(250, 247, 244);
    border: solid 2px rgb(92, 80, 78);
    height: 450px;
    width: 80%;
    margin: 0 auto;
}
</style>