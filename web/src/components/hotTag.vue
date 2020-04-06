<template>
  <div>
    <el-tag
      class="hotTag"
      v-for="item in model"
      :key="item._id"
      :disable-transitions="false"
      v-on:click="$router.push(`/softWare/list/${item._id}`)"
      type="info"
      >{{ item.projectName }}</el-tag
    >
  </div>
</template>

<script>
import { restgetAll } from "../Api/api";
export default {
  name: "hotTag",
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async getProject() {
      const res = await restgetAll("project");
      this.model = res.data;
    },

    async tagClick(key) {},
  },
  created() {
    this.getProject();
  },
};
</script>

<style scoped>
.hotTag {
  margin: 0px 5px 5px 0px;
}
.hotTag:hover {
  border: 1px solid #0097a7;
}
</style>
