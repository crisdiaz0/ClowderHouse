import React from 'react';
import { galleryImages } from '../../../assets/Images';
import LazyLoad from 'react-lazy-load';
import './GalleryPage.css';

const GalleryPage = () => {
	return (
		<div className="gallery-page">
			<div className="gallery-page__image-container">
				{galleryImages.map((i) => (
					<LazyLoad offset={250}>
						<img src={i.src} alt={i.alt} />
					</LazyLoad>
				))}
				{galleryImages.map((i) => (
					<LazyLoad offset={250}>
						<img src={i.src} alt={i.alt} />
					</LazyLoad>
				))}
				{galleryImages.map((i) => (
					<LazyLoad offset={250}>
						<img src={i.src} alt={i.alt} />
					</LazyLoad>
				))}
			</div>
		</div>
	);
};

export default GalleryPage;
