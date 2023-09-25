<script setup lang="ts">
import { TableItems } from '../types/components/table.types';

defineProps<{
    headerItems: TableItems[]
}>();
</script>

<template>
    <section>
        <!-- headers part  -->
        <ul class="flex justify-between">
            <li v-for="{ id, text } in headerItems" :key="id"
                class="w-[12.5%] text-center text-gray-900 text-xs leading-[14.22px] tracking-[1.13px] font-medium uppercase"
                :class="[{ '!w-[6.25%] pl-4 !text-left': id === 1 }, {'!w-[22%] pl-3 !text-left': id ===2 , '!w-[8%]': id === 8}]"
            >
                {{ text }}
            </li>
        </ul>
    </section>
</template>