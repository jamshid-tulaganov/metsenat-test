import { createRouter, createWebHistory } from 'vue-router';

// components
import Login from '../views/auth/Login.vue';
import AppHeader from '../components/layout/AppHeader.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';

const routes = [
    {
        path: "/",
        name: "dashboard",
        components: {
            default: AppHeader,
            dashboard: Dashboard
        }
    },
    {
        path: "/login",
        name: "auth",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

