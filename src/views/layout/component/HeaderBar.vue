<template>
  <el-header>
    <div class="logo">管理后台</div>
      <!-- <img  src="../../../assets/Group2.png" alt > -->
    <div>
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link userinfo-inner"><span>{{sysUserName}}</span>
        <!-- <img  src="../../../assets/img/default_avatar.png" alt class="headImg"> -->
        </span>
        <el-dropdown-menu slot="dropdown">
           <!-- <el-dropdown-item v-if="this.routerMap =='asyncRouterMaps'" @click.native="goHome">企业主页</el-dropdown-item> -->
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {}
})
export default class HeaderBar extends Vue {
  public sysUserName: string = "";
  public sysUserAvatar: string = "";
  created() {



  }


  //退出登录
  logout() {
    this.$confirm("确认退出吗?", "提示", {
      type: "warning"
    })
      .then(() => {
        sessionStorage.removeItem("loginData");
        sessionStorage.removeItem("jwtToken");
        this.$router.push("/login");
      })
      .catch(() => {});
  }
  goHome() {
    this.$router.push("/businessManagement")
  }
}
</script>
<style lang="scss">
/* 主题颜色 */
// @import '../../style/element-theme.scss';
.el-container{
  height: 100%;
}
  .el-header{
    text-align: center;
    line-height: 40px;
    background-color: #4986FF;
    color:#fff;
    display: flex;
    justify-content: space-between;
    .logo{
      font-size:2em;
      color:#333;
      font-family:PingFangSC-Semibold;
    }
    .el-dropdown{
      color:#fff;
    }
  }
  .breadPanel{
    color: #333;
    text-align: center;
    line-height: 40px;
    padding-left:20px;
    color:#333;
    border-bottom:1px #D6D6D6 solid;
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
    height:100%;
    padding: 10px 10px 30px 10px;
    .content-container{
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
.el-menu{
  border-right:none!important;
}
.el-menu-item:focus, .el-menu-item:hover{
  background: #1A1F2D;
}
.el-row {
  .userinfo{
    text-align: right;
    padding-right: 35px;
    float: right;
  }
}
.el-submenu {
  .el-menu-item{
    min-width: 0!important;
  }
}

.menu-expanded {
  .el-menu{
    background-color: #545c64;
    height:100%;
  }
  .el-submenu__icon-arrow{
    right:-10px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
}
.el-menu i{
  vertical-align: middle;
    width: 24px;
    margin-right: 20px;
    text-align: center;
    display: inline-block;
}
.el-footer{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
  text-align: center;
  height:30px!important;
  line-height:30px;
  background-color: #f2f2f2;
  border-top: 1px solid #DCDFE6;
  text-align: left;
}
.el-main {
  padding: 10px 10px 30px 10px!important;
}
</style>
