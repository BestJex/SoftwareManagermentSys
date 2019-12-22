/* eslint-disable no-console */
<template>
  <div class="Mc">
    <h1>创建项目:</h1>
    <el-form ref="model" :model="model" label-width="120px" @submit.native.prevent="save">
      <el-form-item label="项目名称">
        <el-input maxlength="10" v-model="model.projectName"></el-input>
      </el-form-item>
      <el-form-item label="项目简介">
        <el-input v-model="model.projectFeatures"></el-input>
      </el-form-item>
      <el-form-item style="margin-top:1rem">
        <el-button type="primary" native-type="subumit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "createMC",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async save() {
      await this.$http.post("rest/project", this.model);
      this.$router.push("/project/list");
      this.$message({
        type: "success",
        message: "添加成功"
      });
    }
  }
};
</script>

<style>
</style>