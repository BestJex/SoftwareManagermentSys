<template>
  <div>
    <h1>anyTitle</h1>

    <el-tabs type="border-card">
      <el-tab-pane label="下载版本">
        <div>版本号: {{model.versionNumber}}</div>
        <div>
          相关项目:
          <el-tag>标签一</el-tag>
        </div>
        <div>
          下载项目:
          <el-link v-bind:href="model.fileDir" type="info">{{model.fileName}}</el-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="版本信息">版本信息</el-tab-pane>
      <el-tab-pane label="版本审计">版本审计</el-tab-pane>
    </el-tabs>
  </div>
</template>
  
<script>
export default {
  name: "mcView",
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async fetchItem() {
      const data = await this.$http.get(`/rest/mc/${this.id}`);
      this.model = data.data;
    }
  },
  created() {
    this.id && this.fetchItem();
  }
};
</script>

<style scoped>
p {
  font-size: 15px;
}

.el-link {
  font-size: 15px;
}
</style>