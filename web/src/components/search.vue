<template>
  <div class="search">
    <el-input
      class="searchInput"
      v-model="input"
      placeholder="请输入搜索内容"
    ></el-input>
    <el-button @click="search">搜索</el-button>
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

<style>
.searchInput {
  float: left;
  width: 60%;
}

.searchButton {
  float: left;
}
</style>
