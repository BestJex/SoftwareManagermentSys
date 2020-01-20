<template>
  <div>
    <h1>Excel2XML</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="Excel2xml">
        <div class="downloadTemplate">
          <el-link v-bind:href="url" type="primary">点击下载模板</el-link>
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
    async fetchTemplateURL() {
      let res = await this.$http.get("/download/switch/excel2xmlTemplate.xlsx");
      this.url = res.config.url;
    }
  },
  created() {
    this.fetchTemplateURL();
  }
};
</script>

<style>
</style>