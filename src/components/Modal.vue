<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import 'vue-final-modal/style.css';

defineProps<{
    title?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', modelValue: boolean): void
    (e: 'close'): void
}>()

</script>

<template>
    <VueFinalModal class="flex justify-center items-center"
        content-class="w-full max-w-[586px] bg-white px-7 pt-7 pb-8 rounded-[12px]"
        @update:model-value="val => emit('update:modelValue', val)">

        <header class="flex justify-between">
            <h1 class="text-sf-pro-display text-2xl leading-7 text-dark-black font-bold">
                {{ title }}
            </h1>

            <img src="/assets/images/icons/close.svg" alt="Close Icon"
                @click="emit('close')" class="cursor-pointer hover:bg-gray-100 rounded-full p-1"
            />
        </header>
        <slot name="body" />
    </VueFinalModal>
</template>