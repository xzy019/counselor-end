<template>
  <el-table :data="data" style="width: 100%" stripe>
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
</template>

<script>
import swal from "sweetalert";
import all from '@/APIUrl/all.js'
export default {
  components: {},
  data() {
    return {
      title: [
        {
          id: 1,
          prop: "location",
          label: "道路所在地点",
        },
        {
          id: 2,
          prop: "reportTime",
          label: "上报时间",
        },
        {
          id: 3,
          prop: "counselorInfo.name",
          label: "所上报人员",
        },
        {
          id: 4,
          prop: "state",
          label: "状态",
        },
      ],
      data: [],
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
          all.RoadInfo.deleteRoad(row.id).then((res) => {
            console.log(res);
            all.RoadInfo.getAll().then((res) => {
              console.log(res);
              this.data = res.data.data;
            });
          });
          if (res) {
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
    all.RoadInfo.getAll().then((res) => {
      console.log(res);
      this.data = res.data.data;
    });
  },
};
</script>

<style>
</style>
