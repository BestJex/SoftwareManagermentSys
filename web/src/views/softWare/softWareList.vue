<template>
  <div>
    <h1>软件列表:</h1>
    <el-table
      :data="
        tableProps.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      :default-sort="{ prop: 'items', order: 'descending' }"
      style="width: 100%"
    >
      <el-table-column sortable prop="createTime" label="创建时间"></el-table-column>
      <el-table-column sortable prop="versionNumber" label="版本号"></el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot="header" slot-scope="scope">
          <el-input
            @input="SearchTable"
            v-model="search"
            size="mini"
            :key="scope._id"
            placeholder="输入版本号搜索"
          />
        </template>
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/softWare/view/${scope.row._id}`)"
            type="text"
            size="small"
          >查看</el-button>
          <el-button
            @click="$router.push(`/softWare/edit/${scope.row._id}`)"
            type="text"
            size="small"
          >编辑</el-button>
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="pagesize"
      layout="total, prev, next, pager,jumper "
      :total="items.length"
    ></el-pagination>
  </div>
</template>


<script>
import {
  restgetAll,
  restDeleteOne,
  deleteFile,
  getBlogTag,
  searchSoftWare,
  deleteDownloadInfo
} from "../../Api/api";
export default {
  name: "softWareList",
  props: { id: {}, searchInput: {} },
  data() {
    return {
      items: [],
      search: "",
      tableProps: [],
      currentPage: 1, //当前页
      pagesize: 10 //    每页的数据
    };
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
    },
    async findblogTag() {
      const res = await getBlogTag(this.id);
      this.items = res.data;
      this.tableProps = this.items;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      console.log(this.currentPage); //点击第几页
      this.tableProps = this.items;
    },

    async fetch() {
      const data = await restgetAll("softWare");
      this.items = data.data;
      this.tableProps = this.items;
    },

    //当从首页执行搜索
    async Search() {
      const res = await searchSoftWare(this.searchInput);
      this.items = res.data;
      this.tableProps = res.data;
    },

    //表格内的搜索--过滤前端数组
    SearchTable() {
      let data = this.items.filter(
        data =>
          !this.search ||
          data.versionNumber.toLowerCase().includes(this.search.toLowerCase())
      );
      this.tableProps = data;
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
      )
        .then(async () => {
          await deleteDownloadInfo(row._id); //删除对应软件的下载信息
          await restDeleteOne("softWare", row._id);
          if (!row.fileName == " " || !row.fileName == undefined) {
            //如果根本上传文件，就不用去后台删除文件了。
            await deleteFile(row.fileName);
          }
          this.fetch();
          this.$notify({
            title: "成功",
            type: "success",
            message: "删除成功"
          });
        })
        .catch(err => {
          console.log(`删除错误`, err);
        });
    }
  },
  created() {
    if (this.id) {
      this.findblogTag();
    } else if (this.searchInput && this.searchInput !== " ") {
      this.Search();
    } else {
      this.fetch();
    }
  }
};
</script>

<style></style>
