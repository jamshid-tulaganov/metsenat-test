<script setup lang="ts">
defineOptions({
    inheritAttrs: false
});

withDefaults(
    defineProps<{
        modelValue: number | string | undefined;
        inputType?: string;
        placeholder?: string;
        label?: string;
        isIcon?: boolean
    }>(),
        {
        inputType: "text",
    }
);

// emits
const emit = defineEmits<{
    (e: "update:modelValue", payload: string): void;
}>();
</script>


<template>
    <div class="flex flex-col">
        <label v-if="label" class="inline-block mb-2 text-xs text-secondary leading-[14.22px] font-bold tracking-[1.13px]" for="input"> {{ label }}</label>

        <div class="relative">
            <input 
                @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                v-bind="$attrs"
                :type="inputType"
                id="input"
                :placeholder="placeholder"
                required maxlength="500"
                class="w-[315px] px-[15.5px] py-3 border-[1px] border-blue-100 rounded-md text-base 
                    text-input font-normal leading-[17.78px] placeholder:text-placeholder outline-blue-700"
                :class="{'pl-10': isIcon}"
                    
            />

            <img v-if="isIcon"  src="/assets/images/icons/search.svg" alt="Search Icon" class="absolute left-[10px] top-[10px]"/>
        </div>
        

    </div>
</template>