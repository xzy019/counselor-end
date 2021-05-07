<template>

  <el-menu
      default-active="admin"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
  >
    <div class="block">
      <el-avatar :size="aSize" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <div v-show="!isCollapse">
        <div class="role">{{type}}</div>
        <p>{{name}}</p>
      </div>
    </div>
    <el-submenu index="admin">
      <template #title>
        <i class="el-icon-s-home"></i>
        <span>工作信息</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/admin/work">交通劝导</el-menu-item>
        <el-menu-item index="/admin/road">道路障碍</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/admin/notice">
      <i class="el-icon-menu"></i>
      <template #title>通告管理</template>
    </el-menu-item>
    <el-menu-item index="/admin/counselor">
      <i class="el-icon-document"></i>
      <template #title>人员管理</template>
    </el-menu-item>
    <el-menu-item index="/admin/map">
      <i class="el-icon-setting"></i>
      <template #title>地图展示</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
import axios from 'axios'
export default {
  name: "Menu",
  props: {
    isCollapse: Boolean,
    aSize: Number
  },
  data() {
    return{
      type:'管理员',
      name:''
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created(){
    // const that = this;
    // this.type = sessionStorage.getItem("type");
    // axios({
    //   url:'http://localhost:5000/api/AdminInfo/Find',
    //   methods:'get',
    //   headers:{
    //     Authorization: sessionStorage.getItem('token')
    //   }
    // }).then((res) => {
    //   that.name = res.data.data.name
    //   sessionStorage.setItem("AdminId",res.data.data.Id);
    // }).catch((err)=>{
    //   return err;
    // })
  }
}
</script>

<style scoped>
.el-menu-vertical-demo,
.el-menu--collapse{
  padding: 0;
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 200px;
}
.block{
  text-align: center;
  margin: 20px 0;
}
.role{
  border-radius: 2rem;
  font-size: 0.7rem;
  width: 5rem;
  height: 1.5rem;
  color: white;
  background-color: #409eff;
  margin: 0.2rem auto;
  line-height: 1.5rem;
}

</style>