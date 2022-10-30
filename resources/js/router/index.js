import { createWebHistory, createRouter } from 'vue-router'
import store from '@/store'

/* Guest Component */
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')
/* Guest Component */

/* Layouts */
const DefaultLayout = () => import('@/views/layouts/Default.vue')
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('@/views/Dashboard.vue')
const ResumeMaker = () => import('@/views/ResumeMaker.vue')
/* Authenticated Component */


const routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: 'titles.login',
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },
    {
        path: "/",
        component: DefaultLayout,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/',
                component: Dashboard,
                meta: {
                    title: `titles.dashboard`
                }
            }
        ]
    },

    {
        path: "/resume/:id",
        component: DefaultLayout,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: 'resume-maker',
                path: "/resume/:id",
                component: ResumeMaker,
                meta: {
                    title: `titles.resumeMaker`
                }
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "login" })
        }
    }
})

export default router
