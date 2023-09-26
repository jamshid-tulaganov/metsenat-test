<script setup lang="ts">
const options = [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
];

defineProps<{
    modelValue: string | number
}>();

// emits
const emit = defineEmits<{
    (e: "update:modelValue", payload: string): void;
}>();

</script>

<template>
    <div>
        <label for="select" class="inline-block mr-3 text-secondary text-base font-medium leading-[22px] cursor-pointer">Ko'rsatish</label>
        <select @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
            class="w-[54px] h-8 outline-blue-700 rounded-[4px] px-2 font-semibold cursor-pointer border-[1px] border-[#DFE3E8]" id="select">
            <option v-for="{id, value} in options" :key="id" :value="value" class="font-semibold">{{ value }}</option>
        </select>
    </div>
</template>