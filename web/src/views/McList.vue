<template>
  <div>
    <h1>Mc列表:</h1>
    <el-table
      :data="items"
      :default-sort="{prop: 'items', order: 'descending'}"
      style="width: 100%"
    >
      <el-table-column sortable prop="createTime" label="创建时间"></el-table-column>
      <el-table-column sortable prop="versionNumber" label="版本号"></el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
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
    return {
      items: [],
      search: ""
    };
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
        const data = await this.$http.delete(`/rest/mc/${row._id}`);
        this.fetch();
        this.$notify({
          title: "成功",
          type: "success",
          message: "删除成功"
        });
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