<script setup lang="ts">
import CardSelection from '../../components/CardSelection.vue';
import Modal from '../../components/Modal.vue';
import { ref } from 'vue';
const show = ref(false);
const date = ref("");

const close = () => show.value = false;
const open = () => show.value = true;

defineExpose({
    open
})
</script>

<template>
    <Modal title="Filter" v-model:model-value="show" @close="close">
        <template #body>
            <hr class="w-full h-[2px] bg-[#F5F5F7] my-7">

            <!-- app dropdown -->

            <!-- app card select -->

            <CardSelection class="mb-7" />

            <!-- app date -->
            <AppInput
                v-model="date"
                type="date"
                label="SANA"
                placeholder="kk.oo.yyyy - kk.oo.yyyy"
                class="mb-7"
            ></AppInput>

            <hr class="w-full h-[2px] bg-[#F5F5F7]">

            <!-- button -->

            <div class="flex justify-end pt-7">
                <AppButton intent="outline" class="w-[149px] h-[42px] mr-4">
                    <img src="/assets/images/icons/clear.svg" alt="Eye Icons">
                    <span class="inline-block ml-3">Tozalash</span>
                </AppButton>

                <AppButton class="w-[209px] h-[42px]">
                    <img src="/assets/images/icons/eye-white.svg" alt="Eye Icons">
                    <span class="inline-block ml-3">Natijalarni ko‘rish</span>
                </AppButton>
            </div>
        </template>
    </Modal>
</template>