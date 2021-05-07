import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/admin/index',
    component: () => import(/* webpackChunkName: "home" */ '../views/Admin/Home.vue'),
    children:[
      {
        path: '/admin/index',
        name: 'aindex',
        component: ()=>import(/* webpackChunkName: "index" */ '../components/index.vue'),
      },
      {
        path: '/admin/work',
        name: 'Work',
        component: () => import(/* webpackChunkName: "work" */ '../components/Work.vue'),
      },
      {
        path: '/admin/road',
        name: 'Road',
        component: () => import(/* webpackChunkName: "road" */ '../components/Road.vue')
      },
      {
        path: '/admin/notice',
        name: 'Notice',
        component: () => import(/* webpackChunkName: "notice" */ '../views/Admin/NoticeInfo.vue')
      },
      {
        path: '/admin/counselor',
        name: 'AdminCounselor',
        component: () => import('../components/Counselor.vue')
      },
      {
        path: '/admin/map',
        name: 'Map',
        component: () => import('../views/MapInfo.vue')
      },
    ]
  },
  {
    path: '/SysAdmin',
    name: 'SystemAdmin',
    redirect: '/sysadmin/index',
    component: () => import(/* webpackChunkName: "systemAdmin" */ '../views/SysAdmin/Home.vue'),
    children:[
      {
        path: '/sysadmin/index',
        name: 'index',
        component: ()=>import(/* webpackChunkName: "index" */ '../components/index.vue'),
      },
      {
        path: '/sysadmin/admin',
        name: 'sysAdminInfo',
        component: () => import(/* webpackChunkName: "admininfo" */ '../components/Admin.vue'),
      },
      {
        path: '/sysadmin/work',
        name: 'sysWork',
        component: () => import(/* webpackChunkName: "work" */ '../components/Work.vue'),
      },
      {
        path: '/sysadmin/road',
        name: 'sysRoad',
        component: () => import(/* webpackChunkName: "road" */ '../components/Road.vue')
      },
      {
        path: '/sysadmin/notice',
        name: 'sysNotice',
        component: () => import(/* webpackChunkName: "notice" */ '../views/Admin/NoticeInfo.vue')
      }
    ]
  },
  {
    path: '/counselor',
    name: 'Counselor',
    redirect: '/counselor/index',
    component: () => import(/* webpackChunkName: "counselor" */ '../views/Counselor/Home.vue'),
    children:[
      {
        path: '/counselor/index',
        name: 'cindex',
        component: ()=>import(/* webpackChunkName: "cindex" */ '../components/cindex.vue')
      },
      {
        path: '/counselor/work',
        name: 'WorkInfo',
        component: () => import(/* webpackChunkName: "work" */ '../views/Counselor/Work.vue'),
      },
      {
        path: '/counselor/road',
        name: 'RoadInfo',
        component: () => import(/* webpackChunkName: "road" */ '../views/Counselor/Road.vue'),
      },
      {
        path: '/counselor/self',
        name: 'SelfInfo',
        component: () => import(/* webpackChunkName: "self" */ '../views/Counselor/Self.vue')
      },
      {
        path: '/counselor/notice',
        name: 'NoticeInfo',
        component: () => import(/* webpackChunkName: "notice" */ '../views/Counselor/Notice.vue')
      },
      {
        path: '/counselor/map',
        name: 'MapInfo',
        component: () => import(/* webpackChunkName: "map" */ '../views/MapInfo.vue')
      },
    ]
  },
  {
    path: '/',
    name: '登录',
    redirect: '/login'
  },
  {
    path:'/login',
    name:'Login',
    component: () => import(/* webpackChunkName: "login"*/ '../views/Login.vue')
  },
  {
    path:'/:catchAll(.*)',
    name:'/404',
    component: () => import(/* webpackChunkName: "login"*/ '../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
  let token = sessionStorage.getItem('token');
  let type = sessionStorage.getItem('type');
  if(to.path == '/login'){
    if(token!==null){
      if(type==="管理员"){
        next({path:'/admin'})
      }
      else if(type==="系统管理员"){
        next({path:'/counselor'})
      }
      else if(type==="劝导员"){
        next({path:'/SysAdmin'})
      }
    }
    else {
      next()
    }
  }else{
    if(!token){
      next({path:'/login'})
    }else{
      next()
    }
  }
})

export default router
