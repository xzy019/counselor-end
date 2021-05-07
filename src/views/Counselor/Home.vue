<template>
  <el-container style="height:100vh">
    <el-header>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/counselor/self">个人中心</el-menu-item>
        <el-submenu index="2">
          <template #title>我的工作台</template>
          <el-menu-item index="/counselor/work">交通劝导</el-menu-item>
          <el-menu-item index="/counselor/road">道路障碍</el-menu-item>
        </el-submenu>
        <el-menu-item index="/counselor/notice">通告中心</el-menu-item>
        <el-menu-item index="/counselor/map">地图展示</el-menu-item>
        <div class="tx">
          <span class="tx_img">
            <img width="40" height="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="">
          </span>
          <span class="tx_name">
            {{type}}:{{name}}
          </span>
          <span class="tx_btn" @click="exitUser()">
            <svg style="width: 25px;height: 40px;vertical-align: middle;" t="1617443273999" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2718" width="200" height="200"><path d="M951.4 509.4c0-0.1 0.1-0.2 0.1-0.3 0.1-0.5 0.2-0.9 0.3-1.4 0-0.2 0.1-0.4 0.1-0.6 0.1-0.4 0.1-0.8 0.2-1.2 0-0.2 0-0.5 0.1-0.7 0-0.3 0-0.7 0.1-1v-0.9-0.9c0-0.3 0-0.7-0.1-1 0-0.2 0-0.5-0.1-0.7 0-0.4-0.1-0.8-0.2-1.2 0-0.2-0.1-0.4-0.1-0.6-0.1-0.5-0.2-0.9-0.3-1.4 0-0.1-0.1-0.2-0.1-0.3-0.1-0.5-0.3-1.1-0.5-1.6v-0.1c-1.2-3.7-3.2-7.1-6.1-9.9L749.5 290.2c-9.8-9.8-25.6-9.8-35.4 0-9.8 9.8-9.8 25.6 0 35.4l152.7 152.7H344.3c-13.8 0-25 11.2-25 25s11.2 25 25 25h522.5L714.1 681c-9.8 9.8-9.8 25.6 0 35.4 9.8 9.8 25.6 9.8 35.4 0L944.9 521c2.8-2.8 4.9-6.2 6.1-9.9v-0.1c0.1-0.6 0.3-1.1 0.4-1.6z" fill="#409eff" p-id="2719"></path><path d="M640.1 953.2H132.5c-13.8 0-25-11.2-25-25V99.4c0-13.8 11.2-25 25-25h507.7c13.8 0 25 11.2 25 25s-11.2 25-25 25H157.5v778.8h482.7c13.8 0 25 11.2 25 25s-11.3 25-25.1 25z" fill="#409eff" p-id="2720"></path></svg>
          </span>
        </div>
      </el-menu>
    </el-header>
    <el-main style="height:100%">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios"
export default {
  components: {},
  data() {
    return {
      activeIndex: 1,
      name: "test",
      type: "劝导员"
    };
  },
  methods: {
    exitUser(){
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("type");
      sessionStorage.removeItem("CounselorId");
      this.$router.push({  //核心语句
        path:'/login', 
      })
    },
    handleSelect(){
      console.log('1');
    }
  },
  created(){
    // const that = this;
    // this.type = sessionStorage.getItem("type");
    // axios({
    //   url:'http://localhost:5000/api/CounselorInfo/Find',
    //   methods:'get',
    //   headers:{
    //     Authorization: sessionStorage.getItem('token')
    //   }
    // }).then((res) => {
    //   that.name = res.data.data.name
    //   sessionStorage.setItem("CounselorId",res.data.data.Id);
    // }).catch((err)=>{
    //   return err;
    // })
  }
};
</script>

<style scoped>
.el-header{
  padding: 0;
}
.tx{
  float: right;
  height:40px;
  padding-top: 10px;
}
.tx:focus{
  outline: none;
}
.tx_img{
  vertical-align: middle;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  height: 40px;
  margin-right: 15px;
}
.tx_name{
  display: inline-block;
  margin-right: 15px;
}
.tx_btn{
  display: inline-block;
  margin-right: 25px;
}
.tx_btn:hover{
  cursor: pointer;
}
</style>

