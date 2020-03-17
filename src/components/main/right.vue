<template>
  <div class="right">
    <!-- 右上部导航栏 -->
    <ul class="nav clearfix">
      <li v-for="(item,index) in centerNavList" :key="index" class="nav-li">
        <router-link to="/">{{item}}</router-link>
      </li>
    </ul>
    <!-- 右中banner -->
    <div class="banner-center">
      <!-- 轮播图 -->
      <my-slider class="slider banner-item" />
      <!-- 音乐 -->
      <router-link to="/s" class="img-music banner-item" />
      <!-- 登录注册区 -->
      <div class="function banner-item">
        <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
        <p>Hi！你好</p>
        <div v-if="!userName">
          <router-link to="/register" class="btn">注册</router-link>
          <router-link to="/login" class="btn">立即登录</router-link>
        </div>
        <p v-else>{{userName}}</p>
      </div>
    </div>
    <!-- 右下banner -->
    <div class="banner-bottom">
      <!-- 酒店 -->
      <router-link to="/s" class="img-hotel banner-item" />
      <!-- 知识 -->
      <router-link to="/s" class="img-learn banner-item" />
      <!-- 合作 -->
      <router-link to="/s" class="img-friend banner-item" />
      <div class="contact banner-item">
        <div class="qrcode-box">
          <img
            src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP"
          />
        </div>
        <p class="app-name">美团APP手机版</p>
        <p class="sl">
          <span class="red">1元起</span>
          <span class="gary">吃喝玩乐</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import MySlider from "@/components/main/slider";
export default {
  name: "right",
  data() {
    return {
      centerNavList: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿／公寓",
        "商家入驻",
        "美团公益"
      ]
    };
  },
  computed: {
    userName(){
      return this.$store.state.userName
    }
  },
  components: {
    MySlider
  }
};
</script>
<style lang="less" scoped>
.right {
  margin-left: 10px;
  .nav {
    margin-top: -30px;
    padding-bottom: 30px;
    position: relative;
    .nav-li {
      float: left;
      margin: 0 20px;
      font-weight: 700;
      font-size: 16px;
      > a {
        color: #222;
      }
    }
  }
  .banner-item {
    margin-right: 10px;
  }
  .banner-center {
    display: flex;
    .img-music {
      width: 150px;
      height: 240px;
      background-image: url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
      background-size: cover;
      background-position: 50% 50%;
    }
    .function {
      width: 228px;
      height: 240px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(228, 223, 223);
      box-sizing: border-box;
      padding-top: 20px;
      background-color: #fff;
      img {
        width: 47px;
        height: 47px;
        border: 4px solid rgb(228, 223, 223);
        border-radius: 50%;
      }
      p {
        margin: 10px 0;
        font-size: 16px;
        font-weight: 500;
      }
      .btn {
        width: 118px;
        text-align: center;
        margin: 0 auto 15px auto;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 40px;
        font-size: 14px;
        color: #333;
        transition: background-color 0.5s;
        display: block;
        line-height: 38px;
        &:hover {
          background-color: #f6f6f6;
        }
      }
    }
  }
  .banner-bottom {
    display: flex;
    margin-top: 10px;
    .img-hotel {
      width: 230px;
      height: 165px;
      background-image: url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png);
      background-size: cover;
    }
    .img-learn {
      width: 230px;
      height: 165px;
      background-image: url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg);
      background-size: cover;
    }
    .img-friend {
      width: 150px;
      height: 165px;
      background-image: url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
      background-size: cover;
    }
    .contact {
      width: 228px;
      height: 165px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #e5e5e5;
      background-color: #fff;
      img {
        width: 95px;
        height: 95px;
      }
      .app-name {
        font-size: 16px;
        font-weight: 500;
      }
      .sl {
        .red {
          color: red;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>