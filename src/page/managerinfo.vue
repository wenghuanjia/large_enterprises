<template>
  <!-- 企业信息管理 -->
  <div class="managerinfo" @click="show_edit=false">
    <!-- http://zh.egaoqi.com/#/myProjectManager -->
    <div class="my-projects">
      <div class="new-company">
        <img src="../images/info.png" alt />
        <span>广州市盐联信息技术有限公司</span>
        <div class="el-dropdown">
          <div class="company-menu el-dropdown-selfdefine" @click.stop="show_edit=!show_edit"></div>
          <ul class="my-nav" v-show="show_edit">
            <li class="nav-item">编辑</li>
          </ul>
        </div>
      </div>
      <router-link to="/manager/license" tag="div" class="new-company">
        <img src="../images/license.png" alt="">
        <span>营业执照</span>
      </router-link>
      <router-link to="/manager/company" tag="div" class="new-company">
        <img src="../images/company.png" alt="">
        <span>公司荣誉</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show_edit: false
    }
  }
};
</script>
<style lang="less" scoped>
.managerinfo {
  .my-projects {
    display: flex;
    margin-left: 20px;
    .new-company {
      position: relative;
      width: 182px;
      height: 223px;
      border: 1px solid #acacac;
      margin-top: 40px;
      margin-right: 30px;
      text-align: center;
      cursor: pointer;
      &:hover {
        border-color: #297bfe;
        box-shadow: #297bfc 0px 0px 10px;
      }
      img {
        width: 128px;
        height: 150px;
        margin-top: 20px;
      }
      span {
        display: block;
        margin-top: 13px;
        font-size: 15px;
        color: #3b3b3b;
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
            background: url(../images/more_hover.png)
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
    }
  }
}
</style>
