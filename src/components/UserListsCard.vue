<script setup lang="ts">
import { SponsorLists } from '../types/models/sponsors.models';
import dayjs from "dayjs";

defineProps<{
    card: SponsorLists
}>();

const getCardStatusColor = (el: string) => {
    if (el === "Bekor qilingan") {
        return "text-gray-900"
    };
    if (el === "Yangi") {
        return "text-blue-300"
    }
    if (el == "Moderatsiyada") {
        return "text-orange"
    }
    return "text-green"
}
</script>

<template>
    <ul class="flex justify-between mb-3 last:mb-0 px-3 py-[23px]
        bg-white border-[1px] border-[#2E5BFF14] rounded-lg ">
        <li class="w-[6.25%] text-secondary text-base leading-[22px] font-normal">{{ card.id }}</li>
        <li class="w-[22%] text-secondary text-base font-semibold leading-[17.78px]">{{ card.full_name }}</li>
        <li class="w-[12.5%] text-center text-secondary font-medium text-sm leading-[22px]">{{ card.phone }}</li>
        <li class="w-[12.5%] text-center text-[#2E384D] text-sm font-semibold">{{ card.sum }} <span
                class="uppercase text-[#B2B7C1]">uzs</span></li>
        <li class="w-[12.5%] text-center text-[#2E384D] text-sm font-semibold">{{ card.spent }} <span
                class="uppercase text-[#B2B7C1]">uzs</span></li>
        <li class="w-[12.5%] text-center">{{ dayjs(card.created_at).format("YYYY.MM.DD") }}</li>
        <li class="w-[12.5%] text-center text-base font-normal" :class="getCardStatusColor(card.get_status_display)">{{ card.get_status_display }}
        </li>
        <li class="w-[8%] flex items-center justify-center">
            <img src="/assets/images/icons/eye.svg" alt="Eye Icon">
        </li>
</ul></template>