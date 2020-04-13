<template>
  <div class="search">
    <el-input class="searchInput" v-model="input" placeholder="请输入版本号搜索"
      ><el-button
        slot="append"
        icon="el-icon-search"
        @click="search"
      ></el-button
    ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    search() {
      if (this.input == "") {
        //如果用户啥也没输，就输入一个空格 我再那边做了判断，如果是空格，就获取全部软件。
        this.input = " ";
        this.$router.push(`/softWare/search/${this.input}`);
      }
      this.$router.push(`/softWare/search/${this.input}`);
    },
  },
};
</script>

<style scoped>
.searchInput {
  border-radius: 5px;
  float: left;
  width: 100%;
}

.searchButton {
  float: left;
}
</style>
