<template>
  <el-table
    :data="data"
    style="width: 100%"
    stripe>
    <el-table-column
      v-for="items in title"
      :key="items.id"
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
      </template>
    </el-table-column>
  </el-table>

  <el-dialog title="收货地址" v-model="dialogFormVisible">
   <el-form ref="form" :model="work" label-width="100px" style="width:48vw;">
    <el-form-item label="违法人姓名" required>
      <el-input v-model="work.name"></el-input>
    </el-form-item>
    <el-form-item label="地点" required> 
      <el-input v-model="work.location"></el-input>
    </el-form-item>
    <el-form-item label="劝导原因" required>
      <el-input v-model="work.reason"></el-input>
    </el-form-item>
    <el-form-item label="车辆牌照" required>
      <el-input v-model="work.licence"></el-input>
    </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit()">确 定</el-button>
    </span>
  </template>
</el-dialog>
</template>

<script>
import all from '@/APIUrl/all.js'
import swal from "sweetalert";
export default {
  components: {

  },
  data(){
    return{
      title:[
        {
          id: 0,
          label:'违法人姓名',
          prop:'name'
        },
        {
          id: 1,
          label:'上报时间',
          prop:'time'
        },
        {
          id: 2,
          label:'地点',
          prop:'place'
        },
        {
          id: 3,
          label:'原因',
          prop:'reason'
        },
        {
          id: 4,
          label:'车辆牌照',
          prop:'licence'
        },
        {
          id: 5,
          label:'劝导员姓名',
          prop:'counselorInfo.name'
        }
      ],
      data:[],
      dialogFormVisible: false,
      iden: 0,
      work:{
        name: '',
        location:'',
        reason: '',
        licence:''
      }
    }
  },
  methods:{
    handleEdit(index,row){
      this.dialogFormVisible = true;
      console.log(index,row);
      this.iden = row.id;
      this.work = row;
      this.work.location = row.place;
    },
    handleSubmit(){
      all.WorkInfo.editWork(this.iden,this.work.name,this.work.location,this.work.reason,this.work.licence).then(res=>{
        console.log(res);
        all.WorkInfo.getSelf().then(res=>{
          console.log(res);
          this.data = res.data.data
        });
      })
      this.dialogFormVisible = false;
    }
  },
  created(){
    all.WorkInfo.getSelf().then(res=>{
      console.log(res);
      this.data = res.data.data
    })
  }
}
</script>

<style scoped>

</style>
