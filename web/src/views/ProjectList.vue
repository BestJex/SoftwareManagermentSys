<template>
  <el-table :data="items" border style="width: 100%">
    <el-table-column prop="projectName" label="项目名称"></el-table-column>
    <el-table-column prop="projectFeatures" label="项目简介"></el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button
          @click="$router.push(`/project/edit/${scope.row._id}`)"
          type="text"
          size="small"
        >编辑</el-button>
        <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "mcList",
  data() {
    return { items: [] };
  },
  methods: {
    async fetch() {
      const data = await this.$http.get("/rest/project");
      this.items = data.data;
      console.log(data);
    },

    async remove(row) {
      this.$confirm(`确定删除 ${row._id} 吗？,该操作不可逆`, "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(async () => {
        console.log(row._id);
        const data = await this.$http.delete(`/rest/project/${row._id}`);
        this.$notify({
          title: "成功",
          type: "success",
          message: "删除成功"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
</style>