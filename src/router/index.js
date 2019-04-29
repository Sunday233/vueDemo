import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/contentlayout'
// import home from '@/components/Home/Home'
import home from '@/view/home'
import introduction from '@/view/introduction'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path: '/',
      component: layout,
      children: [{
        path: 'home',
        name: 'home',
        component: home,
        meta: {title: '首页'}
      },
      {
        path: 'introduction',
        name: 'introduction',
        component: introduction,
        meta: {title: '个人信息'}
      }
    ]
    }
  ]
})
