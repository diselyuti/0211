<template>
    <form @submit.prevent="addReview" ref="formRef" class="w-full bg-gray-100 p-5 rounded-md">
        <label class="block text-sm mb-1" for="name">
            Name
        </label>
        <input ref="nameInputRef" class="mb-2 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" required v-model="review.name">
        <label class="block text-sm mb-1" for="review">
            Review
        </label>
        <textarea class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" id="review" type="text" placeholder="Review" required v-model="review.text"></textarea>
        <div class="flex justify-center">
            <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2 mt-3" type="submit">
                Send Review
            </button>
        </div>
    </form>
</template>

<script setup lang="ts">
import {Review} from "@/types";
import {onMounted, onUnmounted, ref} from "vue";
import {useProfileStore} from "@/stores";

const nameInputRef = ref<HTMLInputElement>();
const formRef = ref<HTMLFormElement>();
const profileStore = useProfileStore();

const review = ref<Review>({
    id: '',
    name: '',
    text: '',
    createDate: 0,
});

const addReview = () => {
    profileStore.addReview(review.value);
    nameInputRef.value?.focus();
    restoreReview();
}
const restoreReview = () => {
    review.value = {
        id: '',
        name: '',
        text: '',
        createDate: 0,
    }
}

// submit form on keyboard shortcut: Ctrl + Enter
const submitForm = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'Enter') {
        formRef.value?.requestSubmit();
    }
}

onMounted(() => {
    window.addEventListener('keydown', submitForm);
})

onUnmounted(() => {
    window.removeEventListener('keydown', submitForm);
})
</script>

<style scoped>

</style>