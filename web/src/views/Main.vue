<template>
  <el-container>
    <el-header style>
      <h1 id="title">{{title}}</h1>
      <el-dropdown @command="handleCommand">
        <i class="el-icon-setting" style="margin-right: 15px;color:#FFFFFF"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item command="logOut">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>欢迎您 {{this.userName}}</span>
    </el-header>

    <el-container style="height: 100vh">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu open="[1]" router :default-active="$router.path" :collapse="false">
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-order"></i>版本管理
            </template>
            <el-menu-item-group>
              <template slot="title">软件</template>
              <el-menu-item index="/softWare/create">上传软件</el-menu-item>
              <el-menu-item index="/softWare/list">软件列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu class="tagMan" index="2">
            <template slot="title">
              <i class="el-icon-s-data"></i>标签管理
            </template>
            <el-menu-item-group>
              <template slot="title">标签</template>
              <el-menu-item class="tagCreate" index="/tag/create">创建标签</el-menu-item>
              <el-menu-item index="/tag/list">项目标签</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-custom"></i>用户管理
            </template>
            <el-menu-item-group>
              <template slot="title">用户</template>
              <el-menu-item class="userCreate" index="/user/create">创建用户</el-menu-item>
              <el-menu-item index="/user/list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-suitcase-1"></i>工具
            </template>
            <el-menu-item-group>
              <template slot="title">交换机</template>
              <el-menu-item class="excel2xml" index="/tool/excel2xml">Excel2XML</el-menu-item>
              <el-menu-item class="xml2excel" index="/tool/xml2excel">XML2Excel</el-menu-item>
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

<script>
export default {
  name: "McCreate",
  data() {
    return {
      userName: "",
      title: process.env.VUE_APP_TITLE || "anyTitle",
      isCollapse: true
    };
  },
  methods: {
    getUser() {
      this.userName = localStorage.userName;
    },
    handleCommand(cmd) {
      if (cmd == "logOut") {
        localStorage.clear();
        console.log(localStorage.token);
        this.$router.push("/login");
        this.$message({
          type: "success",
          message: "退出登录成功"
        });
      }
    }
  },
  created() {
    this.getUser();
  }
};
</script>
<style>
.el-header {
  background: #0290f1;
  text-align: right;
  font-size: 12px;
  color: #ffffff;
  line-height: 60px;
  box-shadow: 1px -5px 15px #0290f1;
  z-index: 999;
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
