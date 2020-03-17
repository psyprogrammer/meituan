<template>
  <div class="wrapper">
    <img :src="data.image" alt="">
    <div class="desc">
      <div class="title">{{data.title}}</div>
      <div class="evaluate">
        <span class="star">
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
          <i class="el-icon-star-on"></i>
        </span>
        <span class="score">{{data.score}}分</span>
        <span class="commentNum">{{data.commentNum}}人评价</span>
      </div>
      <div class="position">{{data.address}}</div>
      <div class="price">￥{{data.avgPrice}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: ['data']
}
</script>
<style lang="less" scoped>
.wrapper{
  display: flex;
  border-top: 1px solid rgb(202, 202, 202);
  padding: 20px 0;
  img{
    width: 220px;
    height: 125px;
  }
  .desc{
    margin-left: 20px;
    >*{
      margin-bottom: 10px;
    }
    .title{
      font-size: 16px;
      cursor: pointer;
    }
    .evaluate{
      .star{
        margin-right: 20px;
        i{
          font-size: 14px;
          color: rgb(221, 221, 1)
        }
      }
      .score{
        margin-right: 5px;
      }
      .commentNum{
        color: red
      }
    }

  }
}
</style>