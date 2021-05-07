<template>
<div>
<el-button
        size="mini"
        type="primary"
        @click="addcounselor = true"
    >
        <i class="el-icon-plus"></i>
    </el-button>
</div>
    
  <el-table :data="counsellor" style="width: 100%" stripe>
    <el-table-column
      v-for="items in title"
      :key="items.id"
      :label="items.label"
      :prop="items.prop"

    >
    </el-table-column>
    <el-table-column align="right">
      <template #header>
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
          <i class="el-icon-edit"></i>
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          <i class="el-icon-delete"></i>
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="劝导员编辑" v-model="dialogFormVisible">
    <el-form ref="self" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="self.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="self.sex"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="self.telNumber"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="self.address"></el-input>
      </el-form-item>
      <el-form-item label="所属单位">
        <el-input v-model="self.units"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit()">提交</el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog title="新增劝导员" v-model="addcounselor">
    <el-form ref="selfadd" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="selfadd.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="selfadd.sex"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="selfadd.telnumber"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="selfadd.address"></el-input>
      </el-form-item>
      <el-form-item label="所属单位">
        <el-input v-model="selfadd.units"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="selfadd.username"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addcounselor = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd()">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import swal from "sweetalert";
export default {
  components: {
  },
  data() {
    return {
      title: [
        {
          id: 0,
          prop: "name",
          label: "姓名",
        },
        {
          id: 1,
          prop: "sex",
          label: "性别",
        },
        {
          id: 2,
          prop: "telNumber",
          label: "联系电话",
        },
        {
          id: 3,
          prop: "address",
          label: "性别",
        },
        {
          id: 4,
          prop: "units",
          label: "所属单位",
        },
        {
          id: 5,
          prop: "username",
          label: "用户名",
        },
      ],
      counsellor: [
        {
          id: 1,
          name: "张三",
          sex: "男",
          telNumber: "14725836933",
          address: "云南省玉溪市解放路",
          units: "元江",
          username: "zs",
        },
        {
          id: 2,
          name: "counsellor",
          sex: "男",
          telNumber: "12345678910",
          address: "云南省玉溪市",
          units: "云南省玉溪市",
          username: "counsellor",
        },
      ],
      self:{
        id: 0,
        name: '',
        sex:'',
        telNumber: '',
        address:'',
        units:'',
        username:''
      },
      selfadd:{
        name: '',
        sex:'',
        telNumber: '',
        address:'',
        units:'',
        username:''
      },
      dialogFormVisible: false,
      addcounselor: false,
      iden: 0 
    };
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row.Id);
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
          //判断 是否 点击的 确定按钮
          if (res) {
            this.counsellor.pop(index);
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
    handleEdit(index, row) {
        this.dialogFormVisible = true;
        this.self = row;
        this.iden = row.id;
        console.log(index, row);
    },
    handleSubmit(){
      this.dialogFormVisible = false;
      this.counsellor.splice(iden,1,this.self);
      swal({
        icon:'success',
        text:'编辑成功'
      });
    },
    handleAdd(){
      this.addcounselor = false;
      this.counsellor.push(this.selfadd);
      swal({
        icon:'success',
        text:'添加成功'
      });
    }
  },
};
</script>

<style scoped>
</style>
