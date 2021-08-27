import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import OurTeam from '../Pages/team/OurTeam.vue'
import homepage from "../Pages/home/homepage.vue"
import About from "../Pages/about/About.vue"
import ContactUs from "../Pages/contact/ContactUs.vue"
import MainPage from "../Pages/mainPage/MainPage.vue"
import ErrorPage from "../Pages/errorPage/ErrorPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
    children:[
      {
        path: '',
        name: 'Home',
        component: homepage
      },
      {
        path: '/ourteam',
        name: 'OurTeam',
        component: OurTeam
      },
      {
        path: '/contact-us',
        name: 'contactUs',
        component: ContactUs
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
    ]
  },
  {
    path:'/error',
    name:'ErrorPage',
    component : ErrorPage
  },
  {
    path:'/:pathMatch(.*)*',
    redirect:'/error'
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


// {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../components/Pages/aboutus.vue')
// }

