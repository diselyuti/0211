<template>
    <section class="w-full pl-[134px]">
        <h2 class="text-right pb-2 mb-4 border-b-2 px-4 text-sm">Services</h2>
        <div class="flex flex-col gap-1 border-l-2">
            <progress-bar v-for="service in profileStore.services"
                          :title="service.name"
                          :max="profileStore.servicesMax"
                          :value="service.value"
                          :key="service.name"
            />
        </div>
        <div class="flex justify-between mt-4 pt-4 border-t-2 text-base font-bold">
            <span>Total:</span>
            <span class="px-4">{{ profileStore.servicesTotal }}</span>
        </div>
    </section>
</template>

<script setup lang="ts">
import ProgressBar from "@/components/ui/ProgressBar.vue";
import {useProfileStore} from "@/stores";

const profileStore = useProfileStore();
</script>

<style scoped>

</style>