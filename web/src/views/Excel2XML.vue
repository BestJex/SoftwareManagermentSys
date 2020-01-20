<template>
  <div>
    <h1>Excel2XML</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="Excel2xml">
        <div class="downloadTemplate">
          下载模板
          <el-link @click="downLoad" type="info"></el-link>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "excel2xml",
  data() {
    return {
      url: "test"
    };
  },
  methods: {
    downLoad() {}
  }
};
</script>

<style>
</style>