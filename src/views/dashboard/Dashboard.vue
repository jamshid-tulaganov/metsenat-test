<script setup lang="ts">
import DashboardHeader from './DashboardHeader.vue';
import DashboardHome from './DashboardHome.vue';
import DashboardSponsors from './DashboardSponsors.vue';
import DashboardStudents from './DashboardStudents.vue';

import { find } from "lodash"
import type { Component } from "vue"
import { useDashboardStore } from '../../store/dashboard';

const dashboardStore = useDashboardStore();

const components = [
    { id: 1, component: DashboardHome },
    { id: 2, component: DashboardSponsors },
    { id: 3, component: DashboardStudents }
];


//get component
const getCurrentComponent = (): Component | undefined => {
    return find(components, { id: dashboardStore.currentTab.id })?.component;
}


</script>

<template>
    <main>
        <DashboardHeader />

        <!-- components -->
        <section class="container mx-auto mt-[0px]">
            <KeepAlive>
                <component :is="getCurrentComponent()"></component>
            </KeepAlive>
        </section>
        
    </main>
</template>