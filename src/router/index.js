import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path:'/',
      name:'home',
      component: () => import('@/App.vue'),
    },
    {
      path:'/success',
      name:'success',
      component:() => import('../components/icons/component/SuccessMail.vue'),
    },
    
  ],
})

export default router
