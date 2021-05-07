<template>
  <el-form
    style="
      width: 440px;
      padding-top: 40px;
      padding-right: 40px;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
      background-color:rgba(255,255,255,0.9);
    "
    :model="User"
    :label-position="labelPosition"
    label-width="80px"
  >
    <el-form-item label="用户名">
      <el-input v-model="User.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="User.password"></el-input>
    </el-form-item>
    <el-form-item label="验证码">
      <el-input v-model="yzm" style="width: 50%"></el-input>
      <div id="checkCode" class="code" @click="getCode()">{{code}}</div>
    </el-form-item>
    <el-form-item label="选择身份" prop="type">
      <el-radio-group v-model="User.type">
        <el-radio label="系统管理员"></el-radio>
        <el-radio label="管理员"></el-radio>
        <el-radio label="劝导员"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit()">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Login from '@/APIUrl/index'
import swal from 'sweetalert';
export default {
  components: {},
  data() {
    return {
      labelPosition: "right",
      User: {
        name: "",
        password: "",
        type: "",
      },
      yzm: "",
      code: "",
      token: ""
    };
  },
  methods: {
    onSubmit() {
      if(this.yzm.toUpperCase() === this.code.toUpperCase()){
        Login(this.User.name,this.User.password,this.User.type).then((res)=>{
          if(res.data.code == 200){
            sessionStorage.setItem('type',this.User.type);
            if(this.User.type=="管理员"){
              this.$router.push({  //核心语句
                path:'/admin',   //跳转的路径
              })
            }
            if(this.User.type=="系统管理员"){
              this.$router.push({  //核心语句
                path:'/sysadmin',   //跳转的路径
              })
            }
            if(this.User.type=="劝导员"){
              this.$router.push({  //核心语句
                path:'/counselor',   //跳转的路径
              })
            }
          }
        })
        // if(code == 200){
        //   if(this.User.type=="管理员"){
        //     this.$router.push({  //核心语句
        //       path:'/admin',   //跳转的路径
        //     })
        //   }
        // }
        // if(this.User.name == 'zs' && this.User.type=='劝导员' && this.User.password == '123456'){
        //   sessionStorage.getItem('username',this.User.name);
        //   sessionStorage.getItem('type',this.User.type);
        //   this.$router.push({  //核心语句
        //     path:'/counselor',   //跳转的路径
        //   })
        // }
        // if(this.User.name == 'ls' && this.User.type=='管理员' && this.User.password == '123456'){
        //   sessionStorage.getItem('username',this.User.name);
        //   sessionStorage.getItem('type',this.User.type);
        //   this.$router.push({  //核心语句
        //     path:'/admin',   //跳转的路径
        //   })
        // }
        // if(this.User.name == 'ls' && this.User.type =='系统管理员' && this.User.password == '123456'){
        //   sessionStorage.getItem('username',this.User.name);
        //   sessionStorage.getItem('type',this.User.type);
        //   this.$router.push({  //核心语句
        //     path:'/sysadmin',   //跳转的路径
        //   })
        // }
        // const that = this;
        // axios({
        //     url: "http://localhost:6060/api/Authoize/Login",
        //     method:"post",
        //     params: {
        //       username: that.User.name,
        //       userpwd: that.User.password,
        //       type: that.User.type,
        //     },
        //   })
        //   .then((res) => {
        //     that.token ='Bearer '+res.data.data
        //     sessionStorage.setItem("token", that.token);
        //     sessionStorage.setItem("type", that.User.type);
        //   })
        //   .catch((err) => {
        //     return err;
        //   })
        // else if(that.type == "劝导员"){
        //   axios({
        //   url:'http:localhost:5000/api/CounselorInfo/Find',
        //   methods:'get',
        //   headers:{
        //     Authorization: sessionStorage.getItem('token')
        //   }
        //   }).then((res) => {
        //     console.log(res.data);
        //   }).catch((err)=>{
        //     return err;
        //   })
        // }
        
      }
      else if(this.yzm.toUpperCase() !== this.code.toUpperCase()){
        swal({
          text:"验证码错误",
          icon:"warning"
        });
      }
      
    },
    getCode() {
      var code = "";
      //所有候选组成验证码的字符
      var codeChars = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      //循环组成验证码的字符串
      for (var i = 0; i < 4; i++) {
        //获取随机验证码下标
        var charNum = Math.floor(Math.random() * 62);
        //组合成指定字符验证码
        code += codeChars[charNum];
      }
      this.code = code;
    },
  },
  created() {
    this.getCode();
  },
};
</script>

<style scoped>
.code {
  font-family: Arial;
  font-style: italic;
  color: #409eff;
  font-size: 30px;
  letter-spacing: 3px;
  font-weight: bolder;
  cursor: pointer;
  text-align: center;
  background-color: #cecece;
  height: 40px;
  width: 50%;
  vertical-align: middle;
  display: inline-block;
}
</style>
