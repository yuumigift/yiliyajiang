import { createRouter, createWebHashHistory } from 'vue-router'

import TictactoeView from "@/views/home/TictactoeView";
import DongfangProjectView from "@/views/home/DongfangProjectView.vue";
import HappyBirthdayView from "@/views/home/HappyBirthdayView.vue";
import StarView from "@/views/home/StarView.vue";
import Login from "@/views/Login.vue";
import hiddenLoginView from "@/views/home/HiddenLoginView.vue";
import HomeView from "@/views/publicHome/HomeView.vue";
import MessageBoardView from "@/views/publicHome/MessageBoardView.vue";

import ReportView from "@/views/300report/ReportView.vue";
import FireworkView from "@/views/firework/FireworkView.vue";


const routes = [
  {
    path: '/',
    redirect:'/login',
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title:'登录'
    }
  },
  {
    path: '/hidden/login',
    name: 'hiddenLogin',
    component: hiddenLoginView,
    meta:{
      title:'祝你生日快乐'
    }
  },
  {
    path: '/public',
    name: 'public',
    children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
          meta: {
            title: '今生无悔入东方，来世愿生幻想乡！'
          }
        },
        {
          path: '/messageBoard',
          name: 'messageBoard',
          component: MessageBoardView,
          meta: {
            title: '留言板'
          }
        }]
  },
  {
    path: '/你以为你来到这个页面就能访问了吗，没想到吧~',
    name: 'baka',
    meta: {
       title:'真是个笨蛋呢~'
    }
  },
  {
    path: '/300report',
    name: '300report',
    component: ReportView,
    meta: {
      title: '300战绩查询'
    }
  },
  //  首页
  {
    path: '/',
    name: 'index',
    children: [
      {
        path: '/hidden/tictactoe',
        name: 'tictactoe',
        component: TictactoeView,
        meta:{
          title:'生日快乐！'
        }
      },
      {
        path: '/hidden/dongfangProject',
        name: 'dongfangProject',
        component: DongfangProjectView,
        meta: {
          title: '秋姉妹のなく顷に'
        }
      },
      {
        path: '/hidden/happyBirthday',
        name: 'happyBirthday',
        component: HappyBirthdayView
      },
      {
        path: '/hidden/home',
        name: '首页',
        component: StarView,
        meta:{
          requireAuth:true,
          title: '首页'
        },
      },
      {
        path: '/hidden/firework',
        name: '烟火',
        component: FireworkView,
        meta: {
          title: '绚烂烟火'
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
