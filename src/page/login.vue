<template>
  <div class="login">
    <!-- <div class="from">
      <div class="container">
        <el-row :gutter="20">
          <el-col :span="8" :offset="8">
            <el-row>
              <h1 class="h1">高企</h1>
            </el-row>
            <el-row>
              <el-input type="text" placeholder="请输入账号" v-model="account"></el-input>
            </el-row>
            <el-row>
              <el-input type="password" placeholder="请输入密码" v-model="pass"></el-input>
            </el-row>
            <el-row>
              <el-button
                type="primary"
                style="display: block;width: 100%;"
                @keyup.enter="submitForm()"
                @click="submitForm()"
              >登录</el-button>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>-->
    <div class="login-wrap">
      <div class="login-content">
        <div class="ms-login">
          <div>
            <div class="signin-signup-button">登录</div>
          </div>
          <div>
            <div class="sign-form">
              <div class="sign-form-item">
                <div class="el-input el-input--small">
                  <input type="text" placeholder="请输入手机号/用户名" v-model="account" class="el-input__inner"/>
                </div>
              </div>
              <div class="sign-form-item">
                <div class="el-input el-input--small">
                  <input type="password" placeholder="请输入密码" v-model="pass" class="el-input__inner"/>
                </div>
              </div>
            </div>
            <!-- <div class="verify-code">
              <input type="text" placeholder="请输入验证码" />
              <img id="verifycode" src="//back.egaoqi.com/sys/drawImage?timestamp=1563178836152" />
            </div>-->
            <div class="login-auto">
              <div class="login-assist">
                <span class="login-verify" @click="goRegister">注册</span>
                <!-- <span class="login-forget">忘记密码</span> -->
              </div>
            </div>
            <div class="signin-button" @click="submitForm">登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "", // 账号
      pass: "" // 密码
    };
  },
  created() {
    // var account = getStore("account");
    // this.account = account ? account : "";
  },
  methods: {
    // ...mapMutations(["RECORD_USERINFO"]),
    // 登录
    submitForm() {
      if (!this.account || !this.pass) return;
      // var self = this;
      // login({
      //   username: this.account,
      //   password: this.pass,
      //   device_type: "wxapp"
      // }).then(res => {
      //   this.$message({
      //     message: "登录成功!",
      //     type: "success"
      //   });
      //   setStore("account", this.account);
      //   this.RECORD_USERINFO(res);
      //   this.$router.push({ path: "/index" });
      // });
      this.$router.push({ path: "/manager" });
    },
    // 跳往注册页面
    goRegister() {
      this.$router.push({path:'/register'})
    }
  }
};
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  .login-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    background: no-repeat center;
    background-size: 100% 100%;
    background-image: url(../images/login.jpg);
    .login-content {
      padding-top: 129px;
      .ms-login {
        margin-left: auto;
        margin-right: auto;
        width: 332px;
        background-color: white;
        padding-bottom: 41px;
        position: relative;
        .signin-signup-button {
          display: inline-block;
          width: 332px;
          background: white;
          text-align: center;
          height: 45px;
          background-color: #8395b2;
          color: white;
          font-size: 17px;
          padding-top: 13px;
          box-sizing: border-box;
        }
        .sign-form {
          margin-top: 36px;
          margin-left: 24px;
          margin-right: 24px;
          .sign-form-item {
            margin-top: 15px;
          }
        }
        .login-auto {
          margin-left: 24px;
          margin-right: 24px;
          margin-top: 20px;
          position: relative;
          .login-assist {
            display: inline-block;
            position: absolute;
            right: 0px;
            top: 0px;
            span {
              font-size: 11px;
              color: #868686;
            }
          }
        }
        .signin-button {
          cursor: pointer;
          margin-left: 24px;
          margin-right: 24px;
          height: 28px;
          background-color: #22395c;
          color: white;
          text-align: center;
          margin-top: 41px;
          font-size: 14px;
          padding-top: 10px;
        }
      }
    }
  }
  .el-input--small {
    font-size: 13px;
  }
  .el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
  }
  .el-input--small .el-input__inner {
    height: 32px;
    line-height: 32px;
  }
  .login-verify {
    cursor: pointer;
  }
}
</style>
