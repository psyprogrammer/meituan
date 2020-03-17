<template>
  <div class="container">
    <div class="header">
      <router-link to="/" class="logo">美团</router-link>
      <div class="right">
        <span>已有美团账号？</span>
        <div class="btn" @click="handleLogin">登录</div>
      </div>
    </div>
    <div class="main">
      <el-form
        :model="form"
        label-width="120px"
        :rules="rules"
        :hide-required-asterisk="true"
        ref="registerForm"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="短信验证码" prop="msgCode">
          <el-input v-model="form.msgCode"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input v-model="form.password" type="password" @input="input"></el-input>
          <div class="pw-strength">
            <span :class="{weak: isWeak, middle: isMiddle, strength: isStrength}">弱</span>
            <span :class="{middle: isMiddle, strength: isStrength}">中</span>
            <span :class="{strength: isStrength}">强</span>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input v-model="form.rePassword" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('registerForm')">同意以下协议并注册</el-button>
        </el-form-item>
        <el-form-item>
          <div class="contract">
            <a href="#">《美团点评用户服务协议》</a>
            <a href="#">《美团点评隐私政策》</a>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import api from "@/api/index";
export default {
  name: "register",
  data() {
    // 创建密码的校验规则
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        // 没输密码
        callback(new Error("请输入密码"));
      } else {
        // 输了密码
        if (value.length > 3 && value.length < 17) {
          // 密码必须是4-16位的字母数字下划线组合
          var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)(?![0-9a-zA-Z]+$)[0-9A-Za-z_]{6,16}$/;
          reg.test(value) == true
            ? callback()
            : callback(new Error("密码必须是4-16位的字母数字下划线组合"));
        } else {
          callback(new Error("密码必须是4-16位"));
        }

        if (this.rules.rePassword !== "") {
          // 重新执行确认密码的校验规则
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    // 确认密码的校验规则
    var validateRePassword = (rule, value, callback) => {
      if (value === "") {
        // 没输密码
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        phone: "",
        msgCode: "",
        password: "",
        rePassword: ""
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "请输入正确的11位手机号码",
            trigger: "blur"
          }
        ],
        msgCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        rePassword: [{ validator: validateRePassword, trigger: "change" }]
      },
      isWeak: false,
      isMiddle: false,
      isStrength: false
    };
  },
  methods: {
    handleLogin(){
      this.$router.push('/login')
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var { msgCode: userName, password, rePassword } = this.form;
          console.log(userName, password, rePassword);
          api
            .register({
              userName,
              password,
              rePassword
            })
            .then(res => {
              const data = res.data;
              if (data.status == "success") {
                this.$store.dispatch("showUserName", data.data);
                this.$router.push("/");
              }
              alert(data.msg);
            });
        } else {
          alert("表单填写有误");
          return false;
        }
      });
    },
    input(value) {
      this.isWeak = false;
      this.isMiddle = false;
      this.isStrength = false;
      // 验证输的密码强度
      var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)(?![0-9a-zA-Z]+$)[0-9A-Za-z_]{6,16}$/;
      if (value == "") {
        this.isWeak = false;
        this.isMiddle = false;
        this.isStrength = false;
      } else {
        if (value.length < 6) {
          this.isWeak = true;
        } else if (value.length > 14) {
          this.isStrength = true;
        } else {
          if (reg.test(value)) {
            this.isStrength = true;
          } else {
            this.isMiddle = true;
          }
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 990px;
  margin: 0 auto;
  .header {
    padding-top: 20px;
    border-bottom: 2px solid rgb(168, 168, 168);
    .logo {
      display: inline-block;
      width: 128px;
      height: 0px;
      padding-top: 50px;
      overflow: hidden;
      background: url(https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/logo.6a89007.png)
        no-repeat;
      background-size: contain;
    }
    .right {
      float: right;
      overflow: hidden;
      position: relative;
      bottom: -20px;
      span {
        font-size: 16px;
      }
      .btn {
        margin-left: 10px;
        display: inline-block;
        width: 50px;
        height: 25px;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        color: #000;
        text-align: center;
        line-height: 25px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
  .main {
    width: 380px;
    margin-top: 40px;
    .pw-strength {
      margin-top: 10px;
      width: 100%;
      height: 25px;
      background-color: red;
      line-height: 25px;
      span {
        display: inline-block;
        background-color: rgb(233, 233, 233);
        width: 33.33%;
        height: 25px;
        text-align: center;
        font-size: 13px;
        color: #fff;
        border-right: 2px solid #fff;
        box-sizing: border-box;
        transition: background-color 0.5s linear;
        &.weak {
          background-color: red;
        }
        &.middle {
          background-color: orange;
        }
        &.strength {
          background-color: green;
        }
      }
    }
    .el-button {
      background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
      color: #000;
      font-weight: 900;
      box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
      background-size: 100%;
      border-color: #fff;
    }
    .contract{
      width: 300px;
      a{
        font-size: 13px;
        color: #FE8C00;
      }
    }
  }
}
</style>