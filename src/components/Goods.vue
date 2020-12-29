<template>
<div id="goods">
    <img src="../assets/imagebox/12.jpg">
        <div id="mybox">
            <div v-for="(item, index) in list" :key="index"  id="box">
                 <a  @click="goShow(index)"><img :src="item.showimg" style="width: 300px;height: 300px;"></a>
                 <p>{{item.name.substring(0,16)}}......</p>
                 <p id="goods-showprice">￥{{item.price}}</p>

            </div>
        </div>         
</div>    
</template>


<script>
import axios from 'axios'
export default {
    name:"Test",
    data () {
        return {
            list : []
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            var url = 'http://localhost:3000/message';
            axios.get(url).then((res) => {
                this.list = JSON.parse(JSON.stringify(res.data))
            })
        },
        goShow: function(index){
        this.$router.push({path:'/Showgoods',query:{getId:this.list[index].id}})
        }
    }
}
</script>

<style scoped>
#mybox{
    width: 1250px;
    /* display: inline-block; */
    text-align: center;
    /* margin: 0 auto; */
    position: relative;
    left: 50px;
}
#box{
    float: left;
    width: 300px;
    height: 390px;
    border: solid 2px rgb(141, 136, 136);
    background: whitesmoke;
    margin: 2px;
}
#goods-showprice{
    font-size: 20px;
    font-weight: 700;
    color: red;
    
}

</style>