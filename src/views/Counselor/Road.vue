<template>
  <el-tabs type="border-card">
    <el-tab-pane label="查看">
      <CRoad/>
    </el-tab-pane>
    <el-tab-pane label="上传道路障碍">
      <RoadForm/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import CRoad from '@/components/CRoad.vue'
import RoadForm from '@/components/RoadForm.vue'
export default {
  components: {
    CRoad,
    RoadForm
  }
}
</script>

<style scoped>

</style>
