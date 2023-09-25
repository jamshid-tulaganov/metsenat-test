import { createRouter, createWebHistory } from 'vue-router';

// components
import Login from '../views/auth/Login.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: Dashboard
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

