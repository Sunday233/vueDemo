<template>
<div class="manage_page fillcontain">
<el-row style="height:100%;">
      <!-- <el-col>
        <div class="header-menu hidden-sm-and-up" @click="menuToggle"></div>
      </el-col> -->
      <el-col :sm="5" :md="4"  style="min-height: 100%;background-color:#1c2438;" class="menubar-container" id="menubar-container" >
        <el-menu :default-openeds="['1']" style="min-height: 100%;" theme="dark" router>
          <el-submenu index="1">
            <template slot="title">我的</template>
            <el-menu-item index="introduction" @click="menuToggle">个人简介</el-menu-item>
            <el-menu-item index="" @click="menuToggle">分组2</el-menu-item>
          </el-submenu>
       
          <el-submenu index="4">
            <template slot="title">导航二</template>
            <el-menu-item index="" @click="menuToggle">分组1</el-menu-item>
            <el-menu-item index="" @click="menuToggle">分组2</el-menu-item>
          </el-submenu>
          
          <el-submenu index="6">
            <template slot="title">导航三</template>
            <el-menu-item index="">分组1</el-menu-item>
            <el-menu-item index="">分组2</el-menu-item>
            <el-menu-item index="">分组3</el-menu-item>
          
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col class="content-c" :lg="20" :sm="19" :md="20" :xs="24" style="height: 100%;overflow: auto;">
        <el-header style="text-align: right;font-size: 12px">
          <span>Sunny</span>
        </el-header>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
</div>    
</template>

<script>

export default {
     data(){
      return {

      }
    },
    computed: {

    },
   
    methods: {
      menuToggle(){
       console.log('click the menu');
      }
     
    }

}
</script>

<style>

 
   .menubar-container{
    overflow: hidden;
    background:#1c2438;
  }
  .el-menu{
    border-right-width: 0;
  }
  .el-menu,.el-submenu,.el-submenu__title,.el-menu-item{
    color: #fff;
    background-color: #1c2438;
  }
  .el-row{
    border-left: 1px solid #666;
  }
  .el-menu-item:focus,.el-submenu__title:hover, .el-menu-item:hover{
    background-color: #333;
  }
  .el-header {
    background-color: #1c2438;
    color: #fff;
    line-height: 60px;
  }
  @media screen and (max-width:767px) {
    .menubar-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      background: #fff;
      z-index: 100;
    }

    /* .el-menu-item.is-active{
      color: #303133;
    } */

  }
</style>
