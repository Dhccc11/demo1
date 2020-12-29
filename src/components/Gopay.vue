<template>
    <div class="paybox">
       <p> <img src="../assets/imagebox/17.jpg" id="logo1" style="width:500px height:500px"></p>
       <p><font size="5" colpr="black"><i><b>请扫描二维码付款完成支付</b></i></font></p>
       <el-button class="backto" @click="goBack">支付完成</el-button>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default {
    components:{
        swal
    },
    methods:{
        goBack: function(){
            this.$router.push('/Home')
            }
        
    }
    
}
</script>
<style scoped>
.paybox{
    width: 30%;
    height: 400px;
    margin: 0 auto;
    border:  solid 3px;
}
.backto{
    background: sandybrown;
    color: seashell;
}

</style>