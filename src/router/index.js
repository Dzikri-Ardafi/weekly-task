
import Vue from 'vue'
import VueRouter from 'vue-router'
import task1 from '@/view/task1.vue'
import layout from "@/layout/layout.vue"

import git from '@/view/task-2/git.vue'
import uix from '@/view/task-2/uix.vue'
import figma from "@/view/task-2/figma.vue"
import html from '@/view/task-2/html.vue'
import css from '@/view/task-2/css.vue'
import bootstrap from '@/view/task-2/bootstrap.vue'
import js from '@/view/task-2/js.vue'
import cc from '@/view/task-2/clean.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: task1
    
  },
  
  {
    path: '/task-2',
    component: layout,
    children:[
        {
          path: 'Version-Control-and-Branch-Management',
          component: git
        },
        {
          path: 'Introduction-UI-UX',
          component: uix
        },
        {
          path: 'Figma',
          component: figma
        },
        {
          path: 'HTML',
          component: html
        },
        {
          path: 'CSS',
          component: css
        },
        {
          path: 'Bootstrap',
          component: bootstrap
        },
        {
          path: 'Javascript-Refreshment',
          component: js
        },
        {
          path: 'Clean-Code',
          component: cc
        },
       ]
      },
    
    
  
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router