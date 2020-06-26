import logo from './clowderlogo.gif';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
import pic9 from './pic9.jpg';
import pic10 from './pic10.jpg';
import pic11 from './pic11.jpg';
import pic12 from './pic12.jpg';
import pic13 from './pic13.jpg';
import pic14 from './pic14.jpg';
import pic15 from './pic15.jpg';
import pic16 from './pic16.jpg';
import pic17 from './pic17.jpg';
import pic18 from './pic18.jpg';
import pic19 from './pic19.jpg';

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

export const galleryImages: image[] = [
	{ src: pic15, alt: '' },
	{ src: pic16, alt: '' },
	{ src: pic17, alt: '' },
	{ src: pic18, alt: '' },
	{ src: pic19, alt: '' },
	{ src: pic8, alt: '' },
	{ src: pic9, alt: '' },
	{ src: pic10, alt: '' },
	{ src: pic11, alt: '' },
	{ src: pic12, alt: '' },
	{ src: pic13, alt: '' },
	{ src: pic6, alt: '' },
	{ src: pic7, alt: '' },
	{ src: pic14, alt: '' },
];

export default images;
