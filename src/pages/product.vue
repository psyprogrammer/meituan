<template>
  <div class="product">
    <el-row>
      <Crumb />
    </el-row>
    <el-row :gutter="10">
      <el-col :span="18">
        <el-row>
          <Find :data="classifyList" />
        </el-row>
        <el-row>
          <ProductList />
        </el-row>
      </el-col>
      <el-col :span="6">
        <Recommend :recommendData="recommendData" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Crumb from "@/components/product/crumb";
import Find from "@/components/product/find";
import ProductList from "@/components/product/productList";
import Recommend from "@/components/product/recommend";
import api from "@/api/index";
export default {
  name: "product",
  data() {
    return {
      classifyList: null,
      recommendData: null,
    };
  },
  components: {
    Crumb,
    Find,
    ProductList,
    Recommend
  },
  created() {

    api.getRecommend.then(res => {
      this.recommendData = res.data.data;
    });
    api.getClassify.then(res => {
      this.classifyList = res.data.data;
    });
  }
};
</script>
<style lang="less" scoped>
.product {
  > .el-row:first-child {
    margin: 10px 0;
  }
  .el-row:last-child {
    > .el-col:first-child {
      > .el-row:last-child {
        margin: 10px 0;
      }
    }
  }
}
</style>