import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'

const Motions = () => import('../views/Motions.vue')

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/motions',
        name: 'motions',
        component: Motions
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
