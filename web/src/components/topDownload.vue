<template>
  <div class="topDownload">
    <el-row>
      <el-col
        class="hotEl"
        v-for="item in model.slice(0, 10)"
        :key="item._id"
        :span="24"
      >
        <el-link
          icon="el-icon-download"
          :underline="false"
          @click.native="count(item.parent._id)"
          v-bind:href="item.parent.fileDir"
          target="_blank"
          >{{ item.parent.versionNumber }}</el-link
        ><el-link class="downloads" :underline="false" target="_blank">{{
          item.downloads
        }}</el-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { restgetAll, downloadInfo } from "../Api/api";
export default {
  name: "topDownload",
  data() {
    return {
      model: [],
    };
  },
  methods: {
    async getAllDownloadInfo() {
      let res = await restgetAll("softWareInfo");
      this.model = res.data;
      let newData = this.arrayMax(this.model);

      console.log(newData);
    },
    async count(id) {
      try {
        await downloadInfo(id);
        this.getAllDownloadInfo();
      } catch (error) {
        console.log(error);
      }
    },

    arrayMax(arr) {
      var temp = null;
      for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (arr[i].downloads < arr[j].downloads) {
            //如果前面的数据比后面的大就交换  两个数交换一定要声明一个变量,用来存储其中要被赋值的那个
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
          }
        }
      }
      return arr;
    },
  },
  created() {
    this.getAllDownloadInfo();
  },
};
</script>

<style>
.hotEl {
  margin: 3px 0 0 0px;
  /* border: 1px solid red; */
}
.downloads {
  float: right;
}
</style>
