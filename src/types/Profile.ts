import {Service} from "./Service";
import {Review} from "@/types/Review";

export interface Profile {
	id: string;
	name: string;
	avatar: string;
	occupation: string;
	about: string;
	services: Service[];
	reviews: Review[];
	likes: number;
}