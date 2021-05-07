<template>
  <div>
    <img src="../assets/404.png" alt="">
    <h2>抱歉，您访问的页面出错了</h2>
    <p>您可能输错了网址，或该网页已删除或不存在</p>
    <a href="/login">返回主页</a>
  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style scoped>
div{
  text-align: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 100px;
}
h2 {
  font-size: 32px;
  color: #333333;
  text-align: center;
  letter-spacing: 5px;
  padding-top: 33px;
  padding-bottom: 25px;
}
p {
  font-size: 14px;
  color: #666666;
  letter-spacing: 1px;
  text-align: center;
  padding-bottom: 35px;
}
a{
  line-height: 56px;
  text-align: center;
  border-radius: 3px;
  background: #7caced;
  color: #fff;
  letter-spacing: 5px;
  border: 0;
  font-size: 18px;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
}
</style>
