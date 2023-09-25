<script setup lang="ts">
import { reactive } from "vue";
import { TabsItem } from '../../types/components/tabs.types';
import { useDashboardStore } from '../../store/dashboard';


const props = defineProps<{
    options: TabsItem[]
}>();

const dashboardStore = useDashboardStore();

const change = (id: number) => {
    props.options.map(option => {
        if (option.id == id) {
            option.active = true;
            dashboardStore.currentTab = option;
        } else {
            option.active = false;   
        }
    });
}
</script>

<template>
    <section>
        <ul class="w-[579px] flex items-center border-2  border-blue-100 rounded-md">
            <li v-for="(option, index) in options" :key="index"
                class="w-1/3 h-10 flex items-center justify-center cursor-pointer text-blue-500 "
                :class="{'text-white bg-primary': option.active}"
                @click="change(option.id)"
            >
                <a href="#" class="text-xs leading-3 font-medium text-center uppercase"> {{ option.tittle }}</a>
            </li>
        </ul>
    </section>
</template>