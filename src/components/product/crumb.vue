<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">{{city}}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{city}}{{name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  name: 'crumb',
  computed: {
    city(){
      return this.$store.state.city
    },
    name(){
      return this.$route.params.name
    }
  }
};
</script>
<style lang="less" scoped>
</style>