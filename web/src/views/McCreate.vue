<template>
<div class="Mc">
  <h1>上传文件:</h1>
  <el-form ref="fileData" :model="fileData" label-width="120px" @submit.native.prevent="save">
    <el-form-item label="版本号">
      <el-input maxlength="10"  v-model="fileData.name"></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
    name:'createMC',
        data() {
      return {
        fileData: {
          name: '',
        }
      }
    }

}
</script>

<style>

</style>