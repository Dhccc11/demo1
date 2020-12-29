<template>
       <div>
      <div class="box">
          <pic-zoom src="getfirst" :scale="3"></pic-zoom>
      </div>
      <div class="list">
          <ul>
            <li v-for="(item,index) in getimg" 
                :key="index" 
                @mouseenter="changeImage(index)"
            >
                 <img :src="item" />
            </li>
          </ul>
      </div>
  </div>

</template>

<script>
 import PicZoom from "vue-piczoom"
    export default {
        name: "FooterShow",
        data(){
            return{
              // imgurl:require("../assets/imagebox/11.jpg"),
              //  imagesList:[
              //   //  require("../assets/imagebox/12.jpg"),
              //   //  require("../assets/imagebox/13.jpg"),
              //   //  require("../assets/imagebox/14.jpg"),
              //  ]
            }
         },
         props:['getimg','getfirst'],
        components:{
          PicZoom
        },
      methods:{
        changeImage:function (index) {
             this.imgurl=this.imagesList[index];
        }
      }

    }
</script>

<style scoped>
.box{
  width: 400px;
  height: 320px;
}
.list{
  width: 400px;
  height: 130px;
}
  .list ul{
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
  .list ul li{
    width:120px;
    height: 90px;
    background-color: white;
    margin-top: 15px;
  }
  .list ul li img{
    width: 120px;
    height: 90px;
  }
</style>