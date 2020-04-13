<template>
  <div class="topDownload">
    <el-link
      v-for="item in model"
      :key="item._id"
      href="https://element.eleme.io"
      target="_blank"
      >{{ item }}</el-link
    >
  </div>
</template>

<script>
import { restgetAll } from "../Api/api";
export default {
  name: "topDownload",
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async getAllDownloadInfo() {
      let res = await restgetAll("softWareInfo");
      this.model = res.data;
      console.log(res);
    },
  },
  created() {
    this.getAllDownloadInfo();
  },
};
</script>

<style></style>
