<script setup lang="ts">
import { reactive } from "vue";

let options = reactive([
    {
        id: 1,
        title: "Dashboard",
        active: false
    },
    {
        id: 2,
        title: "Homiylar",
        active: true
    },
    {
        id: 3,
        title: "Talabalar",
        active: false
    }
])


const change = (id: number) => {
    options.map(option => {
        if (option.id == id) {
            option.active = true;
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
                <a href="#" class="text-xs leading-3 font-medium text-center uppercase"> {{ option.title }}</a>
            </li>
        </ul>
    </section>
</template>