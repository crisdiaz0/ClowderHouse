import React from 'react';
import GalleryPage from '../GalleryPage/GalleryPage';
import { LandingPage } from '../LandingPage/LandingPage';
import AdoptionPage from '../AdoptionPage/AdoptionPage'

const HomePage = (props: any) => {
	const location = props.location;

	return location.search != null ? (
		location.search === '?p=gallery' ? (
			<GalleryPage />
		) : location.search === '?p=adoption' ? (
			<AdoptionPage />
		) : (<LandingPage />)
	) : (
		<LandingPage />
	);
};

export default HomePage;
