<template>
    <section class="my-5">
        <header class="flex justify-between items-center mb-2">
            <h2 class="text-base font-bold">
                Latest reviews
                <button v-if="profileStore.reviewsTotal > reviewsPerPage" class="text-sm text-blue-600 underline font-normal mx-2" @click="isShowAllReviews = !isShowAllReviews">
                    {{ isShowAllReviews ? 'Hide all reviews' : 'All reviews' }}
                </button>
            </h2>
            <span class="flex gap-3">
                <span v-if="profileStore.likes" class="flex gap-1 items-center text-xs"><img src="@/assets/icons/like.svg" alt="likes">{{ profileStore.likes }}</span>
                <span v-if="profileStore.reviewsTotal > 0" class="flex gap-1 items-center text-xs"><img src="@/assets/icons/comment.svg" alt="comments">{{ profileStore.reviewsTotal }}</span>
            </span>
        </header>
        <div class="flex flex-col gap-2" v-if="profileStore.reviewsTotal > 0">
            <profile-review v-if="isShowAllReviews" v-for="review in profileStore.reviews" :review="review"/>
            <profile-review v-else v-for="review in profileStore.firstNReviews(reviewsPerPage)" :review="review"/>
        </div>
        <div v-else class="flex items-center justify-center w-full h-40 text-gray-400">
            No reviews yet
        </div>
    </section>
</template>

<script setup lang="ts">
import ProfileReview from "@/components/ui/ProfileReview.vue";
import {useProfileStore} from "@/stores";
import {ref} from "vue";

const profileStore = useProfileStore();
const isShowAllReviews = ref(false);
const reviewsPerPage = 3;
</script>

<style scoped>

</style>