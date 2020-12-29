<template>
  <div  class="mytop">
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
             <el-menu-item index="1"><font size="4" style="italic" color="orange">商品推荐</font></el-menu-item>
             <el-submenu index="2">
             <template slot="title"><font size="4" style="italic" color="orange">商品分类</font></template>
                <el-submenu index="2-1">
                <template slot="title">电器</template>
                    <el-menu-item index="2-1-1">电视</el-menu-item>
                   <el-menu-item index="2-1-2">洗衣机</el-menu-item>
                   <el-menu-item index="2-1-3">空调</el-menu-item>
                   <el-menu-item index="2-1-4">冰箱</el-menu-item>
                   <el-menu-item index="2-1-5">小型家电</el-menu-item>
                   <el-menu-item index="2-1-6">厨卫家电</el-menu-item>
                   <el-menu-item index="2-1-7">视听影音</el-menu-item>
                </el-submenu>
                <el-submenu index="2-2">
                <template slot="title">母婴</template>
                    <el-menu-item index="2-2-1">奶粉</el-menu-item>
                   <el-menu-item index="2-2-2">洗护用品</el-menu-item>
                   <el-menu-item index="2-2-3">玩具</el-menu-item>
                </el-submenu>
                <el-submenu index="2-3">
                <template slot="title">数码</template>
                    <el-menu-item index="2-3-1">手机</el-menu-item>
                   <el-menu-item index="2-3-2">笔记本电脑</el-menu-item>
                   <el-menu-item index="2-3-3">平板电脑</el-menu-item>
                   <el-menu-item index="2-3-4">电脑配件</el-menu-item>
                   <el-menu-item index="2-3-5">蓝牙耳机</el-menu-item>
                   <el-menu-item index="2-3-6">数码相机</el-menu-item>
                   <el-menu-item index="2-3-7">音响</el-menu-item>
                   <el-menu-item index="2-3-8">麦克风</el-menu-item>
                </el-submenu>
                <el-submenu index="2-4">
                <template slot="title">生活用品</template>
                    <el-menu-item index="2-4-1">洗护用品</el-menu-item>
                   <el-menu-item index="2-4-2">护肤品</el-menu-item>
                   <el-menu-item index="2-4-3">化妆品</el-menu-item>
                   <el-menu-item index="2-4-4">清洁用品</el-menu-item>
                   <el-menu-item index="2-4-5">毛巾浴袍</el-menu-item>
                   <el-menu-item index="2-4-5">其他</el-menu-item>

                </el-submenu>
                
                <el-submenu index="2-5">
                <template slot="title">女装</template>
                    <el-menu-item index="2-5-1">棉服</el-menu-item>
                    <el-menu-item index="2-5-2">裙子</el-menu-item>
                    <el-menu-item index="2-5-3">风衣</el-menu-item>
                    <el-menu-item index="2-5-4">皮草</el-menu-item>
                    <el-menu-item index="2-5-5">西装</el-menu-item>
                    <el-menu-item index="2-5-6">毛呢大衣</el-menu-item>
                </el-submenu>

                <el-submenu index="2-6">
                <template slot="title">男装</template>
                    <el-menu-item index="2-6-1">外套</el-menu-item>
                   <el-menu-item index="2-6-2">卫衣</el-menu-item>
                   <el-menu-item index="2-6-3">羽绒服</el-menu-item>
                   <el-menu-item index="2-6-4">T恤</el-menu-item>
                   <el-menu-item index="2-6-5">衬衫</el-menu-item>
                   <el-menu-item index="2-6-6">牛仔裤</el-menu-item>
                   <el-menu-item index="2-6-7">毛衣</el-menu-item>
                   
                </el-submenu>
                <el-submenu index="2-7">
                <template slot="title">鞋靴</template>
                    <el-menu-item index="2-7-1">马丁靴</el-menu-item>
                   <el-menu-item index="2-7-2">运动鞋</el-menu-item>
                   <el-menu-item index="2-7-3">皮鞋</el-menu-item>
                    <el-menu-item index="2-7-4">高跟鞋</el-menu-item>
                     <el-menu-item index="2-7-5">拖鞋</el-menu-item>
                </el-submenu>

                <el-submenu index="2-8">
                <template slot="title">汽车</template>
                    <el-menu-item index="2-8-1">小型轿车</el-menu-item>
                   <el-menu-item index="2-8-2">大型轿车</el-menu-item>
                   <el-menu-item index="2-8-3">小型SUV</el-menu-item>
                   <el-menu-item index="2-8-4">大型SUV</el-menu-item>
                   <el-menu-item index="2-8-5">MPV</el-menu-item>
                   <el-menu-item index="2-8-6">跑车</el-menu-item>
                   <el-menu-item index="2-8-7">皮卡</el-menu-item>
                </el-submenu>

                 <el-submenu index="2-9">
                <template slot="title">图书</template>
                    <el-menu-item index="2-9-1">国外文学</el-menu-item>
                   <el-menu-item index="2-9-2">古代文学</el-menu-item>
                   <el-menu-item index="2-9-3">现代文学</el-menu-item>
                   <el-menu-item index="2-9-4">辅导用书</el-menu-item>
                   <el-menu-item index="2-9-5">图鉴</el-menu-item>
                </el-submenu>
  
  </el-submenu>
  <el-menu-item index="3" ><font size="4" style="italic" color="orange">消息中心</font></el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank"><font size="4" style="italic" color="orange">订单管理</font></a></el-menu-item>
</el-menu>

    </div>
  </div> 
</template>
<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style scope>
 .mytop{
   background-color:rgb(243, 213, 64) ;
   font-size: 50px;
   height: 100px;
   border: solid 5px rgb(243, 194, 60);
 }


</style>