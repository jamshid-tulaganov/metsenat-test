<script setup lang="ts">
defineProps<{
    width: string,
    height: string
}>()
</script>

<template>
    <div class="flex items-center justify-center">
        <img src="/assets/images/loading.gif" alt="Loading gif" class="inline-block" :width="width">
    </div>
</template>