<template>
  <el-form ref="form" :model="work" label-width="100px" style="width:50vw;">
    <el-form-item label="违法人姓名" required>
      <el-input v-model="work.name"></el-input>
    </el-form-item>
    <el-form-item label="地点" required> 
      <el-input v-model="work.location"></el-input>
    </el-form-item>
    <el-form-item label="劝导原因" required>
      <el-input v-model="work.reason"></el-input>
    </el-form-item>
    <el-form-item label="车辆牌照" required>
      <el-input v-model="work.licence"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit()">立即上传</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import swal from "sweetalert";
import all from '@/APIUrl/all.js'
export default {
  inject: ["reload"],
  components: {

  },
  data(){
    return{
      //违法者姓名、地点、劝导原因、车辆牌照
      work:{
        name: '',
        location:'',
        reason: '',
        licence:''
      }
    }
  },
  methods:{
    onSubmit(){
      all.WorkInfo.createWork(this.work.name,this.work.location,this.work.reason,this.work.licence).then(res=>{
        console.log(res);
        this.$router.go(0);
      })

    }
  }
}
</script>

<style scoped>

</style>
