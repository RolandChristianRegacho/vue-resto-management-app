import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import AddView from '../views/AddView.vue'
import UpdateView from '../views/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'SignUpPage',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginView
    },
    {
      path: '/add_restaurant',
      name: 'AddPage',
      component: AddView
    },
    {
      path: '/update_restaurant/:id',
      name: 'UpdatePage',
      component: UpdateView
    }
  ]
})

export default router
