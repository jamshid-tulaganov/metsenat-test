<script setup lang="ts">
import Loader from "../../components/Loader.vue"
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import { useAuthStore } from "../../store/auth";
import { sweetToastSuccess } from '../../plugins/swal';
import { useRouter } from 'vue-router';
import { useLoading } from '../../composables/loading';


const authStore = useAuthStore();
const router = useRouter();
const { startLoading, isLoading } = useLoading();

// validation
const rules = {
    username: { required, minLength: minLength(4), maxLength: maxLength(255) },
    password: { required, minLength: minLength(4), maxLength: maxLength(255) }
};

const v$ = useVuelidate(rules, authStore.user);


// submit

function submit() {
    v$.value.$touch();

    // check validation
    if (v$.value.$invalid) {
        return false;
    }

    startLoading(async () => {
        try {
            await authStore.login();
            sweetToastSuccess("Successfully login");
            router.push({ path: "/" })
        } catch (error) {
            console.log(error)
        }
    });
}
</script>


<template>
    <section class="w-full h-[100vh] flex items-center justify-center flex-col">
        <img src="/assets/images/logos/logo-club.svg" alt="Logo METSENAT" title="logo metsenet">
        
        <form @submit.prevent class="p-8 bg-white rounded-xl mt-12">
            <h1 class="font-sf-pro-display text-[#28293D] text-2xl font-bold leading-7 mb-11">Kirish</h1>
            <!-- inputs -->
            <AppInput
                v-model="authStore.user.username"
                label="LOGIN"
                placeholder="Username kiriting"
                class="mb-[22px]"
                :validation-error="{
                    error: v$.username.$error,
                    message: v$.username.$errors,
                }"
            >
            </AppInput>

            <AppInput
                v-model="authStore.user.password"
                input-type="password"
                label="PAROL"
                placeholder="Parol kiriting"
                class="mb-[22px]"
                :validation-error="{
                    error: v$.password.$error,
                    message: v$.password.$errors,
                }"
            >
            </AppInput>
            <!-- captcha -->

            <!-- button -->
            <AppButton type="submit" @click="submit" class="flex items-center justify-center">
                <span class="inline-block mr-1">Kirish</span>
                <Loader width="22" height="22" v-if="isLoading" />
            </AppButton>
        </form>
    </section>
</template>