<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px;">
      <h1 id="title">anyTitle</h1>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Admin</span>
    </el-header>
    <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-order"></i>文件管理
            </template>
            <el-menu-item-group>
              <template slot="title">Mc</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">An</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">Ac</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="版本名称" width="120"></el-table-column>
            <el-table-column prop="address" label="版本详情"></el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

#title {
  position: absolute;
  left: 30px;
  font-size: 17px;
  line-height: 30px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2019-12-14",
      name: "217",
      address: "版本管理 版本管理"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>