import {createRouter, createWebHistory } from 'vue-router'
import sotre from '../store/index'

//路由集合
const routes = [
  {name: 'main', path: '/', component: ()=>import('../components/main.vue'), meta:{auth:true} ,children:[
    {name: 'index', path: '/index', component: ()=>import('../components/common/index.vue'), meta:{auth: true} },
    {name: 'list', path: '/list', component: ()=>import('../components/common/list.vue'), meta:{auth: true} },
  ]},
  {name: 'login', path: '/login', component: ()=>import('../components/system/login.vue'), meta:{auth: false} },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
//判断登录权限
router.beforeEach((to, form, next)=>{
  if(to.meta.auth && !sotre.getters.getToken){
    next({ name: 'login' })
  }else if(sotre.getters.getToken && to.path == '/login'){
    next({ name: 'main' })
  }else{
    next();
  }
})

export default router;