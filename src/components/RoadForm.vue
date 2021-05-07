<template>
  <el-form ref="form" :model="road" label-width="100px" style="width:50vw;">
    <el-form-item label="地点" required>
      <el-input v-model="road.location"></el-input>
    </el-form-item>
    <el-form-item label="状态" required> 
      <el-input v-model="road.state"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即上传</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import all from '@/APIUrl/all.js'
export default {
  components: {

  },
  data(){
    return{
      //地点和状态
      road:{
        location:'',
        state: ''
      }
    }
  },
  methods:{
    onSubmit(){
      console.log(this.road);
      all.RoadInfo.createRoad(this.road.location,this.road.state).then(res=>{
        console.log(res);
        this.$router.go(0);
      })
    }
  }
}
</script>

<style scoped>

</style>
