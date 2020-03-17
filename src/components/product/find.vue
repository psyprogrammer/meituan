<template>
  <div class="container">
    <!-- <div class="subList">
      <div class="name">美食</div>
      <ul class="content">
        <li class="item"></li>
      </ul>
    </div> -->
    <div class="classify">
      <div class="left">
        <div class="title">分类</div>
        <div class="all">
          <div class="btn">全部</div>
        </div>
      </div>
      <ul class="list clearfix">
        <li v-for="(item,index) in data" :key="index">
          <div @mouseenter="showSubList(item.title)">
            <span>{{item.title}}</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </li>
      </ul>
    </div>
    <div class="area">
      <div class="left">
        <div class="title">区域</div>
        <div class="all">
          <div class="btn">全部</div>
        </div>
      </div>
      <ul class="list clearfix">
        <li v-for="(item,index) in areaList" :key="index">
          <div @mouseenter="showSubList(item.title)">
            <span>{{item.title}}</span>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "find",
  props: ["data"],
  data() {
    return {
      subList: [],
      areaList: [
        {
          title: "推荐商圈",
          type: "area",
          subList: [
            "万达广场",
            "天鹅湖",
            "万达广场",
            "白水坝",
            "国购广场",
            "宁国路",
            "皖河支路美食街",
            "天鹅湖",
            "银泰城",
            "三里庵",
            "芜湖路",
            "大铺头",
            "包河",
            "苑之心城",
            "宿州路",
            "摩尔广场",
            "财富广场"
          ]
        },
        {
          title: "崂山区",
          type: "laoshan",
          subList: [
            "万达广场",
            "天鹅湖",
            "万达广场",
            "白水坝",
            "国购广场",
            "宁国路",
            "皖河支路美食街",
            "天鹅湖",
            "银泰城",
            "三里庵",
            "芜湖路",
            "大铺头",
            "包河",
            "苑之心城",
            "宿州路",
            "摩尔广场",
            "财富广场"
          ]
        },
        {
          title: "城阳区",
          type: "chengyang",
          subList: [
            "万达广场",
            "天鹅湖",
            "万达广场",
            "白水坝",
            "国购广场",
            "宁国路",
            "皖河支路美食街",
            "天鹅湖",
            "银泰城",
            "三里庵",
            "芜湖路",
            "大铺头",
            "包河",
            "苑之心城",
            "宿州路",
            "摩尔广场",
            "财富广场"
          ]
        },
        {
          title: "即墨市",
          type: "jimo",
          subList: [
            "万达广场",
            "天鹅湖",
            "万达广场",
            "白水坝",
            "国购广场",
            "宁国路",
            "皖河支路美食街",
            "天鹅湖",
            "银泰城",
            "三里庵",
            "芜湖路",
            "大铺头",
            "包河",
            "苑之心城",
            "宿州路",
            "摩尔广场",
            "财富广场"
          ]
        },
        {
          title: "历下区",
          type: "laoshan",
          subList: [
            "万达广场",
            "天鹅湖",
            "万达广场",
            "白水坝",
            "国购广场",
            "宁国路",
            "皖河支路美食街",
            "天鹅湖",
            "银泰城",
            "三里庵",
            "芜湖路",
            "大铺头",
            "包河",
            "苑之心城",
            "宿州路",
            "摩尔广场",
            "财富广场"
          ]
        },
        {
          title: "朝阳区",
          type: "chengyang",
          subList: [
            "万达广场",
            "天鹅湖",
            "万达广场",
            "白水坝",
            "国购广场",
            "宁国路",
            "皖河支路美食街",
            "天鹅湖",
            "银泰城",
            "三里庵",
            "芜湖路",
            "大铺头",
            "包河",
            "苑之心城",
            "宿州路",
            "摩尔广场",
            "财富广场"
          ]
        },
        {
          title: "金门市",
          type: "jimo",
          subList: [
            "万达广场",
            "天鹅湖",
            "万达广场",
            "白水坝",
            "国购广场",
            "宁国路",
            "皖河支路美食街",
            "天鹅湖",
            "银泰城",
            "三里庵",
            "芜湖路",
            "大铺头",
            "包河",
            "苑之心城",
            "宿州路",
            "摩尔广场",
            "财富广场"
          ]
        },
        {
          title: "爱琴海",
          type: "huangdao",
          subList: [
            "万达广场",
            "天鹅湖",
            "万达广场",
            "白水坝",
            "国购广场",
            "宁国路",
            "皖河支路美食街",
            "天鹅湖",
            "银泰城",
            "三里庵",
            "芜湖路",
            "大铺头",
            "包河",
            "苑之心城",
            "宿州路",
            "摩尔广场",
            "财富广场"
          ]
        }
      ]
    };
  },
  methods: {
    showSubList(title){
      let result = this.areaList.filter(item => {
        return item.title === title;
      })[0];
      console.log(result)
      // this.subList = result.subList;
    },
    hide(){

    }
  }  
};
</script>
<style lang="less" scoped>
.container {
  // 最外层容器
  width: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid rgb(204, 204, 204);
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  .subList{
    display: none;
    position: relative;
    left: 0;
    top: 0;
  }
  .classify {
    display: flex;
    margin-bottom: 10px;
    .list {
      border-bottom: 1px solid rgb(206, 206, 206);
      padding-bottom: 10px;
    }
  }
  .area {
    display: flex;
  }
  .left {
    // 左部分
    width: 20%;
    height: 22px;
    .title {
      display: inline-block;
      width: 50%;
    }
    .all {
      display: inline-block;
      width: 50%;
      .btn {
        padding: 0 10px;
        width: 30px;
        border-radius: 100px;
        background: linear-gradient(to bottom right, #ffd000, #ffbd00);
        color: #222222;
        text-align: center;
      }
    }
  }
  .list {
    width: 80%;
    margin-bottom: 10px;
    // 右部分列表
    li {
      float: left;
      min-width: 100px;
      height: 28px;
      >div {
        padding: 0 10px;
        color: #666;
        display: inline-block;
        font-weight: normal;
      }
    }
  }
}
</style>