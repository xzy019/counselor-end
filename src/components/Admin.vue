<template>
<div>
  <el-button
        size="mini"
        type="primary"
        @click="addadmin = true"
    >
        <i class="el-icon-plus"></i>
    </el-button>
</div>
  <el-table
    :data="admindata"
    style="width: 100%"
    stripe>
    <el-table-column
      v-for="(items,index) in title"
      :key="index"
      :label="items.label"
      :prop="items.prop">
    </el-table-column>
    <el-table-column
      align="right">
      <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template #default="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">
          <i class="el-icon-edit"></i>
          编辑
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">
          <i class="el-icon-delete"></i>
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="编辑管理员" v-model="dialogFormVisible">
    <el-form ref="self" label-width="80px">
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
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit()">提交</el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog title="新增管理员" v-model="addadmin">
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
        <el-input v-model="selfadd.adminname"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addadmin = false">取 消</el-button>
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
  data(){
    return {
      title:[
        {
          label:'姓名',
          prop: 'name'
        },
        {
          label:'性别',
          prop: 'sex'
        },
        {
          label:'电话号码',
          prop: 'telnumber'
        },
        {
          label:'地址',
          prop: 'address'
        },
        {
          label:'所属单位',
          prop: 'units'
        },
        {
          label:'管理员用户名',
          prop: 'adminname'
        }
      ],
      admindata:[
        {
          id:0,
          name:'李四',
          sex:'男',
          telnumber:'12345678910',
          address:'云南省玉溪市',
          units:'元江',
          adminname:'ls'
        },
        {
          id:1,
          name:'李四',
          sex:'男',
          telnumber:'12345678910',
          address:'云南省玉溪市',
          units:'元江',
          adminname:'ls'
        }
      ],
      search: '',
      self:{
        id:1,
        name:'',
        sex:'',
        telnumber:'',
        address:'',
        units:'',
      },
      selfadd:{
        name:'',
        sex:'',
        telnumber:'',
        address:'',
        units:'',
        adminname:''
      },
      dialogFormVisible: false,
      addadmin: false,
      iden: 0
    }
  },
  methods:{
    handleDelete(index, row) {
        console.log(index, row.Id);
        swal({
          icon: "error",
          text: "确定删除吗？",
          buttons:{
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
            }
          },
          dangerMode: true,
          closeOnEsc: false,
          closeOnClickOutside: false,
          className:"swal-footer"
        }).then( res => {
            try {
                //判断 是否 点击的 确定按钮
                if (res) {
                  this.admindata.pop(index);
                  swal({
                    icon:'success',
                    text:'删除成功'
                  });
                  console.log(row.Id);
                }
                else {
                    swal.close()
                }
            } catch (e) {
                alert(e);
            }
        })
      },
    handleEdit(index,row){
      this.dialogFormVisible = true;
      this.self = row;
      this.iden = index;
      console.log(index,row);
    },
    handleSubmit(){
      this.dialogFormVisible = false;
      this.admindata.splice(iden,1,this.self);
      swal({
        icon:'success',
        text:'编辑成功'
      });
    },
    handleAdd(){
      this.addadmin = false;
      this.admindata.push(this.selfadd);
      swal({
        icon:'success',
        text:'添加成功'
      });
    }
  }
}
</script>

<style scoped>

</style>
