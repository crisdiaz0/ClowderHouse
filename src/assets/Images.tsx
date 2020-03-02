import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import logo from './clowderlogo.gif';

export interface image {
	id: number;
	src: string;
	alt: string;
}

const images: image[] = [
	{ id: 1, src: logo, alt: 'Clowder House' },
	{ id: 2, src: pic2, alt: '' },
	{ id: 3, src: pic3, alt: '' },
	{ id: 4, src: pic4, alt: '' },
	{ id: 5, src: pic5, alt: '' }
];

export default images;
