<template>
  <div class="container">
    <ul class="top">
      <li>智能排序</li>
      <li>价格排序</li>
      <li>人气最高</li>
      <li>评价最高</li>
    </ul>
    <div class="cards">
      <Card v-for="item in listData" :key="item.itemId" :data="item" />
    </div>
  </div>
</template>
<script>
import Card from "@/components/product/card";
import api from "@/api/index";
export default {
  name: "find",
  data() {
    return {
      listData: null
    }
  },
  components: {
    Card
  },
  created() {
    api.getGoodsList.then(res => {
      this.listData = res.data.data;
    });
  }
};
</script>
<style lang="less" scoped>
.container {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  .top {
    padding: 15px 20px;
    height: 20px;
    line-height: 20px;
    li {
      display: inline-block;
      font-size: 14px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
  .cards{
    padding: 0 20px;
  }
}
</style>