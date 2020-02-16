import React from 'react';
import './LandingPage.css';
import { InfoCardContainer } from '../../InfoCard/InfoCardContainer';
import { Section } from '../../Section/Section';
import { NavBar } from '../../NavBar/NavBar';
import {
	mainSection,
	volunteerSection,
	catAdmittanceSection,
	adoptSection,
	faqSection
} from '../../../Resources/Bodies';
import images from '../../../assets/Images';

export const LandingPage: React.FC = () => {
	return (
		<div className="LandingPage">
			<NavBar />

			<div className="landing-body">
				<Section
					id="main"
					header={`Life Time Care For Your Feline Friend`}
					body={mainSection}
					img={images[2]}
				/>

				<InfoCardContainer />

				<Section
					id="volunteer"
					header={`Become a Volunteer`}
					body={volunteerSection}
					isReversed={true}
					img={images[3]}
				/>

				<Section
					id="cat-admittance"
					header={`Cat Admittance`}
					body={catAdmittanceSection}
					img={images[4]}
				/>

				<Section
					id="adopt"
					header={`Adopt`}
					body={adoptSection}
					isReversed={true}
					img={images[5]}
				/>

				<div className="faqs" id="faqs">
					<div className="faqs-container">
						<h1>FAQs</h1>
						{faqSection}
					</div>
				</div>
			</div>
		</div>
	);
};
