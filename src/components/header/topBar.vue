<template>
  <el-row>
    <el-col :span="8" class="left">
      <ul>
        <li class="pos">
          <div>
            <span class="el-icon-coordinate city">{{city}}</span>
            <router-link to="/city" class="change">切换城市</router-link>
          </div>
          <dl>
            [
            <dd v-for="(item,index) in nearCity" :key="index">{{item.name}}</dd>
            ]
          </dl>
        </li>

        <li class="login" v-if="!userName">
          <router-link to="/login" class="login">立即登录</router-link>
          <router-link to="/register">注册</router-link>
        </li>
        <li class="login" v-else>
          <span @click="loginOut">退出登录</span>
        </li>
      </ul>
    </el-col>
    <el-col :span="10" class="right" :offset="6">
      <ul class="nav">
        <li class="nav-first">
          <router-link to="/">我的美团</router-link>
          <ul class="my">
            <li>
              <router-link to="/">我的美团</router-link>
            </li>
            <li>
              <router-link to="/">我的订单</router-link>
            </li>
            <li>
              <router-link to="/">我的收藏</router-link>
            </li>
            <li>
              <router-link to="/">抵用券</router-link>
            </li>
            <li>
              <router-link to="/">账户设置</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/">手机APP</router-link>
        </li>
        <li>
          <router-link to="/">商家中心</router-link>
        </li>
        <li class="nav-rule"> 
          <router-link to="/">美团规则</router-link>
          <ul class="rule">
            <li>
              <router-link to="/">美团规则</router-link>
            </li>
            <li>
              <router-link to="/">规则中心</router-link>
            </li>
            <li>
              <router-link to="/">规则目录</router-link>
            </li>
            <li>
              <router-link to="/">规则评议院</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/">网站导航</router-link>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>

<script>
import api from '@/api/index'
export default {
  name: "TopBar",
  data() {
    return {
      nearCity: [],
    }
  },
  computed: {
    city(){
      return this.$store.state.city
    },
    userName(){
      return this.$store.state.userName
    }
  },
  created(){
    api.getCurPosition.then(res => {
      this.$store.dispatch('change', res.data.data.name);
      // console.log(res.data.data.nearCity)
      this.nearCity = res.data.data.nearCity;
    })
  },
  methods: {
    loginOut(){
      this.$store.dispatch('showUserName', '');
    }
  }
};
</script>

<style lang="less" scoped>
.hover() {
  padding: 0 20px;
  display: none;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  position: absolute;
  top: -1px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 99; //解决鼠标移出父容器ul.my消失
}
a:hover {
  color: #fe8c00;
}
// 左部
.left {
  ul {
    display: flex;
    li.pos {
      display: flex;
      margin-left: 10px;
      div {
        .city {
          margin-right: 5px;
        }
        .change {
          background: #f4f4f4;
          border: 1px solid #e5e5e5;
          border-radius: 2px;
          color: #666;
          margin: 0 4px;
          padding: 0 2px;
          &:hover {
            color: #fe8c00;
          }
        }
      }
      dl {
        display: flex;
        margin-left: 5px;
        dd {
          margin-left: 5px;
          cursor: pointer;
          &:hover {
            color: #fe8c00;
          }
        }
        dd:last-child {
          margin-right: 5px;
        }
      }
    }
    li.login {
      margin-left: 20px;
      a {
        margin-left: 10px;
        &.login {
          color: #fe8c00;
        }
      }
      span {
        cursor: pointer;
      }
    }
  }
}
// 右部
.right {
  ul.nav {
    display: flex;
    > li {
      padding: 0 22px;
      &.nav-first {
        position: relative;
        &:hover .my {
          display: block;
        }
        .my {
          .hover;
        }
      }
      &.nav-rule {
        position: relative;
        &:hover .rule {
          display: block;
        }
        .rule {
          text-align: center;
          .hover;
        }
      }
    }
  }
}
</style>