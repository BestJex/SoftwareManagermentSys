<template>
  <div>
    <h1>Excel2XML</h1>
    <el-tabs type="border-card">
      <el-tab-pane label="Excel2xml">
        <div class="downloadTemplate">
          <el-link v-bind:href="url" type="primary">点击下载模板</el-link>
        </div>
        <div class="upload">
          <p>点击上传excel文件</p>
          <el-row v-if="model.filename">
            <el-link class="fileLink" v-bind:href="model.fileDir" target="_blank">{{model.filename}}</el-link>
            <el-button size="mini" @click="removeFile" type="danger" icon="el-icon-delete" circle></el-button>
          </el-row>
          <div v-if="!model.filename">
            <el-upload
              class="file-upload"
              :action="$http.defaults.baseURL + '/excel2xml'"
              :on-success="afterSuccess"
              :before-upload="handleProgress"
              :data="fileData"
              :auto-upload="true"
              accept=".xls, .xlsx"
              :on-error="errSuccess"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过xxxkb</div>
            </el-upload>
          </div>
        </div>
        <div class="donwloadXml" v-if="model.XMLPath">
          <el-link v-bind:href="model.XMLPath.xmlFilePath" type="primary">右键另存为下载XML</el-link>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getTemplate, deleteFile } from "../../Api/api";
export default {
  name: "excel2xml",
  data() {
    return {
      model: { fileName: "" },
      url: "test",
      fileData: { fileName: "" }
    };
  },
  methods: {
    afterSuccess(file) {
      this.model = file;
      console.log(this.model);
    },
    async handleProgress(file) {
      const testmsg = file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "xls";
      const extension1 = testmsg === "xlsx";
      if (!extension && !extension1) {
        this.$message({
          message: "上传文件只能是 xls、xlsx格式!",
          type: "warning"
        });
        return Promise.reject();
      }
      this.fileData.fileName = file.name; //把文件名赋值到fileData中，前端取文件名
    },

    async fetchTemplateURL() {
      let res = await getTemplate(); //获取导入模板
      this.url = res.config.url;
    },
    errSuccess(err, file) {
      this.$message({
        type: "error",
        message: err
      });
    },

    removeFile() {
      console.log(this.model);
      return this.$confirm(`确定移除 ${this.model.filename}？`)
        .then(async () => {
          const res = await deleteFile(this.model.filename);
          this.model.filename = "";
        })
        .catch(err => {
          console.log(`删除文件错误：`, err);
        });
    }
  },
  created() {
    this.fetchTemplateURL();
  }
};
</script>

<style>
.downloadTemplate {
  margin-left: 25px;
  /* border: 1px solid red; */
  float: right;
}

.upload {
  margin-top: 25px;
  margin-left: 25px;
  /* border: 1px solid red; */
}

.donwloadXml {
  margin-top: 25px;
  margin-left: 25px;
  float: right;
  /* border: 1px solid red; */
}
</style>