<template>
<el-main>
  <section class="content-container">
    <div class="grid-content bg-purple-light">
      <el-col :span="24" class="content-wrapper">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
    </div>
  </section>
</el-main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component({
    components: { 

    }
})
export default class AppMain extends Vue {

}

</script>
<style lang="scss" scoped>
/deep/.el-main .content-container {
    background-color: #fff;
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>
