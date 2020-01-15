<template>
  <el-container>
    <el-header style="text-align: right; font-size: 12px;">
      <h1 id="title">anyTitle</h1>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>Admin</span>
    </el-header>
    <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu router :default-openeds="['1']">
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-order"></i>版本管理
            </template>
            <el-menu-item-group>
              <template slot="title">Mc</template>
              <el-menu-item index="/mc/create">上传MC</el-menu-item>
              <el-menu-item index="/mc/list">MC列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">An</template>
              <el-menu-item index="/an/create">上传AN</el-menu-item>
              <el-menu-item index="/an/list">AN列表</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">Ac</template>
              <el-menu-item index="/ac/create">上传AC</el-menu-item>
              <el-menu-item index="/ac/list">AC列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <el-menu router :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-data"></i>项目管理
            </template>
            <el-menu-item-group>
              <template slot="title">项目</template>
              <el-menu-item index="/project/create">创建项目</el-menu-item>
              <el-menu-item index="/project/list">项目列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view></router-view>
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
  name: "McCreate",
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