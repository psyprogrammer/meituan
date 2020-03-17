<template>
  <el-container>
    <el-header height="auto">
      <my-header />
    </el-header>

    <el-main>
      <router-view />
    </el-main>

    <el-footer>
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from "@/components/header/header";
import MyFooter from "@/components/footer/footer";
export default {
  name: "default",
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<style lang="less" scoped>
.el-header,.el-main,.el-footer{
  width: 1190px;
  margin: 0 auto;
  //去掉el-样式的默认样式
  padding: 0;
  overflow: visible;
}
.el-header{
  width: 100%;
}
</style>