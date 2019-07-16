<template>
  <div class="manager" @click="hanldeOut">
    <div class="wrapper">
      <div class="sidebar-small">
        <div class="logo-small">
          <img src="../images/logo.png" alt />
        </div>
        <div class="menu">
          <ul class="el-menu-vertical-demo el-menu">
            <router-link
              to="/manager/workbench"
              tag="li"
              class="el-menu-item"
              style="padding-left: 20px;"
              @click.native="current=1"
              :class="{'active':current==1}"
            >
              <div class="icon-container">
                <img src="../images/down.png" class="normal-img" v-if="current!=1" />
                <img src="../images/down_hover.png" class="active-img" v-else-if="current==1" />
                <div class="title">工作台</div>
              </div>
            </router-link>
            <router-link
              to="/manager/jurisdiction"
              tag="li"
              class="el-menu-item"
              style="padding-left: 20px;"
              @click.native="current=2"
              :class="{'active':current==2}"
            >
              <div class="icon-container">
                <img src="../images/manager.png" class="normal-img" v-if="current!=2" />
                <img src="../images/manager_hover.png" class="active-img" v-else-if="current==2" />
                <div class="title">权限管理</div>
              </div>
            </router-link>
          </ul>
          <div class="drop-down-box">
            <div class="el-dropdown">
              <span class="el-dropdown-link el-dropdown-selfdefine" @click.stop="logout=!logout">
                <div class="drop-link">
                  <img src="../images/user.png" />
                  <div class="name">13129095674</div>
                </div>
              </span>
              <ul
                v-show="logout"
                class="el-dropdown-menu el-popper change-pwd-dropDown"
                style="transform-origin: center top 0px; z-index: 2005; position: absolute;top:60px"
              >
                <li class="el-dropdown-menu__item">退出登录</li>
                <div class="popper__arrow" style="left: 38.5px;"></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container">
        <div class="version-manager">
          <div class="tabs" v-if="show">
            <div class="el-tabs el-tabs--top">
              <div class="el-tabs__header is-top">
                <div class="el-tabs__nav-wrap is-top">
                  <div class="el-tabs__nav-scroll">
                    <div class="el-tabs__nav is-top" style="transform: translateX(0px);">
                      <div
                        class="el-tabs__active-bar is-top"
                        :class="{move_info:title==1,move_declare:title==2}"
                      ></div>
                      <router-link
                        to="/manager/managerinfo"
                        tag="div"
                        class="el-tabs__item is-top"
                        @click.native="title=1"
                        :class="{'is-active':title==1}"
                      >企业信息管理</router-link>
                      <router-link
                        to="/manager/declare"
                        tag="div"
                        class="el-tabs__item is-top"
                        @click.native="title=2"
                        :class="{'is-active':title==2}"
                      >企业信息管理</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="el-tabs__content">
                <div class="el-tab-pane"></div>
                <div class="el-tab-pane" style="display: none;"></div>
              </div>
            </div>
            <div class="tips">
              <div class="el-dropdown" @mouseenter="i=true" @mouseleave="i=false">
                <button
                  type="button"
                  class="el-button el-button--default is-circle el-dropdown-selfdefine"
                >
                  <i class="el-icon-info"></i>
                </button>
                <ul class="my-nav" v-show="i">
                  <li class="nav-item">使用手册</li>
                  <li class="nav-item">学习视频</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tabs" v-else>
            <div class="version-type-top">
              <span class="type-new-version" @click="go">企业信息管理 &gt;</span>
              <span class="type-add-new-version">{{ desc }}</span>
              <div class="bottom-line"></div>
            </div>
          </div>
          <div class="version-content">
            <div class="create-manager">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getStore, setStore } from "../common/common";
export default {
  data() {
    return {
      logout: false,
      current: 0,
      i: false,
      title: 1,
      show: true,
      desc: ""
    };
  },
  methods: {
    hanldeOut() {
      if (this.logout) {
        this.logout = false;
      }
    },
    go() {
      this.$router.push({ path: "/manager/managerinfo" });
    }
  },
  created() {
    if (getStore("desc")) {
      let show = JSON.parse(getStore("show"));
      this.show = show;
      let desc = getStore("desc");
      if (desc == "license") {
        this.desc = "营业执照";
      } else if (desc == "company") {
        this.desc = "公司荣誉";
      }
    }
  },
  updated() {
    if (window.location.href.indexOf("license") > -1) {
      this.desc = "营业执照";
      setStore("desc", "license");
    }
    if (window.location.href.indexOf("company") > -1) {
      this.desc = "公司荣誉";
      setStore("desc", "company");
    }
    if (
      window.location.href.indexOf("managerinfo") > -1 ||
      window.location.href.indexOf("declare") > -1
    ) {
      this.show = true;
      setStore("show", this.show);
      return;
    }
    this.show = false;
    setStore("show", this.show);
  }
};
</script>
<style lang="less" scoped>
.manager {
  height: 100%;
  .version-type-top {
    width: 206px;
    height: 75px;
    line-height: 92px;
    position: relative;
    text-align: center;
    .type-new-version {
      font-size: 15px;
      color: #297bfc;
      cursor: pointer;
    }
    .type-add-new-version {
      font-size: 15px;
      color: #9d9d9d;
    }
    .bottom-line {
      position: absolute;
      bottom: 0px;
      height: 3px;
      width: 100%;
      background-color: #297bfc;
    }
  }
  .wrapper {
    height: 100%;
    position: relative;
    .sidebar-small {
      width: 90px;
      background: #ffffff;
      height: 100%;
      float: left;
      margin-top: -1px;
      display: inline-block;
      border-color: #b9b9b9;
      border-style: solid;
      border-width: 1px;
      .logo-small {
        img {
          display: inline-block;
          margin-left: 21px;
          margin-top: 46px;
          width: 48px;
          height: 22px;
        }
      }
      .el-menu {
        background: #fff;
        margin-top: 36px;
        border-right: solid 1px #e6e6e6;
        list-style: none;
        position: relative;
        padding-left: 0;
        background-color: #fff;
      }
      .el-menu-item {
        font-size: 14px;
        height: 69px;
        line-height: 0px;
        margin-top: 45px;
        color: #303133;
        padding: 0 20px;
        list-style: none;
        cursor: pointer;
        position: relative;
        transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        box-sizing: border-box;
        white-space: nowrap;
        &.active {
          height: 69px !important;
          // line-height: 69px;
          background-color: #297bfc;
          .title {
            color: #fff;
          }
          .active-img {
            width: 26px;
            height: 26px;
          }
        }
        .el-menu-item * {
          vertical-align: middle;
        }
      }
      .icon-container {
        text-align: center;
        height: 69px !important;
        padding-top: 10px;
        .normal-img {
          width: 26px;
          height: 26px;
        }
      }
      .title {
        height: 14px;
        margin-top: 5px;
        font-weight: bold;
        color: #3a3a3a;
        line-height: 12px;
      }
      .drop-down-box {
        position: absolute;
        bottom: 80px;
        text-align: center;
        .el-dropdown-link {
          height: 40px;
          background-color: #0fb7d2;
          .drop-link {
            height: 35px;
            width: 100px;
            position: relative;
            img {
              display: inline-block;
              width: 35px;
              height: 35px;
            }
            div {
              font-size: 7px;
            }
          }
        }
      }
      .el-dropdown {
        display: inline-block;
        position: relative;
        color: #606266;
        font-size: 14px;
      }
    }
  }
  .change-pwd-dropDown {
    margin: 0;
    // margin-left: 12px;
    padding: 0;
    color: #545358;
    font-size: 14px;
    &:hover {
      .el-dropdown-menu__item {
        color: #5495fe;
      }
    }
    .el-dropdown-menu__item {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #dde2e3;
      padding-right: 54px;
      list-style: none;
      padding: 0 20px;
      margin: 0;
      font-size: 14px;
      color: #606266;
      cursor: pointer;
      outline: none;
    }
    .popper__arrow {
      top: -6px;
      left: 50%;
      margin-right: 3px;
      border-top-width: 0;
      border-bottom-color: #ebeef5;
      &::after {
        top: 1px;
        margin-left: -6px;
        border-top-width: 0;
        border-bottom-color: #fff;
      }
    }
  }
  .main-container {
    height: 100%;
    width: auto;
    overflow-y: hidden;
    .version-manager {
      position: relative;
      background-color: #f1f0f9;
      height: 100%;
      & > .tabs {
        background-color: #ffffff;
        height: 71px;
        position: relative;
        .el-tabs {
          position: absolute;
          bottom: 0px;
          .el-tabs__header {
            margin-bottom: 0px;
            .el-tabs__item {
              width: 140px;
              color: #9d9d9d;
              text-align: center;
              font-size: 16px;
              line-height: 30px;
            }
            .el-tabs__active-bar {
              background: #297bfc;
            }
            .desc {
              color: #297bfc;
              font-size: 16px;
              padding-left: 10px;
              padding-right: 10px;
            }
            .el-tabs__active-bar.is-active {
              background-color: #297bfc;
              color: #297bfc;
            }
            .el-tabs__nav-wrap {
              overflow: hidden;
              margin-bottom: -1px;
              position: relative;
              .el-tabs__nav {
                white-space: nowrap;
                position: relative;
                transition: transform 0.3s;
                float: left;
                z-index: 2;
              }
            }
          }
        }
      }
      .version-content {
        height: calc(100% - 75px);
        background-color: #f1f0f9;
        position: relative;
        .create-manager {
          padding-bottom: 20px;
          margin-left: 20px;
          margin-top: 20px;
          margin-right: 20px;
          height: calc(100% - 40px);
          position: relative;
          background-color: white;
          box-shadow: #297bfc 0px 0px 10px;
        }
      }
    }
    .tabs .tips {
      float: right;
      margin-right: 40px;
      margin-top: 20px;
    }
    .el-dropdown {
      display: inline-block;
      position: relative;
      color: #606266;
      font-size: 14px;
    }
  }
  .is-active {
    color: #297bfc !important;
  }
  .el-dropdown-menu {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 10px 0;
    margin: 5px 0;
    background-color: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .my-nav {
    position: absolute;
    z-index: 10;
    top: 40px;
    right: -30px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .nav-item {
      line-height: 36px;
      white-space: nowrap;
      padding: 0 20px;
      cursor: pointer;
      &:hover {
        color: #409eff;
        background-color: #ecf5ff;
      }
    }
  }
  .move_info {
    width: 120px;
    transform: translateX(0px);
  }
  .move_declare {
    width: 120px;
    transform: translateX(160px);
  }
}
</style>
