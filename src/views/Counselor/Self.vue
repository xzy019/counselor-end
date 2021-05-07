<template>
  <div class="selflist">
    <h1 class="selflist_title">个人信息</h1>
    <ul v-show="!edit" @mouseover="showedit()" @mouseout="hiddenedit()">
      <el-button
        size="mini"
        v-show="btnedit"
        style="position: absolute;top: 0;right: 0;"
        @click="edit = true">
        <i class="el-icon-edit"></i>
        编辑
      </el-button>
      <li>
        <div>用户昵称:</div>
        <div>{{self.name}}</div>
      </li>
      <li>
        <div>性别:</div>
        <div>{{self.sex}}</div>
      </li>
      <li>
        <div>电话号码:</div>
        <div>{{self.telnumber}}</div>
      </li>
      <li>
        <div>地址:</div>
        <div>{{self.address}}</div>
      </li>
      <li>
        <div>所属单位:</div>
        <div>{{self.units}}</div>
      </li>
    </ul>

    <el-form v-show="edit" :label-position="'right'" label-width="80px" :model="self" style="width:30vw;margin:16px">
      <el-form-item label="姓名">
        <el-input v-model="self.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="self.sex"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="self.telnumber"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="self.address"></el-input>
      </el-form-item>
      <el-form-item label="所属单位">
        <el-input v-model="self.units"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">提交</el-button>
        <el-button @click="edit = false">取消</el-button>
      </el-form-item>
    </el-form>

  </div>
  
  
</template>

<script>
import {defineComponent, ref, reactive, toRefs} from 'vue'
export default defineComponent({
  name: '',
  components: {
  },
  setup(props, ctx){
    let self = reactive({
      name: '星光',
      sex:'男',
      telnumber: '12345678910',
      address:'云南省玉溪市',
      units:'云南省玉溪市',
    })
    let edit = ref(false);
    let btnedit = ref(false);
    let showedit = ()=>{
      btnedit.value = true;
    }
    let hiddenedit=()=>{
      btnedit.value = false;
    }
    let onSubmit=()=>{
      self = self;
      edit.value = false;
    }
    return{
      self,
      edit,
      btnedit,
      showedit,
      hiddenedit,
      onSubmit
    }
  }
})
</script>

<style scoped>
.selflist{
  width: 40vw;
  height: auto;
  border: 1px solid #e6e6e6;
}
.selflist h1{
  margin: 12px;
  padding-bottom: 5px;
}
.selflist ul{
  list-style: none;
  padding: 0;
  margin: 16px;
  position: relative;
}
.selflist ul:hover{
  background-color: #f8f8f8;
  cursor: pointer;
}
.selflist ul li{
  height: 40px;
  line-height: 40px;
}
.selflist ul li div{
  display: inline-block;
}
.selflist ul li div:first-child{
  width: 20%;
  text-align: right;
  margin-right: 5px;
}
.selflist_title{
  border-bottom: 1px solid #e6e6e6;
}
</style>