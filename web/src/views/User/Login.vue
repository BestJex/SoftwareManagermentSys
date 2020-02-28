<template>
  <div class="loginPage">
    <div class="loginBg"></div>
    <div class="login">
      <el-card header="欢迎登陆信安软件管理系统" class="box-card">
        <el-form @submit.native.prevent="login">
          <el-form-item>
            <el-input placeholder="请输入账号" v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入密码" type="password" v-model="model.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="SubBtn" type="primary" native-type="submit">登录</el-button>
          </el-form-item>
          <el-button class="ForgetPass" type="text">忘记密码?</el-button>
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
  },
  methods: {
    async login() {
      let res = await this.$http.post("/rest/user", this.model);
      console.log(res);
    }
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
  background: url("../../assets/login.jpg") no-repeat fixed top;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(0px);
}

.login {
  width: 400px;
  float: right;
  position: relative;
  margin-top: 23vh;
  margin-right: 10vw;
}

.box-card {
  color: #34465c !important;
  background: rgba(250, 250, 250, 0.9);
  border: 1px solid #dad4cd;
}

.SubBtn {
  width: 100%;
}

.ForgetPass {
  float: right;
}
</style>