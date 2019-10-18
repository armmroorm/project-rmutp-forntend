import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
Vue.use(Router)
// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')
// Views
const Dashboard = () => import('@/views/Dashboard')
// Views - Pages
const Page404 = () => import('@/views/user/Page404')
const Page500 = () => import('@/views/user/Page500')
const Login = () => import('@/views/user/Login')
const Register = () => import('@/views/user/Register')
const Welcome = () => import('@/views/home/Welcome')
const EditProfile = () => import('@/views/user/userEdit')

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
                },
                {
                    path:'profile',
                    name: 'Profile',
                    meta: { requiresAuth: true },
                    component: EditProfile
                }
            ]
        },
        {
            path: '/pages',
            redirect: '/pages/404',
            name: 'Pages',
            meta: { signIn: true },
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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.signIn)) {
        if (!store.getters['user/token']) {
            next()
            return
        }
        next('/')
    } else {
        next()
    }
})
export default router
