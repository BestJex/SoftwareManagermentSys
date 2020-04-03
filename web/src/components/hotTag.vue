<template>
  <div>
    <el-tag
      class="hotTag"
      v-for="item in model"
      :key="item._id"
      :disable-transitions="false"
      v-on:click="$router.push(`/softWare/list/${item._id}`)"
      type="info"
    >{{item.projectName}}</el-tag>
  </div>
</template>

<script>
import { restgetAll } from "../Api/api";
export default {
  name: "hotTag",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async getProject() {
      const res = await restgetAll("project");
      this.model = res.data;
    },

    async tagClick(key) {}
  },
  created() {
    this.getProject();
  }
};
</script>

<style>
.hotTag {
  margin-right: 5px;
}
</style>