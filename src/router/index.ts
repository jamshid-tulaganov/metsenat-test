import { createRouter, createWebHistory } from 'vue-router';

// components
import Login from '../views/auth/Login.vue';
import AppHeader from '../components/layout/AppHeader.vue';
import Dashboard from '../views/dashboard/Dashboard.vue';

// store
import { useAuthStore } from '../store/auth';

const routes = [
    {
        path: "/",
        name: "dashboard",
        components: {
            default: AppHeader,
            dashboard: Dashboard
        },
        meta: {
            requiresAuth: true
        }
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

router.beforeEach((to, _, next) => {
    const authStore = useAuthStore();

    if (to.name !== 'Login' && !authStore.isAuthenticated) next({ name: 'Login' });

    else next();
});

export default router;

