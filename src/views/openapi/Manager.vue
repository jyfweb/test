<!--
 * @Author: jyf
 * @LastEditors: jyf
 * @Date: 2019-04-09 17:03:51
 * @LastEditTime: 2019-08-19 15:58:14
 -->
<template>
    <div>

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

}
</script>
