<template>
  <div class="register">
    <!-- 头部 -->
    <div class="head_box">
      <div class="login_head">
        <div class="login_logo">
          <a>
            <img src="../images/zh_logo3.png" width="188" height="72" />&nbsp;—&nbsp;高新技术企业数据管理平台
          </a>
          <label>用户注册</label>
        </div>
      </div>
    </div>
    <!-- 注册 -->
    <div class="box_gb">
      <div class="w">
        <form>
          <div class="cd_edit zh_register">
            <dl>
              <dt>
                <i>*</i>企业名称：
              </dt>
              <dd>
                <input
                  class="srk w290 required len50"
                  name="companyName"
                  type="text"
                  maxlength="51"
                  maxsize="51"
                />
                <label>请填写企业名称</label>
              </dd>
              <div class="clear"></div>
            </dl>

            <dl>
              <dt>
                <i>*</i>用户登录密码：
              </dt>
              <dd>
                <input
                  class="srk w290 required"
                  name="password"
                  type="password"
                  password="true"
                  maxsize="16"
                  maxlength="16"
                />
                <label>8-16位必须由英文字母、数字或下划线、特殊符号组成，英文字母区分大小写</label>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl>
              <dt>
                <i>*</i>确认密码：
              </dt>
              <dd>
                <input
                  class="srk w290 checkPassword required"
                  name="checkPassword"
                  type="password"
                  maxsize="16"
                  maxlength="16"
                />
                <label>请再次输入密码</label>
              </dd>
              <div class="clear"></div>
            </dl>

            <dl>
              <dt>
                <i>*</i>手机号：
              </dt>
              <dd>
                <input
                  class="isMobile srk w290 required"
                  name="phone"
                  type="text"
                  ismobile="true"
                  maxlength="20"
                  maxsize="20"
                />
                <label>请填写手机号</label>
              </dd>
              <div class="clear"></div>
            </dl>
            <dl>
              <dt>
                <i>*</i>验证码：
              </dt>
              <dd>
                <input
                  id="code"
                  class="srk w290 required"
                  name
                  type="text"
                  maxlength="20"
                  maxsize="20"
                />
                <input
                  id="sandCode"
                  class="v_code v_blue"
                  name
                  type="button"
                  @click="sandMsgCode()"
                  style="cursor:pointer;"
                  value="发送验证码"
                />
              </dd>
              <div class="clear"></div>
            </dl>
            <dl>
              <dt>
                <i></i>企业注册地址：
              </dt>
              <dd style="float:left;">
                <el-select v-model="prov">
                  <el-option
                    v-for="(option, index) in arr"
                    :value="option.name"
                    :key="index"
                  >{{ option.name }}</el-option>
                </el-select>
              </dd>
              <dd style="float:left;">
                <el-select v-model="city">
                  <el-option
                    v-for="(option, index) in cityArr"
                    :value="option.name"
                    :key="index"
                  >{{ option.name }}</el-option>
                </el-select>
              </dd>
              <dd style="float:left;">
                <el-select v-model="district" v-if="district">
                  <el-option
                    v-for="(option, index) in districtArr"
                    :value="option.name"
                    :key="index"
                  >{{ option.name }}</el-option>
                </el-select>
              </dd>
              <label style="color: #c3c3c3;margin-left:10px;">请选择企业营业执照注册地址</label>
            </dl>
            <dl>
              <dt>
                <i></i>详细地址：
              </dt>
              <dd>
                <input
                  class="srk w290"
                  name="companyAddress"
                  type="text"
                  maxlength="500"
                  maxsize="500"
                />
              </dd>
              <div class="clear"></div>
            </dl>
            <dl>
              <dt>
                <i></i>所属行业领域：
              </dt>
              <dd>
                <div class="srser_box" style="float: left;">
                  <div class="input-append">
                    <!-- <input id="fieldIdId" name="fieldId" class type="hidden" value /> -->
                    <input id="fieldIdName" readonly="readonly" type="text" class="srk w290" />
                    <a id="fieldIdButton" href="javascript:">
                      <input class="but" name type="button" />
                    </a>
                  </div>
                </div>
                <label style="margin-left:20px;">请选择企业所属行业领域</label>
              </dd>
              <div class="clear"></div>
            </dl>
            <div class="selected">
              <i id="iselect" @click="istrue=!istrue" :class="{cur:istrue}"></i>
              <label>
                我已阅读并同意
                <a id="title" href="javascript:void(0);" @click="showAgreement">《注册协议》</a>
              </label>
            </div>
            <div class="cz_but">
              <input class="violet" name type="button" @click="handleRegister" value="立即注册" />
              <div class="zc_tips">
                已有账号，
                <a @click="goLogin" target="_blank">立即登录</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <agreement v-if="show" @showR="showR"></agreement>
  </div>
</template>
<script>
// 引入城市列表
import arrAll from '../assets/js/city'
import agreement from "../components/agreement/agreement";
export default {
  data() {
    return {
      istrue: true,
      show: false,
      arr: arrAll,
      prov: "北京",
      city: "北京",
      district: "东城区",
      cityArr: [],
      districtArr: []
    };
  },
  methods: {
    showAgreement() {
      this.show = true;
    },
    showR(data) {
      this.show = data;
    },
    // 发送验证码
    sandMsgCode() {
      console.log('验证码');
    },
    // 注册
    handleRegister() {
      console.log("注册");
    },
    // 跳往登陆页面
    goLogin() {
      this.$router.push({ path: "/login" });
    },
    updateCity() {
      for (var i in this.arr) {
        var obj = this.arr[i];
        if (obj.name == this.prov) {
          this.cityArr = obj.sub;
          break;
        }
      }
      this.city = this.cityArr[1].name;
    },
    updateDistrict() {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.city) {
          this.districtArr = obj.sub;
          break;
        }
      }
      if (
        this.districtArr &&
        this.districtArr.length > 0 &&
        this.districtArr[1].name
      ) {
        this.district = this.districtArr[1].name;
      } else {
        this.district = "";
      }
    }
  },
  beforeMount() {
    this.updateCity();
    this.updateDistrict();
  },
  // 监听
  watch: {
    prov() {
      this.updateCity();
      this.updateDistrict();
    },
    city() {
      this.updateDistrict();
    }
  },
  components: {
    agreement
  }
};
</script>
<style lang="less" scoped>
.register {
  position: relative;
  dl {
    margin: 0;
  }
  label {
    display: inline-block;
    margin-bottom: 0;
  }
  .clear {
    display: block;
    clear: both;
    height: 0px;
    width: 100%;
    font-size: 0;
    line-height: 0px;
    visibility: hidden;
    overflow: hidden;
  }
  .login_head {
    height: 95px;
    width: 1200px;
    margin: 0 auto;
    .login_logo {
      float: left;
      a {
        float: left;
        font-size: 24px;
        color: #333;
        line-height: 95px;
      }
      label {
        background: url(../images/fg.png) left center no-repeat;
        font-size: 20px;
        color: #666;
        float: left;
        line-height: 95px;
        padding-left: 20px;
        margin-left: 20px;
      }
    }
  }
  .box_gb {
    padding: 30px 0;
    .zh_register {
      padding: 50px 0 0;
      border: 1px solid #ddd;
    }
    .cd_edit {
      dl {
        margin-bottom: 20px;
        line-height: 32px;
        dt {
          text-align: right;
          color: #787f9b;
          font-size: 14px;
          height: 32px;
          line-height: 32px;
          float: left;
          width: 20%;
          i {
            color: #f00;
          }
        }
        dd {
          float: left;
          // width: 80%;
          line-height: 32px;
          input {
            float: left;
            line-height: 27px;
          }
          .srk {
            height: 32px;
            background: #eff3f9;
            border: 1px solid #e8ecf2;
            border-radius: 4px;
            color: #787f9b;
            font-size: 14px;
            padding: 0 5px;
          }
          .w290 {
            width: 290px;
          }
          label {
            font-size: 12px;
            color: #c3c3c3;
            margin-left: 10px;
            position: relative;
            z-index: 1;
            float: left;
            line-height: 32px;
          }
          input.v_blue {
            background: #5275c8;
          }
          input.v_code {
            color: #fff;
            font-size: 12px;
            border-radius: 2px;
            padding: 2px 8px;
            margin-left: 10px;
          }
        }
      }
    }
  }
  .w {
    width: 1200px;
    margin: 0 auto;
  }
  .srser_box {
    width: 290px;
    height: 32px;
    background: #eff3f9;
    border: 1px solid #e8ecf2;
    border-radius: 4px;
    color: #787f9b;
    font-size: 14px;
    position: relative;
    z-index: 1;
    label {
      margin-left: 20px;
    }
  }
  a:link,
  a:visited {
    color: #333333;
    text-decoration: none;
  }
  input.but {
    position: absolute;
    z-index: 22;
    right: 0px;
    top: 3px;
    border-left: 1px solid #d0d4db;
    width: 35px;
    height: 24px;
    background: #eff3f9 url(../images/ser.png) center center no-repeat;
  }
  .selected {
    padding-left: 20%;
    i.cur {
      background: url(../images/wxz.png) center center no-repeat;
    }
    i {
      display: inline-block;
      width: 18px;
      height: 18px;
      margin-right: 10px;
      background: url(../images/on.png) center center no-repeat;
      vertical-align: middle;
    }
    a {
      color: #089bf8;
      font-size: 14px;
    }
  }
  .zh_register .cz_but {
    margin-top: 30px;
    padding-left: 20%;
    margin-bottom: 30px;
  }
  input.violet {
    background: #5275c8;
  }
  .cz_but input {
    width: 152px;
    height: 42px;
    line-height: 42px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    margin-right: 20px;
  }
  .zc_tips {
    height: 30px;
    line-height: 30px;
    color: #666;
    font-size: 14px;
    margin-top: 20px;
    a {
      cursor: pointer;
      color: #089bf8;
    }
  }
}
</style>
