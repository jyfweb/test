<!--
 * @Author: jyf
 * @LastEditors: jyf
 * @Date: 2019-04-09 17:03:51
 * @LastEditTime: 2019-08-19 15:58:14
 -->
<template>
    <div>
    <div v-for="(item,key) in list" :key="key">
      {{item}}
    </div>
    <button @click="changeList">失效</button>
    <button @click="respondList">响应</button>
    {{list}}
  </div>

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
interface listResponse{
        avatar: string,
        content: string,
        id: string,
        mine: string,
        timestamp: string,
        type: string,
        username: string,
        offLineMessage: string
}
@Component({})
export default class Manager extends Vue {
 
 public list:any= [11, 12, { money: 17 }]

  async created () {


  }
  changeList () {
      // 失效代码
      this.list[0] = 16
      this.list.length = 0
    }
    respondList () {
      // 生效代码
      this.list[2].money = 0
      this.list[0] = 16
    }

}
</script>
