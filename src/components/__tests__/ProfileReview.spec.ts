import { mount } from '@vue/test-utils';
import { defineComponent } from 'vue';
import { Review } from '@/types';
import ProfileReview from '@/components/ui/ProfileReview.vue';
import { describe, it, expect } from "vitest";

/**
 * @vitest-environment jsdom
 */

describe('ProfileReview', () => {
	const review: Review = {
		id: '1',
		name: 'John Doe',
		text: 'This is a great product!',
		createDate: 1648886400000, // April 2, 2022
	};

	it('displays the name and formatted date of the review', async () => {
		const wrapper = mount(ProfileReview, {
			props: {
				review,
			},
		});

		const name = wrapper.find('#review-name');
		expect(name.text()).toBe(review.name);

		const date = wrapper.find('#review-create-date');
		expect(date.text()).toBe('2 Apr 2022');
	});

	it('displays the text of the review', async () => {
		const wrapper = mount(ProfileReview, {
			props: {
				review,
			},
		});

		const text = wrapper.find('#review-text');
		expect(text.text()).toBe(review.text);
	});

	it('displays the formatted date using the correct format', async () => {
		const wrapper = mount(ProfileReview, {
			props: {
				review,
			},
		});

		const date = wrapper.find('#review-create-date');
		expect(date.text()).toMatch(/^\d{1,2} [A-Za-z]{3} \d{4}$/);
	});

	it('renders the review content inside a review box', async () => {
		const wrapper = mount(ProfileReview, {
			props: {
				review,
			},
		});

		const reviewBox = wrapper.find('.review');
		expect(reviewBox.exists()).toBe(true);
		expect(reviewBox.text()).toContain(review.text);
	});
});