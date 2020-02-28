<template>
  <div class="loginPage">
    <div class="loginBg"></div>
    <div class="login">
      <el-card header="欢迎登陆信安软件管理系统" class="box-card">
        <el-form @submit.native.prevent="login">
          <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="model.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      model: {}
    };
  }
};
</script>

<style scoped>
.loginPage {
  width: 100vw;
  height: 100vh;
}

.loginBg {
  float: left;
  position: absolute;
  background: url("../assets/login.jpg") no-repeat fixed top;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(4px);
}

.login {
  width: 480px;
  float: right;
  position: relative;
  margin-top: 25vh;
  margin-right: 5vw;
}

.box-card {
  color: #34465c !important;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #dad4cd;
}
</style>