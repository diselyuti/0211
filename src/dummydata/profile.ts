import {Profile, Review, Service} from "@/types";

export default {
	id: '1',
	name: 'John Doe',
	occupation: 'Web Developer',
	avatar: '',
	services: [
		{
			id: '1',
			name: 'HTML',
			value: 13,
		},
		{
			id: '2',
			name: 'CSS',
			value: 95,
		},
		{
			id: '3',
			name: 'JavaScript',
			value: 77,
		},
		{
			id: '4',
			name: 'Vue',
			value: 100,
		}
	] as Service[],
	reviews: [
		{
			id: '1',
			name: 'John Doe',
			createDate: 1649865600000,
			text: 'Hello!, I am John Doe. I am a web developer. I will find the best offers for you. My services are absolutely free.',
		},
		{
			id: '2',
			name: 'Some men',
			createDate: 1649965600000,
			text: 'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.',
		},
	] as Review[],
	about: 'I will find the best offers for you. My services are absolutely free.',
	likes: 34,
} as Profile