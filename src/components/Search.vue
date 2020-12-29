
<template>
<div id="Srh">
        <img src="../assets/imagebox/11.jpg" id="logo1">
            
    
    <input type="text" id="search-input" placeholder="请搜索你想要的商品" filterable  value="" style="width: 360px;height:30px;">
    <button  id="search-button">搜 索</button>      

</div>
 
 
</template>
 
<script>
 
</script>
 
<style scoped>
#logo1{
    position: relative;
    left: 30%;
}
#Srh{
    height: 80px;
     background-color:rgb(255, 255, 255) ;
    
}
#search-input{
    position : relative ;
    top :-30px ;
    left : 470px ;
    border: solid 2px rgb(228, 164, 25);

}
#search-button{
    position : relative ;
    top :-29px ;
    left : 465px;
    height: 35px;
    width: 80px;
    border: solid 2px rgb(228, 164, 25);
    font-size: 15px;
    font-weight: 800;
    background-color: rgb(236, 189, 32);
    color: white;
    

}
 
</style>          