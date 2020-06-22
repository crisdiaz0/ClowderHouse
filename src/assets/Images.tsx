import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import logo from './clowderlogo.gif';

export interface image {
	src: string;
	alt: string;
}

const images: image[] = [
	{ src: logo, alt: 'Clowder House' },
	{ src: pic2, alt: '' },
	{ src: pic3, alt: '' },
	{ src: pic4, alt: '' },
	{ src: pic5, alt: '' },
];

export const galleryImages: image[] = [...images];

export default images;
