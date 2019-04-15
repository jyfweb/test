<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action, State } from "vuex-class";
@Component({
  components: {}
})
export default class HelloWorld extends Vue {

  public msg = "esrwetw";
  /**用户信息 */
  @State(state => state.loginListData.data) data;

  @Action('loginListData/getListData') getListData;

  created() {
    this.getListData('dsa');
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
