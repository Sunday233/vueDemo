<template>
  <div id="app" class="fillcontain">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './style/common.css';

.el-menu-item, .el-submenu__title{
    height:36px;
    line-height: 36px;
  }
</style>