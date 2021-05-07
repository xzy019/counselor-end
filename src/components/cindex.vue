<template>
  <el-carousel :interval="4000" type="card" height="60vh" style="margin-top:70px">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img class="medium" :src="item.src"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data(){
    return{
      imgList:[
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
        },
        {
          src: require('../assets/index (4).jpg'),
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