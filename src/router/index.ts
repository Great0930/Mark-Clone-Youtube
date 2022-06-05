import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue') // 懶加載組件
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
