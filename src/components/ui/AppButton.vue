<script setup lang="ts">
import { ButtonTypes } from '../../types/components/button.type';

defineProps<{
    buttonType: ButtonTypes
}>()
</script>


<template>
    <button :type="buttonType" class="w-full pt-[14px] pb-[15px] bg-blue-800 font-rubik text-white text-base leading-[21px]
        font-medium text-center rounded-md outline-double hover:bg-blue-700">
        <slot />
    </button>
</template>