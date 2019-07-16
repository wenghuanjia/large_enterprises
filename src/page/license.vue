<template>
  <div class="license" @click="show_edit=false">
    <div class="main-container">
      <div class="version-manager">
        <!-- <div class="tabs">
          <div class="version-type-top">
            <span class="type-new-version">企业信息管理 &gt;</span>
            <span class="type-add-new-version">营业执照</span>
            <div class="bottom-line"></div>
          </div>
        </div> -->
        <div class="version-content">
          <div class="version-type">
            <div class="steps"></div>
            <div class="content-items">
              <div class="tips">提示：上传的材料格式应是pdf/word/图片形式</div>
              <div class="my-projects" @click="upload">
                <div class="new-company">
                  <img src="../images/info.png" />
                  <span>201610661399.7.pdf</span>
                  <div class="el-dropdown">
                    <div
                      class="company-menu el-dropdown-selfdefine"
                      @click.stop="show_edit=!show_edit"
                    ></div>
                    <ul class="my-nav" v-show="show_edit">
                      <li class="nav-item" @click.stop="handleDel">删除</li>
                      <li class="nav-item" @click.stop="handleDown">下载</li>
                      <li class="nav-item" @click.stop="handleSend">推送</li>
                    </ul>
                  </div>
                </div>
                <div class="new-company">
                  <img src="../images/upload.png" alt />
                  <input type="file" @click="upload" name="licenceUpload" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    upload() {
      console.log(1);
    },
    // 删除
    handleDel() {},
    // 下载
    handleDown() {},
    // 推送
    handleSend() {}
  },
  data() {
    return {
      show_edit: false
    };
  }
};
</script>
<style lang="less" scoped>
.license {
  .steps {
    height: 140px;
    padding-top: 40px;
    box-sizing: border-box;
    margin-left: 150px;
  }
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
  .content-items {
    margin-top: -120px;
    margin-left: 20px;
    .tips {
      color: gray;
      font-size: 14px;
    }
    .my-projects {
      display: flex;
      margin-right: 20px;
      .new-company {
        width: 182px;
        height: 223px;
        border: solid;
        border-color: #acacac;
        border-width: 1px;
        margin-top: 40px;
        margin-right: 30px;
        text-align: center;
        position: relative;
        cursor: pointer;
        &:hover {
          border-color: #297bfe;
          box-shadow: #297bfc 0px 0px 10px;
        }
        img {
          margin-top: 20px;
          width: 128px;
          height: 150px;
        }
        input {
          // visibility: hidden;
          // width: 3px;
          width: 100%;
          height: 100%;
          opacity: 0;
          position: absolute;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
        }
      }
    }
  }
  .el-dropdown {
    position: absolute;
    right: 5px;
    top: 5px;
    .company-menu {
      margin-top: 0px;
      width: 20px;
      height: 16px;
      cursor: pointer;
      background: url(../images/more.png);
      &:hover {
        background: url(../images/more_hover.png);
      }
    }
  }
  .my-nav {
    position: absolute;
    right: 0px;
    top: 20px;
    white-space: nowrap;
    margin-top: 5px;
    background: #fff;
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .nav-item {
      list-style: none;
      line-height: 36px;
      padding: 0 20px;
      margin: 0;
      font-size: 14px;
      color: #606266;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: #eaf2ff;
        color: #5495fe;
      }
    }
  }
}
</style>
