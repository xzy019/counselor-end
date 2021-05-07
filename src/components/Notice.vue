<template>
  <div>
    <el-button
        size="mini"
        type="primary"
        @click="addnote = true"
    >
        <i class="el-icon-plus"></i>
    </el-button>
  </div>
  <el-table :data="NoticeData" style="width: 100%" stripe>
    <el-table-column label="发布时间" width="180">
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
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="通知" v-model="dialogFormVisible">
    
      <el-form ref="form" label-width="80px">
        
          <el-form-item label="通知标题" style="width: 300px">
            <el-input v-model="title"></el-input>
          </el-form-item>
        
        <el-form-item label="通知类型">
          <el-select v-model="category" placeholder="请选择通知类型">
            <el-option label="类型一" value="类型二"></el-option>
            <el-option label="类型二" value="类型二"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择文件">
          <el-upload
            class="upload-demo"
            ref="upload"
            action=""
            accept="application/pdf"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-change="handleChange1"
            :file-list="fileList"
            name="file"
            :auto-upload="false"
          >
            <el-button size="small" type="primary">选取文件</el-button>
            <div class="el-upload__tip">只能上传PDF文件</div>
          </el-upload>
        </el-form-item>
      </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit()"
          >提交</el-button
        >
      </span>
    </template>
  </el-dialog>

  <el-dialog title="通知" v-model="addnote">
    
      <el-form ref="form" label-width="80px">
        
          <el-form-item label="通知标题" style="width: 300px">
            <el-input v-model="add.title"></el-input>
          </el-form-item>
        
        <el-form-item label="通知类型">
          <el-select v-model="add.category" placeholder="请选择通知类型">
            <el-option label="类型一" value="类型一"></el-option>
            <el-option label="类型二" value="类型二"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择文件">
          <el-upload
            class="upload-demo"
            ref="upload"
            action=""
            accept="application/pdf"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-change="handleChange2"
            :file-list="add.fileList"
            name="file"
            :auto-upload="false"
          >
            <el-button size="small" type="primary">选取文件</el-button>
            <div class="el-upload__tip">只能上传PDF文件</div>
          </el-upload>
        </el-form-item>
      </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addnote = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd()">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import swal from "sweetalert";
import all from "@/APIUrl/all.js"
export default {
  inject: ["reload"],
  components: {},
  data() {
    return {
      NoticeData: [],
      dialogFormVisible: false,
      title: "",
      category: "",
      fileList: [],
      uploadFile: null,
      add:{
        title: "",
        category: "",
        fileList: [],
        uploadFile: null,
      },
      addnote: false,
      iden: 0
    };
  },
  methods: {
    toFile(e) {
      console.log(e.target.getAttribute("data-url"));
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleChange1(file, fileList) {
      this.uploadFile = file;
      console.log(file, fileList);
    },
    handleChange2(file, fileList) {
      this.add.uploadFile = file;
      console.log(file, fileList);
    },
    handleEdit(index, row) {
      this.dialogFormVisible = true;
      console.log(index, row.id);
      this.title = row.title;
      this.category = row.category;
      this.iden = row.id;
    },
    handleSubmit(){
      let formData = new FormData();
      formData.append("id",this.iden);
      formData.append("file",this.uploadFile.raw);
      formData.append("title",this.title);
      formData.append("category",this.category);
      all.NoticeInfo.editNotice(formData).then(res=>{
        console.log(res);
        all.NoticeInfo.get().then(res=>{
          console.log(res.data.data);
          this.NoticeData = res.data.data;
        })
      })
      this.dialogFormVisible = false;
    },
    handleAdd(){
      let formData = new FormData();
      formData.append("file",this.add.uploadFile.raw);
      formData.append("title",this.add.title);
      formData.append("category",this.add.category);
      all.NoticeInfo.createNotice(formData).then(res=>{
        console.log(res);
        all.NoticeInfo.get().then(res=>{
          console.log(res.data.data);
          this.NoticeData = res.data.data;
        })
      })
      this.addnote = false;
    },
    handleDelete(index, row) {
      console.log(index, row.id);
      swal({
        icon: "error",
        text: "确定删除吗？",
        buttons: {
          cancel: {
            text: "取消",
            value: false,
            visible: true,
            className: "",
            closeModal: true,
          },
          confirm: {
            text: "确定",
            value: true,
            visible: true,
            className: "",
            closeModal: true,
          },
        },
        dangerMode: true,
        closeOnEsc: false,
        closeOnClickOutside: false,
        className: "swal-footer",
      }).then((res) => {
        try {
          console.log(res);
          if (res) {
            all.NoticeInfo.deleteNotice(row.id).then(res=>{
              console.log(res);
              all.NoticeInfo.get().then(res=>{
                console.log(res.data.data);
                this.NoticeData = res.data.data;
              })
            });
            swal({
              icon: "success",
              text: "删除成功",
            });
            console.log(row.Id);
          } else {
            swal.close();
          }
        } catch (e) {
          alert(e);
        }
      });
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
