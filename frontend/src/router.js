import { createRouter, createWebHistory } from 'vue-router'
import RouteNames from './routeNames'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: RouteNames.HOME,
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/training',
        name: RouteNames.TRAINING,
        component: () => import('./pages/Training.vue')
    },
    {
        path: '/competition',
        name: RouteNames.COMPETITION,
        component: () => import('./pages/Competition.vue')
    },
    {
        path: '/calender',
        name: RouteNames.CALENDAR,
        component: () => import('./pages/Calender.vue')
    },
    {
        path: '/user-management',
        name: RouteNames.USER_MANAGEMENT,
        component: () => import('./pages/UserManagement.vue')
    },
    {
        path: '/login',
        name: RouteNames.LOGIN,
        component: () => import('./pages/Login.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: RouteNames.NOT_FOUND,
        component: () => import('./pages/NotFound.vue')
    },
    {
        path: '/profile',
        name: RouteNames.PROFILE,
        component: () => import('./pages/Profile.vue')
    }
]

const Router = createRouter({
    history: createWebHistory(),
    routes
})

export default Router
