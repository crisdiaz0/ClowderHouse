import pic1 from './pic1.jpg';

export interface image {
	id: number;
	src: string;
	alt: string;
}

const images: image[] = [{ id: 0, src: pic1, alt: '' }];

export default images;
