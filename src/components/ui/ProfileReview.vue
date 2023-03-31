<template>
    <article class="w-full">
        <header class="w-full flex gap-2 items-center">
            <h3 class="text-base text-gray-700" id="review-name">{{ review.name }}</h3>
            <p class="text-xs text-gray-500" id="review-create-date">{{ formattedDate }}</p>
        </header>
        <div class="review mt-2 px-5 py-2">
            <p class="text-sm text-gray-700" id="review-text">{{ review.text }}</p>
        </div>
    </article>
</template>

<script setup lang="ts">
import { Review } from "@/types";
import { computed } from "vue";

const props = defineProps<{
    review: Review;
}>();

const formattedDate = computed(() => {
    const date = new Date(props.review.createDate);
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
});
</script>

<style scoped lang="scss">
.review{
    border: 2px solid #C4CBCF;
    position: relative;
    box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);
    background-color: #F2FBFF;
}
.review:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 6px solid #C4CBCF;
    border-right: 6px solid transparent;
    border-top: 6px solid transparent;
    border-bottom: 6px solid #C4CBCF;
    left: 24px;
    top: -12px;
}
.review:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 4px solid #F2FBFF;
    border-right: 4px solid transparent;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #F2FBFF;
    left: 26px;
    top: -7px;
}
</style>