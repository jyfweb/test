
<template>
  <div class="text">暂无权限访问</div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {}
})
export default class NoPermissionPanel extends Vue {}
</script>
<style lang="scss" scoped>
    .text{
    text-align: center;
    font-size: 6rem;
    margin-top: 13%;
    }
</style>
