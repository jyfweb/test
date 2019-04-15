<template>
  <div class="menu-expanded">
   <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router @open="handleOpen" @close="handleClose" background-color="#222A3D" text-color="#C0C4CC"
        :collapse="collapsed" active-text-color="#fff">
        <template v-for="(item,index) in asyncRouterMap" v-if="!item.hidden&&IsPermission(item.meta.permissions[0])">
            <el-submenu :index="index+''" v-if="!item.leaf" :key="item.name">
                <template slot="title"><span :class="item.icon"></span><span slot="title">{{item.name}}</span></template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden&&IsPermission(child.meta.permissions[0])">{{ child.name }}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"  :key="item.name"><span slot="title">{{ item.children[0].name }}</span></el-menu-item>
        </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Bus from "../../../common/util/bus";
import {asyncRouterMap} from "../../../router/index";
import stores from '../../../vuex/index';
@Component({
  components: {}
})
export default class SideBar extends Vue {
  public collapsed: boolean = false;
  public sysName: string = "TMS-saas";
  public asyncRouterMap = asyncRouterMap;
  public $refs: {
    menuCollapsed: HTMLFormElement;
  };
  public created() {
    Bus.$on("collapsed", collapsed => {
      this.collapsed = collapsed;
    });
    // console.log(this.asyncRouterMap);

  }
  public handleOpen() {
    //console.log('handleopen');
  }
  public handleClose() {
    //console.log('handleclose');
  }
  public showMenu(i, status) {
    let element: any = this.$refs.menuCollapsed.getElementsByClassName(
      "submenu-hook-" + i
    )[0];
    element.style.display = status ? "block" : "none";
  }

/**权限判断 */
  IsPermission(Permission){
    let list:any = stores.state.list;
    return list.includes(Permission);
  }

}
</script>
<style lang="scss" scoped>
.iconstyle {
  display: inline-block;
  width: 40px;
  text-align: left;
}
</style>

