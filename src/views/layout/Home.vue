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



  public initIM() {
   layui.config({
        base: 'static/im/'
    }).extend({
        rmlib: 'rmlib',
        protobuf: 'protobuf',
        socket: 'socket',
    });
let that = this;

   layui.use(['layim', 'jquery', 'socket'], function (layim, socket) {
        var $ = layui.jquery;
        var socket = layui.socket;
        socket.config({
            key: '82hegw5uhqtcx', //融云key
            layim: null,
            token: 'pY47tkCUpKcqWCRhrSqzSE+8anvb7GHabts1atHWodjqMxX2TBLTTwUobhA9ZsfbIJ84oh70h2nDpc4Br+k7DDCkTK6Dc1ZF',//融云用户token
        });
  
          //  socket.RongYunMessage(res=>{
          //     const content = JSON.parse(res.content.content).Content;
          //     console.log(res);
          //     if (content.Content && JSON.parse(res.content.content).NotifyType == 0) {
          //           that.$notify({
          //               title: '消息通知：',
          //               message: content.Content,
          //               type: 'success'
          //           });
          //     }
          //   })
            
        layim.config({
          init: {
          mine: {
             "username": "金予凡"
            ,"id": "100000"
            ,"status": "online"
            ,"sign": "XXXXX"
            ,"avatar": "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563354669&di=6cde538adde1e953f1646dedf05cce13&src=http://imgsrc.baidu.com/forum/w=580/sign=b11d0fabbc389b5038ffe05ab534e5f1/ba7dadc379310a5534d5cb41b24543a983261058.jpg"
          }
            ,friend: [{
            
            "list": [{
              "username": "贤心"
              ,"id": "100001"
              ,"avatar": "//tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"
              ,"sign": "这些都是测试数据，实际使用请严格按照该格式返回"
              ,"status": "online"
            },{
              "username": "刘小涛"
              ,"id": "100001222"
              ,"sign": "如约而至，不负姊妹欢乐颂"
              ,"avatar": "//tva4.sinaimg.cn/crop.0.1.1125.1125.180/475bb144jw8f9nwebnuhkj20v90vbwh9.jpg"
            },{
              "username": "谢小楠"
              ,"id": "10034001"
              ,"avatar": "//tva2.sinaimg.cn/crop.1.0.747.747.180/633f068fjw8f9h040n951j20ku0kr74t.jpg"
              ,"sign": ""
            },{
              "username": "马小云"
              ,"id": "168168"
              ,"avatar": "//tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg"
              ,"sign": "让天下没有难写的代码"
            },{
              "username": "徐小峥"
              ,"id": "666666"
              ,"avatar": "//tva1.sinaimg.cn/crop.0.0.512.512.180/6a4acad5jw8eqi6yaholjj20e80e8t9f.jpg"
              ,"sign": "代码在囧途，也要写到底"
            }]
          }]
            ,group: []
        }, //获取主面板列表信息，下文会做进一步介绍
        members: {
          url: "", //接口地址（返回的数据格式见下文）
          type: "get", //默认get，一般可不填
          data: {} //额外参数
        },

        //上传图片接口（返回的数据格式见下文），若不开启图片上传，剔除该项即可
        uploadImage: {
          url: "", //接口地址
          type: "post" //默认post
        },

        //上传文件接口（返回的数据格式见下文），若不开启文件上传，剔除该项即可
        uploadFile: {
          url: "", //接口地址
          type: "post" //默认post
        },
        //扩展工具栏，下文会做进一步介绍（如果无需扩展，剔除该项即可）
        tool: [
          {
            alias: "code", //工具别名
            title: "代码", //工具名称
            icon: "&#xe64e;" //工具图标，参考图标文档
          }
        ],

        msgbox: layui.cache.dir + "css/modules/layim/html/msgbox.html", //消息盒子页面地址，若不开启，剔除该项即可
        find: layui.cache.dir + "css/modules/layim/html/find.html", //发现页面地址，若不开启，剔除该项即可
        chatLog: layui.cache.dir + "css/modules/layim/html/chatlog.html" //聊天记录页面地址，若不开启，剔除该项即可
        });
    });


    

  


  }


  created() {
    this.initIM()

  
  
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
