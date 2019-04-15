<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
#app {
	position: relative;
	top: 0px;
	bottom: 0px;
	width: 100%;
  height: 100%;
}
</style>
