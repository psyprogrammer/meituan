<template>
  <div class="container">
    <div class="header">
      <router-link class="logo" to="/">美团网</router-link>
    </div>
    <div class="main clearfix">
      <div class="left">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="right">
        <div class="error" :class="{active: error}">
          <span class="icon">-</span>
          <span class="msg">{{msg}}</span>
        </div>
        <div class="title">
          <span class="show">账号登录</span>
          <span class="change">手机动态码登录</span>
        </div>
        <el-input v-model="username" placeholder="手机号" @focus="handleFocus"></el-input>
        <el-input v-model="password" type="password" placeholder="密码" @focus="handleFocus"></el-input>
        <div class="forget">
          <span>忘记密码?</span>
        </div>
        <el-button type="primary" @click="submit">登录</el-button>
        <div class="register">
          <span>还没有账号？</span>
          <router-link to="/register">立即注册</router-link>
        </div>
        <div class="other">
          <p>用合作网站账号登录</p>
          <div>
            <span class="qq"></span>
            <span class="weibo"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
import api from "@/api/index";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      msg: "",
      error: false
    };
  },
  methods: {
    submit() {
      if (!this.username) {
        this.msg = "请输入手机号";
        this.error = true;
      } else if (!this.password) {
        this.msg = "请输入密码";
        this.error = true;
      } else {
        api
          .login({
            userName: this.username,
            password: this.password
          })
          .then(res => {
            const data = res.data;
            if (data.status == "success") {
              console.log("登录成功");
              this.$store.dispatch("showUserName", this.username);
              this.$router.push('/')
            }
            alert(data.msg);
          });
      }
    },
    handleFocus() {
      this.error = false;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 990px;
  margin: 0 auto;
  .header {
    padding-top: 50px;
    .logo {
      display: inline-block;
      width: 82px;
      height: 0px;
      padding-top: 54px;
      overflow: hidden;
      background-position: -188px -808px;
      background-repeat: no-repeat;
      background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
    }
  }
  .main {
    width: 100%;
    margin-top: 20px;
    .left {
      float: left;
      width: 50%;
    }
    .right {
      float: right;
      width: 40%;
      font-size: 14px;
      box-sizing: border-box;
      padding-right: 50px;
      .error {
        visibility: hidden;
        border-radius: 4px;
        border: 1px solid #fab765;
        background: #fff6db;
        padding: 10px;
        height: 20px;
        &.active {
          visibility: visible;
        }
        .icon {
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          font-size: 20px;
          font-weight: 900;
          background-color: #fe8c00;
          border-radius: 50%;
          text-align: center;
          color: #fff;
          vertical-align: -3px;
        }
        .msg {
          margin-left: 10px;
          font-size: 12px;
          color: #666;
        }
      }
      > * {
        margin-bottom: 10px;
      }
      .title {
        overflow: hidden;
        .show {
          float: left;
        }
        .change {
          float: right;
        }
      }
      .forget {
        overflow: hidden;
        span {
          float: right;
          color: #fe8c00;
        }
      }
      .el-button {
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        width: 100%;
        font-weight: 900;
        border-color: #ffd000;
        color: #000;
      }
      .register {
        font-size: 15px;
        a {
          color: #fe8c00;
        }
      }
      .other {
        margin-top: 30px;
        border-top: 1px solid rgb(192, 192, 192);
        p {
          width: 150px;
          margin: 0 auto;
          margin-top: -10px;
          padding: 0 10px;
          position: relative;
          z-index: 99;
          background-color: #f8f8f8;
          text-align: center;
        }
        div {
          width: 100%;
          height: 20px;
          .qq,
          .weibo {
            background-image: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png);
            width: 18px;
            height: 18px;
            display: inline-block;
            cursor: pointer;
          }
          .qq {
            background-position: -1250px -491px;
            margin-top: 20px;
            margin-left: 80px;
          }
          .weibo {
            background-position: -1250px -599px;
            margin-left: 20px;
          }
        }
      }
    }
  }
  .footer {
  }
}
</style>