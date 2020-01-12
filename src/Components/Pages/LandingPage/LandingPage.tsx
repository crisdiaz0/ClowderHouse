import React from 'react';
import './LandingPage.css';
import { InfoCardContainer } from '../../InfoCard/InfoCardContainer';
import { NavBar } from '../../NavBar/NavBar';

export const LandingPage: React.FC = () => {
	return (
		<div className="LandingPage">
			<NavBar />
			<div className="main-section">
				<h1>Life Time Care For Your Feline Friend</h1>
				<div>About Us section with addition text</div>
			</div>
			<InfoCardContainer />
		</div>
	);
};
