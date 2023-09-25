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

router.beforeEach((to) => {
    const authStore = useAuthStore();

    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!authStore.isAuthenticated) {
            return { name: 'login' }
        }
    }
});

export default router;

