<script setup lang="ts">
import { reactive } from 'vue';
const cards = reactive([
    { id: 1, text: "Barchasi", active: true },
    { id: 2, text: "1 000 000", active: false },
    { id: 3, text: "5 000 000", active: false },
    { id: 4, text: "7 000 000", active: false },
    { id: 5, text: "10 000 000", active: false },
    { id: 6, text: "30 000 000", active: false },
    { id: 7, text: "50 000 000", active: false},
]);


const change = (id: number) => {
    cards.map(card => {
        if (card.id === id) {
            card.active = true;
        } else {
            card.active = false;
        }
    })
}
</script>

<template>
    <ul class="grid grid-cols-4 gap-3">
        <li 
            v-for="{ id, text, active } in cards" :key="id"
            class="py-4 text-center text-[#2E384D] text-sm leading-5 font-semibold
            border-[1px] border-blue-100 rounded-[5px] cursor-pointer relative"
            :class="{'bg-blue-100': active}"
            @click="change(id)"
        >
            {{ text }}
            <span v-if="id !== 1" class="text-xs text-primary">UZS</span>
            <img v-if="active" src="/assets/images/icons/checked.svg" alt="Checked Icon" class="absolute -right-1 -top-1">
        </li>
    </ul>
</template>