import {createRouter, createWebHistory} from "vue-router";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Profile',
			component: ProfileView,
		},
	],
})

export default router