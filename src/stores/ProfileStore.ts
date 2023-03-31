import {defineStore} from "pinia";
import {Profile, Review, Service} from "@/types";
import { v4 as uuidv4 } from 'uuid';
import profile from "@/dummydata/profile";

export const useProfileStore = defineStore('profile', {
	state: () => profile, // dummy data used for development and demonstration purposes
	getters: {
		servicesTotal: (state) => state.services.reduce((acc, service) => acc + service.value, 0),
		servicesMax: (state) => state.services.reduce((acc, service) => Math.max(acc, service.value), 0),
		reviewsTotal: (state) => state.reviews.length,
		orderedReviews: (state) => state.reviews.sort((a, b) => b.createDate - a.createDate),
		firstNReviews: (state) => (n: number) => state.reviews.slice(0, n),
	},
	actions: {
		addReview(review: Review) {
			review.id = uuidv4();
			review.createDate = Date.now();
			this.reviews.push(review);
		},
	},
	persist: true,
});