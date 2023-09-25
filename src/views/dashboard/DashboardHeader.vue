<script setup lang="ts">
import AppTabs from '../../components/base/AppTabs.vue';
import { reactive } from 'vue';
import { TabsItem } from '../../types/components/tabs.types';

const search = "";
const tabGroups = reactive<TabsItem[]>([{
    id: 1,
    tittle: "Dashboard",
    active: false
},
{
    id: 2,
    tittle: "Homiylar",
    active: true
},
{
    id: 3,
    tittle: "Talabalar",
    active: false
    }]);

</script>

<template>
    <header class="mt-[64px] bg-white py-6">
        <div class="container mx-auto flex items-center">
            <!-- tabs -->
            <AppTabs
                :options="tabGroups"
            ></AppTabs>

            <div class="flex items-center ml-auto">
                <!-- searching -->
                <AppInput
                    v-model="search"
                    placeholder="Izlash"
                    isIcon
                    class="h-10 w-[284px] mr-5 px-[11px] bg-gray-800 placeholder:text-gray-900 placeholder:text-base"
                >
                </AppInput>

                <!-- filters -->

                <div class="w-[123px] h-10 flex items-center justify-center bg-[#EDF1FD] rounded-md cursor-pointer">
                    <img src="/assets/images/icons/filter.svg" alt="Filter Icon">
                    <p class="ml-3 text-sf-pro-text text-[#3365FC] text-sm font-medium leading-6">Filter</p>
                </div>
            </div>
            
        </div>
    </header>
</template>