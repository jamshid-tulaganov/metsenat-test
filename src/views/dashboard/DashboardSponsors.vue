<script setup lang="ts">
import UserListsCard from '../../components/UserListsCard.vue';
import UserListsHeader from '../../components/UserListsHeader.vue';
import Loader from '../../components/Loader.vue';
import { useDashboardStore } from '../../store/dashboard';
import { useLoading } from '../../composables/loading';
import AppSelect from '../../components/base/AppSelect.vue';
import { watch } from "vue";

const dashboardStore = useDashboardStore();
const { startLoading, isLoading } = useLoading();

const headers = [
    { id: 1, text: "#" },
    { id: 2, text: "f.i.sh." },
    { id: 3, text: "Tel.Raqami" },
    { id: 4, text: "Homiylik summasi" },
    { id: 5, text: "Sarflangan summa" },
    { id: 6, text: "Sana" },
    { id: 7, text: "Holati" },
    { id: 8, text: "Amallar" },

];

const load = () => {
    startLoading(async () => {
        await dashboardStore.getSponsorsList();
    })
}
load();

watch(
    () => dashboardStore.currentPageSize,
    () => {
        load();
    },
    { deep: true }
)
</script>

<template>
    <section class="mt-12 mb-[90px]">

        <!-- lists header -->
        <UserListsHeader
            :headerItems="headers"
            class="mb-3"
        />
        
        <Loader v-if="isLoading" />
        <!-- lists cards -->
        <UserListsCard
            v-else
            v-for="(sponsor, index) in dashboardStore.sponsorsList"
            :key="index"
            :card="sponsor"
        >
        </UserListsCard>

        <!-- pagination -->

        <div class="flex items-center mt-7">
            <p class="text-secondary text-base font-medium leading-[22px]">
                {{ dashboardStore.count + " ta dan 1-" + dashboardStore.currentPageSize + " ko'rsatilmoqda" }}
            </p>

            <AppSelect v-model="dashboardStore.currentPageSize" class="ml-auto"></AppSelect>
        </div>
    </section>
</template>