import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path: '/login', name: 'Login', component: () => import('../views/login/Login.vue')}, // 密码登录
  {path: '/lorgetPass', name: 'ForgetPass', component: () => import('../views/login/ForgetPass.vue')}, // 修改密码
  {path: '/smsLogin', name: 'SmsLogin', component: () => import('../views/login/SmsLogin.vue')}, // 验证码登录
  {path: '/Appointment', name: 'Appointment', component: () => import('../views/Appointment.vue')}, // 课程
]

const router = new VueRouter({
  routes
})

export default router
