<script setup lang="ts">
import { useAuthStore } from './store/auth';

const { check } = useAuthStore();

check();
</script>

<template>
    <router-view name="dashboard"></router-view>
    <router-view></router-view>
</template>