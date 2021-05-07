<template>
  <el-table :data="NoticeData" style="width: 100%" stripe>
    <el-table-column label="发布时间" width="220">
      <template #default="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>
    <el-table-column label="通知标题" prop="title"> </el-table-column>
    <el-table-column label="通知类别" prop="category"> </el-table-column>
    <el-table-column label="管理员姓名" prop="adminInfo.name"> </el-table-column>
    <el-table-column label="附件" width="180">
      <template #default="scope">
        <a :href="scope.row.path" target="_blank" class="file_a">查看文件</a>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import all from '@/APIUrl/all.js'
export default {
  inject: ["reload"],
  components: {},
  data() {
    return {
      NoticeData: []
    };
  },
  methods: {
    toFile(e) {
      console.log(e.target.getAttribute("data-url"));
    },
    
  },
  created() {
    all.NoticeInfo.get().then(res=>{
      console.log(res.data.data);
      this.NoticeData = res.data.data;
    })
  }
};
</script>

<style>
.file_a {
  text-decoration: none;
  color: #409eff;
}
.swal-footer {
  background-color: rgb(245, 248, 250);
  margin-top: 32px;
  border-top: 1px solid #e9eef1;
  overflow: hidden;
}
</style>
