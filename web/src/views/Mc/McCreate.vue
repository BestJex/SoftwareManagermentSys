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
        <el-select
          value-key="model.relatedProject._id"
          v-model="model.relatedProject"
          multiple
          placeholder="请选择"
        >
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
        <el-row v-if="model.fileName">
          <el-link class="fileLink" v-bind:href="model.fileDir" target="_blank">{{model.fileName}}</el-link>
          <el-button size="mini" @click="removeFile" type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
        <div v-if="!model.fileName">
          <el-upload
            class="file-upload"
            :action="$http.defaults.baseURL + '/upload'"
            :on-success="afterSuccess"
            :before-upload="handleProgress"
            :data="fileData"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">格式不限，但是不超过100M</div>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item style="margin-top:1rem">
        <el-button type="primary" class="save" native-type="subumit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { restgetAll, restgetOne, restGetData } from "../../Api/api";
import { restUpdata, restPostData, deleteFile } from "../../Api/api";
export default {
  name: "McCreate",
  props: {
    id: {}
  },
  data() {
    return {
      model: { fileName: "" },
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
    async fetchProject() {
      const res = await restgetAll("project");
      this.projectList = res.data;
    },

    async fetchEdit() {
      const data = await restgetOne("mc", this.id);
      this.model = data.data;
    },

    async save(formName) {
      await this.$refs[formName].validate(); //校验表单上是否有错误
      let res;
      if (this.id) {
        this.model.upDateTime = new Date().toLocaleString(); //输入更新时间
        res = await restUpdata("mc", this.id, this.model);
      } else {
        res = await restPostData("mc", this.model);
      }
      this.$router.push("/mc/list");
      this.$notify({
        title: "成功",
        type: "success",
        message: "保存成功"
      });
    },

    afterSuccess(file) {
      //上传完成后把数据插入到model里
      this.model.fileDir = file.url;
      this.model.fileName = file.filename;
    },

    async handleProgress(file) {
      if (file.size > 100000000) {
        this.$confirm("文件大小不可以超过100M");
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
      if (this.id) {
        reId = this.model.relatedProject[0]._id; //因为编辑对象传过来的是一个对象
      }
      console.log(`reID`, reId);
      const getProjectName = await restgetOne("project", reId); //为了拼接文件名
      return (this.fileData.fileName = `Mc_${this.model.versionNumber}_${getProjectName.data.projectName}_${file.name}`);
    },

    removeFile() {
      return this.$confirm(`确定移除 ${this.model.fileName}？`)
        .then(async () => {
          const res = await deleteFile(this.model.fileName);
          this.model.fileName = "";
        })
        .catch(err => {
          console.log(`删除文件错误：`, err);
        });
    }
  },
  created() {
    this.id && this.fetchEdit();
    this.fetchProject();
  }
};
</script>

<style>
.fileLink {
  margin-right: 10px;
}
</style>