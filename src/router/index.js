import AppLayout from '@/layouts/AppLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/guest/LoginView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/guest/registerView.vue'),
        },
        {
            path: '/dashboard',
            component: AppLayout,
            children: [
                {
                    path: '/feed',
                    name: 'feed',
                    component: () => import('@/views/authenticated/FeedView.vue'),
                },
                {
                    path: '/chats',
                    name: 'chats',
                    component: () => import('@/views/authenticated/chatsView.vue'),
                },
                {
                    path: '/communities',
                    name: 'communities',
                    component: () => import('@/views/authenticated/communitiesView.vue'),
                },
                {
                    path: '/assignments',
                    name: 'assignments',
                    component: () => import('@/views/authenticated/assignmentView.vue'),
                },
                {
                    path: '/events',
                    name: 'events',
                    component: () => import('@/views/authenticated/eventsView.vue'),
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import('@/views/authenticated/profileView.vue'),
                },
            ],
        },
    ],
})

export default router
