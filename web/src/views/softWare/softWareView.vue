<template>
  <div>
    <el-card>
      <el-page-header @back="goBack" content="版本详情"></el-page-header>
      <br />
      <el-tabs>
        <el-tab-pane label="下载版本">
          <div class="versionItem">
            <p>版本号: {{ model.versionNumber }}</p>
          </div>
          <div class="versionItem">
            相关项目:
            <el-tag
              class="tag"
              v-for="item in model.parent"
              :key="item._id"
              size="small"
            >{{ item.tagName }}</el-tag>
          </div>
          <div class="versionItem">
            下载项目:
            <el-link
              @click.native="count(model._id)"
              v-bind:href="model.fileDir"
              type="info"
            >{{ model.fileName }}</el-link>
          </div>
        </el-tab-pane>
        <el-tab-pane label="版本信息">
          <div v-html="model.versionFeatures"></div>
        </el-tab-pane>
        <el-tab-pane label="版本审计">版本审计</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { restgetOne, downloadInfo } from "../../Api/api";
export default {
  name: "softWareView",
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
      const data = await restgetOne("softWare", this.id);
      this.model = data.data;
      console.log(this.model);
    },
    async count(id) {
      try {
        await downloadInfo(id);
      } catch (error) {
        console.log(error);
      }
    },
    goBack() {
      this.$router.go(-1);
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
.tag {
  margin: 5px;
}
</style>
