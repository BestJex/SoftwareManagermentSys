/* eslint-disable no-console */
<template>
  <div class="Mc">
    <h1 class="title">创建项目:</h1>
    <el-form
      :model="model"
      ref="model"
      label-width="120px"
      @submit.native.prevent="save('model')"
      name="CreateProject"
    >
      <el-form-item label="项目名称" prop="projectName">
        <el-input class="projectName" maxlength="10" v-model="model.projectName"></el-input>
      </el-form-item>
      <el-form-item label="项目简介" prop="projectFeatures">
        <el-input class="projectFeatures" v-model="model.projectFeatures"></el-input>
      </el-form-item>
      <el-form-item style="margin-top:1rem">
        <el-button class="sendProjectItem" type="primary" native-type="subumit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "createProject",
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      rules: {
        projectName: [
          { required: true, message: "请输入项目名称", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        projectFeatures: [
          { required: true, message: "请输入项目简介", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async fetchItem() {
      const res = await this.$http.get(`/rest/project/${this.id}`);
      this.model = res.data;
    },
    async save(formName) {
      await this.$refs[formName].validate(); //校验表单上是否有错误
      if (this.id) {
        await this.$http.put(`rest/project/${this.id}`, this.model);
      } else {
        await this.$http.post("rest/project", this.model);
        this.$notify({
          title: "成功",
          type: "success",
          message: "添加项目成功"
        });
      }
      this.$router.push("/project/list");
    }
  },
  created() {
    this.id && this.fetchItem();
  }
};
</script>

<style>
</style>