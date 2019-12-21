/* eslint-disable no-console */
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
      <el-form-item label="Mc版本">
        <el-upload
          class="file-upload"
          action="http://localhost:3322/api/upload"
          :on-success="afterSuccess"
          :before-upload="handleProgress"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
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
      await this.$http.post("rest/mc", this.model);
      this.$router.push("/mc/list");
      this.$message({
        type: "success",
        message: "添加成功"
      });
    },

    afterSuccess(file) {
      console.log(file);
    },
    handleRemove(file, fileList) {
      // eslint-disable-next-line no-console
      console.log(file, fileList);
    },
    handlePreview(file) {
      // eslint-disable-next-line no-console
      console.log(file);
    },
    handleProgress(file) {
      console.log(file);
      if (file.size > 5000000) {
        this.$confirm("文件大小不可以超过10M");
        return false;
      }
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style>
</style>