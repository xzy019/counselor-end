<template>
  <el-tabs type="border-card">
    <el-tab-pane label="查看">
      <CWork />
    </el-tab-pane>
    <el-tab-pane label="上传交通劝导">
      <WorkForm />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import CWork from '@/components/CWork.vue'
import WorkForm from '@/components/WorkForm.vue'
export default {
  components: {
    CWork,
    WorkForm
  }
}
</script>

<style scoped>

</style>
