<template>
  <div>
    <el-card shadow="always" class="home box-card">
      <el-row>
        <el-col :span="8">
          <el-card shadow="hover" class="box-card user">
            <div>用户信息展示</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" class="box-card quicklyDownLoad">
            <topDownload></topDownload>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover" class="box-card hotTag">
            <search></search>
            <hotTag class="hotTagDiv"></hotTag>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-card shadow="hover" class="box-card echarts">
            <div>系统内数据统计</div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import hotTag from "../../components/hotTag";
import search from "@/components/search";
import topDownload from "@/components/topDownload";

export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    hotTag,
    search,
    topDownload,
  },
};
</script>

<style scoped>
.hotTagDiv {
  /*微调了间距，看起来更美观 */
  margin-top: 45px;
  /* border: 1px solid red; */
}

.home {
  height: 90vh;
  min-height: 520px;
  min-width: 758px;
}

.user {
  height: 37vh;
  margin-right: 10px;
}

.quicklyDownLoad {
  height: 37vh;
  margin-right: 10px;
}

.hotTag {
  height: 37vh;
}
.echarts {
  height: 46vh;
  margin-top: 10px;
}
</style>
