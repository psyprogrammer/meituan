<template>
  <div class="header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import TopBar from "./topBar";
import SearchBar from "./searchBar";
export default {
  name: "MyHeader",
  components: {
    TopBar,
    SearchBar
  }
};
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  // 顶栏的容器
  >.el-row:first-child{
    width: 1190px;
    margin: 0 auto;
    height: 40px;
    line-height: 40px;
  }
  // 搜索栏的容器
  >.el-row:nth-child(2){
    width: 100%;
    background-color: #fff;
    height: 100px;
    box-sizing: content-box;
    padding-bottom: 45px;
  }
}
</style>