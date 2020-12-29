<template>
<div id="a">
    <pic-zoom url="https://img-blog.csdnimg.cn/20201014180756927.png?x-oss-process=image/resize,m_fixed,h_64,w_64" :scale="3"></pic-zoom>
</div>
</template>

<script>
import PicZoom from 'vue-piczoom'
export default {
  name: 'App',
  components: {
    PicZoom
  }
}
</script>

<style scoped>
 #a{
     height: 100px;
     width: 100px;
 }
</style>