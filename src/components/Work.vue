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
import all from "@/APIUrl/all.js";
import swal from "sweetalert";
export default {
  components: {},
  data() {
    return {
      title: [
        {
          id: 0,
          label: "违法人姓名",
          prop: "name",
        },
        {
          id: 1,
          label: "上报时间",
          prop: "time",
        },
        {
          id: 2,
          label: "地点",
          prop: "place",
        },
        {
          id: 3,
          label: "原因",
          prop: "reason",
        },
        {
          id: 4,
          label: "车辆牌照",
          prop: "licence",
        },
        {
          id: 5,
          label: "劝导员姓名",
          prop: "counselorInfo.Name",
        },
      ],
      data: [],
    };
  },
  methods: {
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
          if (res) {
            all.WorkInfo.deleteWork(row.id).then((res) => {
              console.log(res);
              all.WorkInfo.getAll().then((res) => {
                console.log(res);
                this.data = res.data.data;
              });
            });
            swal({
              icon: "success",
              text: "删除成功",
            });
            console.log(row.id);
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
    all.WorkInfo.getAll().then((res) => {
      console.log(res);
      this.data = res.data.data;
    });
  },
};
</script>

<style scoped>
</style>
