/* eslint-disable no-console */
<template>
  <div class="Mc">
    <h1 class="title">创建标签:</h1>
    <el-form
      :rules="rules"
      :model="model"
      ref="model"
      label-width="120px"
      @submit.native.prevent="save('model')"
      name="Createtag"
    >
      <el-form-item label="项目名称" prop="tagName">
        <el-input class="tagName" maxlength="10" v-model="model.tagName"></el-input>
      </el-form-item>
      <el-form-item label="项目简介" prop="tagFeatures">
        <el-input class="tagFeatures" v-model="model.tagFeatures"></el-input>
      </el-form-item>
      <el-form-item style="margin-top:1rem">
        <el-button class="sendtagItem" type="primary" native-type="subumit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { restgetOne, restUpdata, restPostData } from "../../Api/api";
export default {
  name: "createtag",
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      rules: {
        tagName: [
          { required: true, message: "请输入标签名称", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ],
        tagFeatures: [
          { required: true, message: "请输入标签简介", trigger: "blur" },
          { min: 1, max: 15, message: "长度在 1 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    async fetchItem() {
      const res = await restgetOne("tag", this.id);
      this.model = res.data;
    },
    async save(formName) {
      await this.$refs[formName].validate(); //校验表单上是否有错误
      if (this.id) {
        await restUpdata("tag", this.id, this.model);
      } else {
        await restPostData("tag", this.model);
        this.$notify({
          title: "成功",
          type: "success",
          message: "添加项目成功"
        });
      }
      this.$router.push("/tag/list");
    }
  },
  created() {
    this.id && this.fetchItem();
  }
};
</script>

<style>
</style>