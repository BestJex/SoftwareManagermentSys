<template>
  <div>
    <h1>Mc列表:</h1>
    <el-table :data="items" border style="width: 100%">
      <el-table-column prop="_id" label="id"></el-table-column>
      <el-table-column prop="versionNumber" label="版本号"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/mc/view/${scope.row._id}`)" type="text" size="small">查看</el-button>
          <el-button @click="$router.push(`/mc/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "mcList",
  data() {
    return { items: [] };
  },
  methods: {
    async fetch() {
      const data = await this.$http.get("/rest/mc");
      this.items = data.data;
      console.log(data);
    },

    async remove(row) {
      this.$confirm(
        `确定删除 ${row.versionNumber} 吗？,该操作不可逆`,
        "确认信息",
        {
          distinguishCancelAndClose: true,
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        }
      ).then(async () => {
        const data = await this.$http.delete("/rest/mc");
        this.$message({
          type: "info",
          message: "删除成功"
        });
      });
      this.fetch();
    }
  },
  created() {
    this.fetch();
  }
};
</script>

<style>
</style>