<template>
    <div class="w-full flex justify-between">
        <div class="relative h-6 w-full flex items-center">
            <h3 class="relative z-20 text-sm px-2 line-clamp-1 text-[#333333]">{{ title }}</h3>
            <div class="absolute h-6 left-0 top-0 z-0 rounded-r-md transition duration-500" :style="`width: ${100*value/max}%`" :class="100*value/max > 79 ? 'bg-green-100' : 'bg-blue-100'"/>
        </div>
        <span class="px-[48px] font-bold text-sm text-[#333333]">{{ value }}</span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    value: number;
    max: number;
    title: string;
}>();
</script>

<style scoped>

</style>