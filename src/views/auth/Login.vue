<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
</script>


<template>
    <section class="w-full h-[100vh] flex items-center justify-center flex-col">
        <img src="/assets/images/logos/logo-club.svg" alt="Logo METSENAT" title="logo metsenet">
        
        <form @submit.prevent class="p-8 bg-white rounded-xl mt-12">
            <h1 class="font-sf-pro-display text-[#28293D] text-2xl font-bold leading-7 mb-11">Kirish</h1>
            <!-- inputs -->
            <AppInput
                v-model="email"
                label="LOGIN"
                placeholder="Username kiriting"
                class="mb-[22px]"
            >
            </AppInput>

            <AppInput
                v-model="email"
                input-type="password"
                label="PAROL"
                placeholder="Parol kiriting"
                class="mb-[22px]"
            >
            </AppInput>
            <!-- captcha -->

            <!-- button -->
            <AppButton>Kirish</AppButton>
        </form>
    </section>
</template>