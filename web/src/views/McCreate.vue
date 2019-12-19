<template>
  <div class="Mc">
    <h1>上传文件:</h1>
    <el-form ref="model" :model="model" label-width="120px" @submit.native.prevent="save">
      <el-form-item label="版本号">
        <el-input maxlength="10" v-model="model.versionNumber"></el-input>
      </el-form-item>
      <el-form-item label="关联项目">
        <el-select v-model="model.relatedProject" placeholder="请选择"></el-select>
      </el-form-item>
      <el-form-item label="版本特性">
        <vue-editor v-model="model.versionFeatures"></vue-editor>
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
      model: {
        versionNumber: "",
        relatedProject: "",
        fileDir: "",
        versionFeatures: ""
      }
    };
  },
  components: {
    VueEditor
  },
  methods: {
    async save() {
      let model = await this.$http.post("rest/mc", this.model);
      this.$router.push("/mc/list");
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