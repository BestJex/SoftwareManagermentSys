<template>
  <div>
    <h1>版本：{{model.versionNumber}}</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="下载版本">
        <div class="versionItem">
          <p>版本号: {{model.versionNumber}}</p>
        </div>
        <div class="versionItem">
          相关项目:
          <el-tag
            v-for="item in model.relatedProject"
            :key="item._id"
            size="small"
          >{{item.projectName}}</el-tag>
        </div>
        <div class="versionItem">
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
import { restgetOne } from "../../Api/api";
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
      const data = await restgetOne("an", this.id);
      this.model = data.data;
      console.log(this.model);
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

.versionItem {
  margin: 10px;
}
</style>