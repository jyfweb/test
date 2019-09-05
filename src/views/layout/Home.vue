<!--
 * @Author: jyf
 * @LastEditors: jyf
 * @Date: 2019-04-03 14:46:57
 * @LastEditTime: 2019-08-10 15:36:16
 -->
<template>
  <el-container class="is-vertical">
    <header-bar></header-bar>
    <el-container>
      <side-bar class="sidebar-container"></side-bar>
      <el-container class="is-vertical">
        <app-main></app-main>
        <footer-bar></footer-bar>
      </el-container>
    </el-container>
  </el-container>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { SideBar, footerBar, AppMain, HeaderBar } from "./component";
declare var $notify: any;
declare var layui: any;
declare var RongIMClient:any;
@Component({
  components: {
    SideBar,
    footerBar,
    AppMain,
    HeaderBar
  }
})
export default class Home extends Vue {




  created() {
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  text-align: center;
  line-height: 60px;
  background-color: #fff;
  color: #fff;
  display: flex;
  justify-content: space-between;
  .logo {
    font-size: 2em;
    color: #fff;
    font-family: PingFangSC-Semibold;
  }
  .el-dropdown {
    color: #fff;
  }
}
.breadPanel {
  color: #333;
  text-align: center;
  line-height: 60px;
  padding-left: 20px;
  color: #333;
  border-bottom: 1px #d6d6d6 solid;
  min-width: 1369px;
}

.el-aside {
  // background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #f2f2f2;
  color: #333;
  height: 100%;
  padding: 10px 10px 30px 10px;
  .content-container {
    width: 100%;
    height: 100%;
    min-width: 1024px;
  }
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container .el-aside {
  line-height: 320px;
}
.el-menu {
  border-right: none !important;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background: #1a1f2d;
}
.el-row {
  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
  }
}
.el-submenu {
  .el-menu-item {
    min-width: 0 !important;
  }
}

.menu-expanded {
  .el-menu {
    background-color: #545c64;
    height: 100%;
  }
  .el-submenu__icon-arrow {
    right: -10px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.el-menu i {
  vertical-align: middle;
  width: 24px;
  margin-right: 20px;
  text-align: center;
  display: inline-block;
}
.el-footer {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
  text-align: center;
  height: 30px !important;
  line-height: 30px;
  background-color: #f2f2f2;
  border-top: 1px solid #dcdfe6;
  text-align: left;
}
.el-main {
  padding: 10px 10px 30px 10px !important;
}
</style>
