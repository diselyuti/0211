import {Profile, Review, Service} from "@/types";

export default {
	id: '1',
	name: 'Eva Jonson',
	occupation: 'Sales Manager',
	avatar: '',
	services: [
		{
			id: '1',
			name: 'Manual tour booking',
			value: 11,
		},
		{
			id: '2',
			name: 'Package tours',
			value: 3,
		},
		{
			id: '3',
			name: 'Hotels',
			value: 1,
		},
	] as Service[],
	reviews: [
		{
			id: '1',
			name: 'Samuel Jackson',
			createDate: 1649865600000,
			text: 'Hey Eva! You\'re cool. Nice pic!',
		},
		{
			id: '2',
			name: 'Angela Deimon',
			createDate: 1649965600000,
			text: 'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.',
		},
		{
			id: '3',
			name: 'Ronald Harris',
			createDate: 1650065600000,
			text: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?',
		},
		{
			id: '4',
			name: 'Samuel Jackson',
			createDate: 1650065600000,
			text: 'Hello',
		},
	] as Review[],
	about: 'I will find the best offers for you. My services are absolutely free.',
	likes: 131,
} as Profile