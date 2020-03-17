<template>
  <div class="container">
    <div class="card" v-for="item in recommendData" :key="item.itemId">
      <img
        src="https://p0.meituan.net/bbia/2f078b6856caa09f59e620b945f1607d204439.jpg@237w_132h_1e_1c"
        alt
      />
      <div class="title">{{item.title}}</div>
      <div class="star">
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
        <i class="el-icon-star-on"></i>
      </div>
      <div class="position">{{item.areaName}}</div>
      <div class="price">
        ￥
        <span>{{item.avgPrice}}</span> 起
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommend",
  props: ["recommendData"],
  mounted() {
    console.log(this.recommendData);
  }
};
</script>
<style lang="less" scoped>
.container {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  padding: 0 20px;
  .card {
    margin-top: 20px;
    img {
      border-radius: 4px;
    }
    .title {
      font-size: 16px;
    }
    .star {
      i {
        font-size: 14px;
        color: rgb(231, 231, 3);
      }
    }
    .position{
      color: #999;
    }
    .price{
      color: red;
      font-size: 14px;
      span{
        font-size: 16px;
      }
    }
  }
}
</style>