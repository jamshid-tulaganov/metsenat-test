<script setup lang="ts">
import { ButtonTypes } from '../../types/components/button.type';
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
    variants: {
        intent: {
            primary: [
                "flex items-center justify-center",
                "w-full pt-[14px] pb-[15px]",
                "bg-blue-800",
                "font-rubik text-white text-base leading-[21px]",
                "font-medium text-center rounded-md",
                "text-sf-pro-text outline-double hover:bg-blue-700"
            ],
            outline: [
                "flex items-center justify-center",
                "border-[1px] border-[#B2B7C1]",
                "px-8 py-2",
                "rounded-[5px]",
                "text-sf-pro-text text-[#B2B7C1] text-sm leading-6 text-center hover:bg-gray-100"
            ]
        }
    },
    compoundVariants: [
        { intent: "primary" }
    ]
});


type ButtonProps = VariantProps<typeof button>;

withDefaults(
    defineProps<{ intent?: ButtonProps["intent"]; buttonType: ButtonTypes,  disabled?: boolean}>(),
    {
        intent: "primary",
    }
);
</script>


<template>
    <button :type="buttonType" :class="button({ intent })">
        <slot />
    </button>
</template>