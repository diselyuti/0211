import ProgressBar from '@/components/ui/ProgressBar.vue';
import {shallowMount} from "@vue/test-utils";
import { describe, it, expect } from "vitest";

/**
 * @vitest-environment jsdom
 */

describe('ProgressBar', () => {
	it('renders the title correctly', () => {
		const wrapper = shallowMount(ProgressBar, {
			props: {
				value: 50,
				max: 100,
				title: 'My Title'
			}
		});

		expect(wrapper.find('h3').text()).toBe('My Title');
	});

	it('renders the value correctly', () => {
		const wrapper = shallowMount(ProgressBar, {
			props: {
				value: 50,
				max: 100,
				title: 'My Title'
			}
		});

		expect(wrapper.find('span').text()).toBe('50');
	});

	it('sets the progress bar width correctly', () => {
		const wrapper = shallowMount(ProgressBar, {
			props: {
				value: 50,
				max: 100,
				title: 'My Title'
			}
		});

		// @ts-ignore
		expect(wrapper.find('.absolute').element.style.width).toBe('50%');
	});

	it('sets the progress bar background color correctly when value is greater than 79% of max', () => {
		const wrapper = shallowMount(ProgressBar, {
			props: {
				value: 80,
				max: 100,
				title: 'My Title'
			}
		});

		expect(wrapper.find('.absolute').classes()).toContain('bg-green-100');
	});

	it('sets the progress bar background color correctly when value is less than or equal to 79% of max', () => {
		const wrapper = shallowMount(ProgressBar, {
			props: {
				value: 50,
				max: 100,
				title: 'My Title'
			}
		});

		expect(wrapper.find('.absolute').classes()).toContain('bg-blue-100');
	});
});
