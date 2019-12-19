<template>
  <el-table :data="items" border style="width: 100%">
    <el-table-column prop="_id" label="id"></el-table-column>
    <el-table-column prop="versionNumber" label="姓名"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "mcList",
  data() {
    return { items: {} };
  },
  methods: {
    async fetch() {
      const data = await this.$http.get("/rest/mc");
      this.items = data.data;
      console.log(data);
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
</style>