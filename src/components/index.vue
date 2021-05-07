<template>
  <el-carousel :interval="5000" arrow="outside" style="width:100%;height:100%">
    <el-carousel-item v-for="item in listImg" :key="item" style="width:100%;height:100%">
      <img :src="item.src" :alt="item.titile">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data(){
    return{
      listImg:[
        {
          src: require('../assets/index (1).jpg'),
          title: ''
        },
        {
          src: require('../assets/index (2).jpg'),
          title: ''
        },
        {
          src: require('../assets/index (3).jpg'),
          title: ''
        }
      ]
    }
  }
}
</script>

<style>
  .el-carousel__item img{
    width: 100%;
    height: 100%;
  }

  .el-carousel__container {
    height: 100%!important;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>