<template>
  <div class="left">
      <h1 class="title">全部分类</h1>
      <ul class="menu">
        <li class="menu-li" v-for="item in menuList" :key="item.type">
          <span class="el-icon-platform-eleme icon"></span>
          <router-link to="/">{{item.name}}</router-link>
          <span class="el-icon-arrow-right"></span>
          <div class="detail" v-for="only in item.items" :key="only.title">
            <div class="detail-content">
              <div class="detail-top clearfix">
                <h2>{{only.title}}</h2>
                <div class="more">
                  <router-link to="/">更多</router-link>
                  <span class="el-icon-arrow-right"></span>
                </div>
              </div>
              <ul class="detail-main">
                <li class="detail-item" v-for="(item, index) in only.items" :key="index">
                  <router-link to="/">{{item}}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
import api from '@/api/index.js';
export default {
  name: 'myMenu',
  data(){
    return {
      menuList: []
    }
  },
  created() {
    api.getMenuData.then(res => {
      this.menuList = res.data.data;
    })
  }
}
</script>
<style lang="less" scoped>
.left {
    width: 230px;
    background-color: #fff;
    margin-top: -50px;
    border: 1px solid rgb(228, 228, 228);
    box-sizing: border-box;
    position: relative;
    .title {
      padding: 15px 0 15px 10px;
    }
    .menu {
      padding-top: 10px;
      .menu-li {
        font-size: 13px;
        line-height: 22px;
        height: 22px;
        color: #646464;
        padding: 2px 12px;
        &:hover {
          background-color: rgb(241, 190, 131);
          > a,
          > .el-icon-arrow-right {
            color: #000;
            font-weight: bold;
          }
          > .detail{
            display: block;
          }
        }
        .icon {
          margin-right: 5px;
        }
        .el-icon-arrow-right {
          float: right;
          line-height: 22px;
          color: rgb(199, 196, 196);
        }
        .detail {
          display: none;
          z-index: 10;
          position: absolute;
          left: 229px;
          top: 64px;
          width: 400px;
          height: 416px;
          background-color: #fff;
          .detail-content {
            margin-top: 24px;
            padding: 0 20px;
            .detail-top {
              border-bottom: 1px solid #999;
              width: 100%;
              box-sizing: border-box;
              padding-bottom: 10px;
              h2 {
                display: inline-block;
              }
              .more {
                float: right;
                line-height: 24px;
              }
            }
            .detail-main {
              margin-top: 10px;
              display: flex;
              flex-wrap: wrap;

              .detail-item {
                margin-right: 20px;
                margin-bottom: 10px;
                > a:hover {
                  color: #fe8c00;
                }
              }
            }
          }
        }
      }
    }
  }
</style>