/* eslint-disable no-console */
<template>
  <div class="Mc">
    <h1>{{id?'编辑':'上传'}}MC:</h1>
    <el-form ref="model" :model="model" label-width="120px" @submit.native.prevent="save">
      <el-form-item label="版本号">
        <el-input maxlength="10" v-model="model.versionNumber"></el-input>
      </el-form-item>
      <el-form-item label="关联项目">
        <el-select v-model="model.relatedProject" multiple placeholder="请选择">
          <el-option
            v-for="item in projectList"
            :key="item._id"
            :label="item.projectName"
            :value="item._id"
          ></el-option>
        </el-select>
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
          :on-remove="handleRemove"
          :data="fileData"
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
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        versionNumber: "",
        relatedProject: "",
        fileDir: "",
        versionFeatures: "",
        name: "Mydata"
      },
      projectList: [],
      fileData: { fileName: "" }
    };
  },
  components: {
    VueEditor
  },
  methods: {
    async fetchProject() {
      const res = await this.$http.get("/rest/project");
      this.projectList = res.data;
      console.log(this.projectList);
    },
    async fetchEdit() {
      const data = await this.$http.get(`/rest/mc/${this.id}`);
      this.model = data.data;
    },
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
      console.log(`filessss`, file);
      return (this.fileData.fileName = `MC_${this.model.versionNumber}`);
      // if (file.size > 5000000) {
      //   this.$confirm("文件大小不可以超过10M");
      //   return false;
      // }
      // if (this.model.versionNumber == "") {
      //   this.$confirm("必须输入版本号");
      //   return false;
      // }
      // if (this.model.versionFeatures == "") {
      //   this.$confirm("必须选择关联项目");
      //   return false;
      // }
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
  created() {
    this.fetchProject();
    this.id && this.fetchEdit();
  }
};
</script>

<style>
</style>