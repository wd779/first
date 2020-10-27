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
  { path: '/login', name: 'Login', component: () => import('../views/login/Login.vue') }, // 登录页面
  { path: '/forgetPass', name: 'ForgetPass', component: () => import('../views/login/ForgetPass.vue') }, // 忘记密码页面
  { path: '/smsLogin', name: 'SmsLogin', component: () => import('../views/login/SmsLogin.vue') }, // 注册/验证码登录页面



]

const router = new VueRouter({
  routes
})

export default router
