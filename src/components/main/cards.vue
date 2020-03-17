<template>
  <div class="cards-wrapper">
    <ul class="nav clearfix" @mouseover="over">
      <li class="title">有格调</li>
      <li
        class="item"
        :class="{active: item.name === type}"
        v-for="(item,index) in navList"
        :key="index"
        :data-type="item.name"
      >{{item.title}}</li>
    </ul>
    <ul class="cards clearfix">
      <li v-for="item in list[type]" :key="item.id" class="card">
        <el-card :body-style="{ padding: '0px' }">
          <router-link to="/s" target="_blank">
            <div class="img">
              <img :src="item.image" class="image" />
            </div>
            <div class="info">
              <div class="title">{{item.title}}</div>
              <div class="sub-title">{{item.subTitle}}</div>
              <div class="price-info">
                <span class="current-price-wrapper">
                  <span class="price-symbol numfont">¥</span>
                  <span class="current-price numfont">{{item.price}}</span>
                </span>
                <!-- <span class="old-price">门市价{{item.oldPrice}}</span> -->
                <span class="sold bottom-right-info">{{item.address}}</span>
              </div>
            </div>
          </router-link>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index'
export default {
  name: "cards",
  data() {
    return {
      navList: [
        {
          name: "all",
          title: "全部"
        },
        {
          name: "food",
          title: "约会聚餐"
        },
        {
          name: "spa",
          title: "丽人SPA"
        }
      ],
      list: {},
      type: "all"
    };
  },
  methods: {
    over(e) {
      const target = e.target;
      const type = target.dataset.type;

      if (target.className.includes("item")) {
        this.type = type;
      }
    }
  },
  created(){
    api.getHomeData.then(res => {
      this.list = res.data.data;
    })
  }
};
</script>
<style lang="less" scoped>
.cards-wrapper {
  margin-top: 40px;
  width: 100%;
  background-color: #fff;
  .nav {
    background-color: rgb(190, 164, 116);
    background-image: linear-gradient(
      to right,
      rgb(194, 176, 142) 3%,
      rgb(190, 164, 116) 100%
    );
    width: 100%;
    height: 44px;
    line-height: 44px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: #fff;
    li.title {
      float: left;
      font-size: 18px;
      margin-left: 13px;
      margin-right: 10px;
    }
    li.item {
      float: left;
      padding: 0 5px;
      position: relative;
      font-size: 14px;
      cursor: pointer;
      &:after {
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        content: " ";
        display: block;
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
        display: none;
      }
      &.active::after {
        display: block;
      }
    }
  }
  .cards {
    width: 100%;
    border: 1px solid rgb(221, 221, 221);
    border-top: none;
    box-sizing: border-box;
    padding: 10px 0;
    li.card {
      float: left;
      padding: 10px;
      width: 33.3%;
      height: 314px;
      padding: 5px 10px;
      box-sizing: border-box;
      .el-card {
        width: 100%;
        height: 100%;
        border: none;
        overflow: visible;
        background-color: transparent;
        box-sizing: border-box;
        img {
          max-width: 100%;
          width: 100%;
          height: 208px;
          margin-bottom: 11px;
        }

        .info {
          padding-left: 10px;
          .title {
            font-size: 16px;
            color: #222;
            height: 22px;
            line-height: 22px;
            margin-bottom: 8px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
          }
          .sub-title {
            font-size: 12px;
            color: #999;
            line-height: 18px;
            height: 18px;
            margin-bottom: 7px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .price-info {
            height: 27px;
            overflow: hidden;
            margin-bottom: 10px;
            .price-symbol {
              font-size: 14px;
              color: #be9e4d;
              font-weight: 500;
            }
            .current-price {
              font-size: 22px;
              color: #be9e4d;
              margin-right: 6px;
              letter-spacing: -0.8px;
              cursor: pointer;
            }
            .old-price {
              font-size: 12px;
              color: #999;
              text-decoration: line-through;
            }
            .sold {
              font-size: 12px;
              color: #999;
              float: right;
              margin-top: 10px;
            }
            .units {
              color: #be9e4d;
              cursor: pointer;
              font-size: 12px;
            }
          }
          .pos {
            font-size: 12px;

            span {
              height: 18px;
              line-height: 18px;
              text-align: center;
              border: 1px solid #d8d8d8;
              border-radius: 2px;
              margin-right: 10px;
              margin-bottom: 5px;
              padding: 0 3px;
            }
          }

          .price {
            height: 27px;
            overflow: hidden;
            margin-bottom: 10px;
            font-size: 14px;
            color: #be9e4d;
            font-weight: 500;

            em {
              font-size: 22px;
              color: #be9e4d;
              margin-right: 6px;
              letter-spacing: -0.8px;
              cursor: pointer;
              font-style: normal;
            }

            span {
              font-size: 12px;
              letter-spacing: -0.6px;
            }
          }
        }
      }
      &:hover {
        background: #f4f4f4;
        transition: background-color 0.5s;
        border-radius: 4px;
      }
    }
  }
}
</style>