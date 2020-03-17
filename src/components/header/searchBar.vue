<template>
  <div class="wrapper">
    <div class="img-wrapper">
      <div class="img">
        <router-link to="/">
          <img
            src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt="美团"
            width="126px"
            height="46px"
          />
        </router-link>
      </div>
    </div>
    <div class="input-wrapper">
      <el-input v-model="input" placeholder="搜索商家和地点" @focus="focus" @blur="blur"></el-input>
      <el-button type="primary" class="el-icon-search"></el-button>
      <dl class="hotSearch" v-if="isHotSearch">
        <dt>热门搜索</dt>
        <dd v-for="(item,index) in hotList" :key="index">
          <router-link :to="{name: 'product', params: {name: item}}">{{item}}</router-link>
        </dd>
      </dl>
      <dl class="searchWord" v-if="isSearchWord">
        <dd v-for="(item,index) in filteredList" :key="index">
          <router-link :to="{name: 'product', params: {name: item}}">{{item}}</router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import api from "@/api/index";
export default {
  name: "searchBar",
  data() {
    return {
      input: null,
      isFocus: false,
      hotList: [],
      searchList: []
    };
  },
  watch: {
    input: function(val) {
      if (val === "") {
        this.input = null;
      }
    }
  },
  computed: {
    isHotSearch() {
      return this.isFocus && !this.input;
    },
    isSearchWord() {
      return this.isFocus && this.filteredList[0];
    },
    filteredList() {
      let result = [];
      result = this.searchList.filter(item => {
        return item.includes(this.input);
      });
      return result;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 150);
    }
  },
  created() {
    api.getSearchHotWords.then(res => {
      this.hotList = res.data.data;
    });
    api.getSearchList.then(res => {
      this.searchList = res.data.data.list;
    });
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 1190px;
  margin: 0 auto;
  display: flex;
  position: relative;
  // 左侧LOGO
  .img-wrapper {
    padding: 28px 40px 40px 0;
  }
  // 中间搜索区
  .input-wrapper {
    width: 500px;
    height: 40px;
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translate(-50%);
    z-index: 10;
    // 搜索框
    .el-input {
      width: 85.45%;
      height: 100%;
      ::v-deep .el-input__inner {
        border-color: #C0C4CC;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;
        &:focus {
          border-color: #999;
        }
      }
    }
    // 按钮
    .el-button {
      width: 14.55%;
      height: 100%;
      outline: none;
      border: none;
      background-color: #ffc300;
      font-weight: bold;
      color: #000;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    // focus热门搜索框
    dl {
      position: absolute;
      left: 0;
      top: 41px;
      width: 85.45%;
      min-height: 80px;
      box-sizing: border-box;
      border: 1px solid #999;
      border-top: none;
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
      padding: 10px;
      background-color: #fff;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      dt {
        font-weight: bold;
      }
      dd {
        margin-top: 8px;
        margin-left: 3px;
      }
      &.searchWord {
        padding-top: 0;
        a {
          color: #000;
        }
      }
    }
  }
}
</style>