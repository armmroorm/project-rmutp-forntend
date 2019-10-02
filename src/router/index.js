import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
Vue.use(Router)
// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')
// Views
const Dashboard = () => import('@/views/Dashboard')
// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')
const Welcome = () => import('@/views/home/Welcome')

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            redirect: '/welcome',
            component: DefaultContainer,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    meta: { requiresAuth: true },
                    component: Dashboard
                },
                {
                    path: 'welcome',
                    name: 'Welcome',
                    component: Welcome
                }
            ]
        },
        {
            path: '/pages',
            redirect: '/pages/404',
            name: 'Pages',
            component: {
                render(c) { return c('router-view') }

            },
            children: [
                {
                    path: '404',
                    name: 'Page404',    
                    component: Page404
                },
                {
                    path: '500',
                    name: 'Page500',
                    component: Page500
                },
                {
                    path: 'signin',
                    name: 'SignIn',
                    component: Login
                },
                {
                    path: 'signup',
                    name: 'SignUp',
                    component: Register
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['user/token']) {
            next()
            return
        }
        next('/pages/signin')
    } else {
        next()
    }
})

export default router
