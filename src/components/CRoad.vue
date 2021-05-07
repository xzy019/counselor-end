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
    <el-form ref="form" :model="road" label-width="80px" style="width:48vw;">
    <el-form-item label="地点" required>
      <el-input v-model="road.location"></el-input>
    </el-form-item>
    <el-form-item label="状态" required> 
      <el-input v-model="road.state"></el-input>
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
         title: [
            {
               id: 1,
               prop: "location",
               label: "道路所在地点"
            },
            {
               id: 2,
               prop: "reportTime",
               label: "上报时间"
            },
            {
               id: 3,
               prop: "counselorInfo.name",
               label: "所上报人员"
            },
            {
               id: 4,
               prop: "state",
               label: "状态"
            },
         ],
         data:[
         ],
         dialogFormVisible: false,
         road:{
           location: '',
           state: ''
         },
         iden: 0      
      }
   },
  methods:{
    handleEdit(index,row){
      this.dialogFormVisible = true;
      console.log(index,row);
      this.iden = row.id;
      this.road = row;
    },
    handleSubmit(){
      all.RoadInfo.editRoad(this.iden,this.road.location,this.road.state).then(res=>{
        console.log(res);
        all.RoadInfo.getSelf().then(res=>{
          console.log(res);
          this.data = res.data.data
        });
      })
      this.dialogFormVisible = false;
    }
  },
  created(){
     all.RoadInfo.getSelf().then(res=>{
      console.log(res);
      this.data = res.data.data
    })
  }
}
</script>

<style>

</style>
