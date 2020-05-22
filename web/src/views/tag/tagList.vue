<template>
  <div>
    <h1 class="title">项目列表:</h1>
    <el-table :data="items" border style="width: 100%">
      <el-table-column prop="tagName" label="标签名称"></el-table-column>
      <el-table-column prop="tagFeatures" label="标签简介"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/tag/edit/${scope.row._id}`)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { restgetAll, restDeleteOne } from "../../Api/api";
export default {
  name: "tagList",
  data() {
    return { items: [] };
  },
  methods: {
    async fetch() {
      const data = await restgetAll("tag");
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
        const data = await restDeleteOne("tag", row._id);
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