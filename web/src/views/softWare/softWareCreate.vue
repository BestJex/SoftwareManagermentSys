/* eslint-disable no-console */
<template>
  <div name="createSoftWare" class="softWare">
    <h1 name="title">{{ id ? "编辑" : "上传" }}软件:</h1>
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
      <el-form-item label="版本类型" prop="versionType">
        <el-select value-key="model.versionType" v-model="model.versionType" placeholder="请选择">
          <el-option v-for="item in versionType" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="关联项目" prop="relatedTag">
        <el-select
          value-key="model.relatedTag._id"
          v-model="model.relatedTag"
          multiple
          placeholder="请选择"
        >
          <el-option
            v-for="item in tagList"
            :key="item._id"
            :label="item.tagName"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="版本特性" prop="versionFeatures">
        <vue-editor v-model="model.versionFeatures"></vue-editor>
      </el-form-item>
      <el-form-item label="上传软件">
        <el-row v-if="model.fileName">
          <el-link class="fileLink" v-bind:href="model.fileDir" target="_blank">{{ model.fileName }}</el-link>
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
      <el-form-item style="margin-top: 1rem;">
        <el-button type="primary" class="save" native-type="subumit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { restgetAll, restgetOne } from "../../Api/api";
import { restUpdata, restPostData, deleteFile } from "../../Api/api";
export default {
  name: "SoftWareCreate",
  props: {
    id: {}
  },
  data() {
    return {
      model: { fileName: "" },
      versionType: ["WebMc", "Mc", "An", "Ac"],
      tagList: [],
      fileData: { fileName: "" },
      rules: {
        versionNumber: [
          { required: true, message: "请输入版本号", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur"
          }
        ],
        relatedTag: [
          {
            type: "array",
            required: true,
            message: "请选择关联项目",
            trigger: "blur"
          }
        ],
        versionType: [
          {
            type: "string",
            required: true,
            message: "请选择版本类型",
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
    async fetchTag() {
      const res = await restgetAll("tag");
      this.tagList = res.data;
    },

    async fetchEdit() {
      const data = await restgetOne("softWare", this.id);
      this.model = data.data;
      this.processTag();
    },

    //后端传过来的数据包含了relatedTag的整条数据，这导致el-option组件展示错误（只接收arr，传过来的是arr+obj），所以用下面的函数处理数据，挑出id然后重新push回去。
    processTag() {
      console.log(this.model.relatedTag);
      let tagArr = [];
      for (let i = 0; i < this.model.relatedTag.length; i++) {
        tagArr.push(this.model.relatedTag[i]._id);
      }
      this.model.relatedTag = tagArr;
    },

    async save(formName) {
      await this.$refs[formName].validate(); //校验表单上是否有错误
      let res;
      if (this.id) {
        this.model.upDateTime = new Date().toLocaleString(); //输入更新时间
        res = await restUpdata("softWare", this.id, this.model);
      } else {
        res = await restPostData("softWare", this.model);
      }
      this.$router.push("/softWare/list");
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
      if (this.model.relatedTag == "") {
        this.$confirm("必须选择关联项目");
        return false;
      }
      let reId = this.model.relatedTag[0];
      if (this.id) {
        reId = this.model.relatedTag[0]._id; //因为编辑对象传过来的是一个对象
      }
      console.log(`reID`, reId);
      const getTagName = await restgetOne("tag", reId); //为了拼接文件名
      return (this.fileData.fileName = `${this.model.versionType}_${this.model.versionNumber}_${getTagName.data.TagName}_${file.name}`);
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
    this.fetchTag();
  }
};
</script>

<style>
.fileLink {
  margin-right: 10px;
}
.help {
  margin: 5px;
  color: #cccccc;
}
</style>
