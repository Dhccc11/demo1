<template>
<div id="box">
  <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in imagebox" :key="item.id">
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
  export default{
    name:'zmd',
    data(){
      return {
        imagebox:[{id:0,idView:require('../assets/imagebox/10.jpg')},
        {id:1,idView:require('../assets/imagebox/9.jpg')},
        {id:2,idView:require('../assets/imagebox/8.jpg')},
        {id:3,idView:require('../assets/imagebox/7.jpg')},
        {id:4,idView:require('../assets/imagebox/6.jpg')}
        ]
      }
    }
  }
</script>

<style>
    #box{
        width: 100%;
    }
   .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }
</style>