<template>
  <div>
    <el-tag
      class="hotTag"
      v-for="item in model"
      :key="item._id"
      :disable-transitions="true"
      v-on:click="$router.push(`/softWare/findTag/${item._id}`)"
      type="info"
      >{{ item.tagName }}</el-tag
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
    async getTag() {
      const res = await restgetAll("tag");
      this.model = res.data;
    },

    async tagClick(key) {},
  },
  created() {
    this.getTag();
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
