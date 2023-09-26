<script setup lang="ts">
import { reactive } from 'vue';
import { useDashboardStore } from '../store/dashboard';
import { watch } from "vue" 

const dashboardStore = useDashboardStore();

const pages = reactive([
    { value: 1, active: true },
    { value: 2, active: false },
    { value: "...", active: false },
    { value: 8, active: false },
    { value: 9, active: false },
]);

const next = () => {
    if (typeof pages[0].value === "number") {
        dashboardStore.currentPage = pages[0].value
    }

    if (typeof pages[4].value === "number" && dashboardStore.currentPageSize * pages[4].value > dashboardStore.count) {
        return false;
    }
    pages.map(el => {
        if (typeof el.value === "number") {
            el.value++;
        }
    });

    

};

const back = () => {
    if (pages[0].value === 1) {
        return false;
    };

    pages.map(el => {
        if (typeof el.value === "number") {
            el.value--;
        }
    });

    if (typeof pages[0].value === "number") {
        dashboardStore.currentPage = pages[0].value
    }
};

const change = (value: number | string) => {
    if (typeof value === "number") {
        dashboardStore.currentPage = value
    };

    pages.map(el => {
        if (el.value === value && value !== "...") {
            el.active = true;
        } else {
            el.active = false;
        }
    })
};

watch(
    () => dashboardStore.currentPage,
    async () => {
        dashboardStore.isLoading = true;
        dashboardStore.getSponsorsList()
            .finally(() => dashboardStore.isLoading = false);
    },
    { deep: true }
)
</script>

<template>
    <div>
        <ul class="flex items-center">
            <li class="w-8 h-8 flex items-center justify-center bg-white rounded-[4px] cursor-pointer border-[#DFE3E8]"
                :class="{'bg-[#DFE3E8] cursor-not-allowed': pages[0].value === 1}" @click="back">
                <img src="/assets/images/icons/left.svg" alt="Left Arrow">
            </li>
            <li v-for="{ value, active } in pages" :key="value" class="w-8 h-8 flex items-center justify-center bg-white rounded-[4px] ml-2 font-medium
                border-[#DFE3E8] border-[1px] tex-sm leading-5 cursor-pointer"
                :class="{ 'border-primary text-primary': active, 'cursor-auto': value == '...' }"  @click="change(value)">
                <!-- number -->
                {{ value }}
            </li>
            <li class="w-8 h-8 flex items-center justify-center bg-white rounded-[4px] ml-2 cursor-pointer
            border-[#DFE3E8] border-[1px]" @click="next">
                <img src="/assets/images/icons/right.svg" alt="Right Arrow">
            </li>
        </ul>
    </div>
</template>