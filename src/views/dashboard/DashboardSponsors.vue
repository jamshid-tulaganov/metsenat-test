<script setup lang="ts">
import UserListsCard from '../../components/UserListsCard.vue';
import UserListsHeader from '../../components/UserListsHeader.vue';
import { cards } from '../../plugins/fake.data';

const headers = [
    { id: 1,  text: "#" },
    { id: 2, text: "f.i.sh." },
    { id: 3, text: "Tel.Raqami" },
    { id: 4, text: "Homiylik summasi" },
    { id: 5, text: "Sarflangan summa" },
    { id: 6, text: "Sana" },
    { id: 7, text: "Holati" },
    { id: 8, text: "Amallar" },

]
</script>

<template>
    <section class="mt-12">

        <!-- lists header -->
        <UserListsHeader
            :headerItems="headers"
            class="mb-3"
        />
        
        <!-- lists cards -->
        <UserListsCard
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
        >
        </UserListsCard>
        <!-- pagination -->
    </section>
</template>