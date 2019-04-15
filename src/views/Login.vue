<template>
  <div>
    <button @click="Login">登录</button>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import stores from "../vuex/index";
import { asyncRouterMap } from "../router/index";
@Component({
  components: {}
})
export default class Login extends Vue {
  public asyncRouterMap = asyncRouterMap;


async Login() {
     await stores.dispatch('LoginDataList');
    
     let list:any = stores.state.list;
      
    for (var i = 0; i < asyncRouterMap.length; i++) {
      if (
       list.includes(asyncRouterMap[i].children[0].meta.permissions[0])
      ) {
        this.$router.push(asyncRouterMap[i].children[0].path);
        break;
      }
    }
  }
}
</script>
