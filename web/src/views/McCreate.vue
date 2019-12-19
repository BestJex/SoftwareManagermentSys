<template>
  <div class="Mc">
    <h1>上传文件:</h1>
    <el-form ref="model" :model="model" label-width="120px" @submit.native.prevent="save">
      <el-form-item label="版本号">
        <el-input maxlength="10" v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="关联项目">
        <el-select v-model="model.name" placeholder="请选择"></el-select>
      </el-form-item>
      <el-form-item label="版本">
        <el-upload>
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">大小不超过50m</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="版本特性">
        <vue-editor v-model="model.body"></vue-editor>
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
        name: "",
        body: ""
      }
    };
  },
  components: {
    VueEditor
  }
};
</script>

<style>
</style>