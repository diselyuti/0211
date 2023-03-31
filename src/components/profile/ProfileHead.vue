<template>
    <section class="flex items-center">
        <img
            v-if="!profileStore.avatar.length"
            src="@/assets/images/profile/profile-template.jpg"
            alt="portfolio picture"
            class="w-[124px] h-[124px] rounded-full object-cover object-center z-10"
        >
        <img
            v-else
            :src="profileStore.avatar"
            alt="portfolio picture"
            class="w-[124px] h-[124px] rounded-full object-cover object-center z-10"
        >
        <div class="-ml-[45px]">
            <div class="pl-[55px]">
                <h1 class="text-base font-bolt w-full line-clamp-1">{{ profileStore.name }}</h1>
                <h2 class="text-xs text-gray-500 line-clamp-1">{{ profileStore.occupation }}</h2>
            </div>
            <div class="mt-2 w-full pl-[55px] pr-4 bg-yellow-100 z-0 rounded-md border-gray-200 border max-h-[55px]">
                <p class="text-sm py-1 line-clamp-2">
                    {{ profileStore.about }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {useProfileStore} from "@/stores";

const profileStore = useProfileStore();
</script>

<style scoped>

</style>