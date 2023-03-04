import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'
import i18n from '@/i18n'

/* Guest Component */
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')
/* Guest Component */

/* Layouts */
const DefaultLayout = () => import('@/views/layouts/AuthLayout.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/views/Dashboard.vue')
const ResumeMaker = () => import('@/views/ResumeMaker.vue')
/* Authenticated Component */

const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login,
        meta: {
            middleware: 'guest',
            title: 'titles.login',
        }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: {
            middleware: 'guest',
            title: `Register`
        }
    },
    {
        name: 'dashboard',
        path: '/',
        component: Dashboard,
        meta: {
            middleware: 'auth',
            title: `titles.dashboard`
        },
    },

    {
        name: 'resume-maker',
        path: '/resume/:id',
        component: ResumeMaker,
        meta: {
            middleware: 'auth',
            title: `titles.resume`
        }
    },
]

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach(async (to, from, next) => {
    document.title = i18n.global.t(to.meta.title)
    if (to.meta.middleware === 'guest') {
        if (store.state.auth.authenticated) return next({name: 'dashboard'})
        return next()
    }
    if (to.meta.middleware === 'auth' && !store.state.auth.authenticated) return next({ name: 'login' })
    next()

})

export default router
