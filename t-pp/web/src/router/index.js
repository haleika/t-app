import {
  createRouter,
  createWebHistory
} from 'vue-router'
import login from './login'
import home from './home'
const Nofind = () => import('../views/404.vue')
const Index = () => import('../views/index.vue')
const Home = () => import('../views/home/Home.vue')
const InfoShow = ()  => import('../views/home/InfoShow.vue')

// console.log(login);
const routes = new Set([{
    path: '/:pathMatch(.*)',
    name: '/404',
    component: Nofind
  },
  {
    path: '/index',
    name: '/index',
    component: Index,
    children: [
        { path: '', component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/infoshow', name: 'infoshow', component: InfoShow }
    ]
  },
  ...login
])

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == "/Login" || to.path == "/Register") {
    if (isLogin)
      next("/index");
    else
      next();
  } else {
    isLogin ? next() : next("/Login");
  }
})

export default router