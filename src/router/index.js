import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import CoopListView from '../views/CoopListView.vue'
import PDFView from '../views/PDFView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pdfView',
    component: PDFView,
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardView.vue')
  },
  {
    path: '/cooplist',
    name: 'cooplist',
    component: CoopListView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/pdfapp',
    name: 'pdfapp',
    component: PDFView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/cda/',
  routes
})

export default router
