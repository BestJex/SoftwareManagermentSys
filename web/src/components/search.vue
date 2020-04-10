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
