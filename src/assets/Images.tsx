import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import logo from './clowderlogo.gif';

export interface image {
	id: number;
	src: string;
	alt: string;
}

const images: image[] = [
	{ id: 0, src: pic1, alt: '' },
	{ id: 1, src: logo, alt: 'Clowder House' },
	{ id: 2, src: pic2, alt: '' }
];

export default images;
