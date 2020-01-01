/* eslint-disable no-console */
<template>
  <div name="createMC" class="Mc">
    <h1 name="title">{{id?'编辑':'上传'}}MC:</h1>
    <el-form
      ref="model"
      :rules="rules"
      :model="model"
      label-width="120px"
      @submit.native.prevent="save('model')"
      class="sendItem"
    >
      <el-form-item label="版本号" prop="versionNumber">
        <el-input id="versionNum" maxlength="16" v-model="model.versionNumber"></el-input>
      </el-form-item>
      <el-form-item label="关联项目" prop="relatedProject">
        <el-select v-model="model.relatedProject" multiple placeholder="请选择">
          <el-option
            v-for="item in projectList"
            :key="item._id"
            :label="item.projectName"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="版本特性" prop="versionFeatures">
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
        <el-button type="primary" class="save" native-type="subumit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "McCreate",
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
      fileData: { fileName: "" },
      rules: {
        versionNumber: [
          { required: true, message: "请输入版本号", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        relatedProject: [
          {
            type: "array",
            required: true,
            message: "请选择关联项目",
            trigger: "blur"
          }
        ],
        versionFeatures: [
          { required: true, message: "请输入版本特性", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    VueEditor
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          alert("error submit!!");
          return false;
        }
      });
    },
    async fetchProject() {
      const res = await this.$http.get("rest/project");
      this.projectList = res.data;
      console.log(this.projectList);
    },
    async fetchEdit() {
      const data = await this.$http.get(`rest/mc/${this.id}`);
      this.model = data.data;
    },
    async save(formName) {
      let re = await this.$refs[formName].validate();
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/mc/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/mc", this.model);
      }
      this.$router.push("/mc/list");
      this.$notify({
        title: "成功",
        type: "success",
        message: "添加版本成功"
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
    async handleProgress(file) {
      if (file.size > 10000000) {
        this.$confirm("文件大小不可以超过10M");
        return false;
      }
      if (this.model.versionNumber == "") {
        this.$confirm("必须输入版本号");
        return false;
      }
      if (this.model.relatedProject == "") {
        this.$confirm("必须选择关联项目");
        return false;
      }
      let reId = this.model.relatedProject[0];
      const res = await this.$http.get(`/rest/project/${reId}`);
      return (this.fileData.fileName = `Mc_${this.model.versionNumber}_${res.data.projectName}_${file.name}`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  },
  created() {
    this.id && this.fetchEdit();
    this.fetchProject();
  }
};
</script>

<style>
</style>