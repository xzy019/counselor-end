<template>
  <el-container>
    <el-aside
        :width="menu_width"
        style="min-height: 100vh;box-sizing: border-box;border-right: 1px solid #e6e6e6;overflow-x:hidden;"
    >
    <Menu :isCollapse="isCollapse" :aSize="aSize"/>
    </el-aside>
    <el-container>
      <el-header>
        <el-button class="menu_btn" type="warning" :icon="menu_fold" @click="menuFold"></el-button>
        <button style="float: right;border: none;background-color: transparent;" @click="exitUser()">
            <svg style="width: 25px;height: 40px;vertical-align: middle;" t="1617443273999" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2718" width="200" height="200"><path d="M951.4 509.4c0-0.1 0.1-0.2 0.1-0.3 0.1-0.5 0.2-0.9 0.3-1.4 0-0.2 0.1-0.4 0.1-0.6 0.1-0.4 0.1-0.8 0.2-1.2 0-0.2 0-0.5 0.1-0.7 0-0.3 0-0.7 0.1-1v-0.9-0.9c0-0.3 0-0.7-0.1-1 0-0.2 0-0.5-0.1-0.7 0-0.4-0.1-0.8-0.2-1.2 0-0.2-0.1-0.4-0.1-0.6-0.1-0.5-0.2-0.9-0.3-1.4 0-0.1-0.1-0.2-0.1-0.3-0.1-0.5-0.3-1.1-0.5-1.6v-0.1c-1.2-3.7-3.2-7.1-6.1-9.9L749.5 290.2c-9.8-9.8-25.6-9.8-35.4 0-9.8 9.8-9.8 25.6 0 35.4l152.7 152.7H344.3c-13.8 0-25 11.2-25 25s11.2 25 25 25h522.5L714.1 681c-9.8 9.8-9.8 25.6 0 35.4 9.8 9.8 25.6 9.8 35.4 0L944.9 521c2.8-2.8 4.9-6.2 6.1-9.9v-0.1c0.1-0.6 0.3-1.1 0.4-1.6z" fill="#409eff" p-id="2719"></path><path d="M640.1 953.2H132.5c-13.8 0-25-11.2-25-25V99.4c0-13.8 11.2-25 25-25h507.7c13.8 0 25 11.2 25 25s-11.2 25-25 25H157.5v778.8h482.7c13.8 0 25 11.2 25 25s-11.3 25-25.1 25z" fill="#409eff" p-id="2720"></path></svg>
        </button>
      </el-header>
      <el-main style="background-color:white">
        <router-view>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  components: {
    Menu
  },
  data(){
    return{
      isCollapse: false,
      menu_fold: "el-icon-s-fold",
      aSize: 60,
      menu_width: "200px",
    }
  },
  methods:{
    menuFold(){
      this.isCollapse = !this.isCollapse;
      if(this.isCollapse===true){
        this.menu_fold = "el-icon-s-unfold";
        this.aSize = 40;
        this.menu_width = "64px";
      }else{
        this.menu_fold = "el-icon-s-fold";
        this.aSize = 60;
        this.menu_width = "200px";
      }
    },
    exitUser(){
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("type");
      this.$router.push({  //核心语句
        path:'/login', 
      })
    },
  },
}
</script>

<style lang="scss">
.el-header, .el-footer {
  background-color: white;
  line-height: 60px;
  position: relative;
  border-bottom: 1px solid #e6e6e6;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-mian{
  padding-top: 40px;
  padding-right: 20px;
  padding-left: 20px;
}
</style>
