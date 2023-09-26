<script setup lang="ts">
import { useAuthStore } from './store/auth';
import { useRouter } from 'vue-router';

const { check, isAuthenticated } = useAuthStore();
const router = useRouter();

if (!isAuthenticated) {
    router.push({name: 'login'})
}

check();
</script>

<template>
    <router-view name="dashboard"></router-view>
    <router-view></router-view>
</template>