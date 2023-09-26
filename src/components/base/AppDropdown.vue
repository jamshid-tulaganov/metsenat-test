<script setup lang="ts">
import { DropdownItem } from '../../types/components/dropdown.type';
import { ref } from 'vue';

const props = defineProps<{
    options: DropdownItem[]
    modelValue: string | number,
    label: string
    placeholder: string
}>();

const currentElement = ref<DropdownItem>(props.options[0]);
const show = ref(false);

const toggle = () => show.value = !show.value;

const change = (id: number) => {
    props.options.map(option => {
        if (option.id === id) {
            currentElement.value = option;
        }
    });

    show.value = false;
}; 
</script>

<template>
    <div class="relative">
        <label for="dropdown" class="inline-block text-xs font-semibold tracking-[1.13px] leading-[14px] uppercase mb-2">
            {{ label }}
        </label>

        <div class="relative w-full flex items-center cursor-pointer" @click="toggle">
            <input :value="currentElement.value" :placeholder="placeholder" type="text" id="dropdown" readonly
                class="w-full py-3 px-4 rounded-md bg-[#E0E7FF33] border-[1px] border-blue-100 outline-primary cursor-pointer"
            />

            <svg class="absolute right-5" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8521 0.601807C12.2101 0.243827 12.7905 0.243827 13.1485 0.601807C13.5065 0.959788 13.5065 1.54019 13.1485 1.89817L7.64851 7.39817C7.30148 7.7452 6.74269 7.75734 6.38091 7.42571L0.88091 2.38405C0.507717 2.04195 0.482507 1.4621 0.8246 1.08891C1.16669 0.715715 1.74655 0.690504 2.11974 1.0326L6.97276 5.4812L11.8521 0.601807Z" fill="#B5B5C3"/>
            </svg>
        </div>

        <ul v-show="show" class="flex flex-col rounded-md mt-1 w-full bg-white border-[1px] border-blue-100 absolute z-20">
            <li
                v-for="{ id, text } in options" :key="id"
                class="px-4 py-3 border-[1px] border-b-blue-100 last:border-b-0 cursor-pointer hover:bg-blue-100"
                @click="change(id)"
            >
                {{  text }}
            </li>
        </ul>
    </div>
</template>