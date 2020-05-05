import React, { useState } from 'react';
import './LandingPage.css';
import { InfoCardContainer } from '../../InfoCard/InfoCardContainer';
import { Section } from '../../Section/Section';
import { NavBar } from '../../NavBar/NavBar';
import {
	mainSection,
	volunteerSection,
	catAdmittanceSection,
	adoptSection,
	faqSection,
} from '../../../Resources/Bodies';
import images from '../../../assets/Images';

export const LandingPage: React.FC = () => {
	const [hidden, setHidden] = useState(false);

	return (
		<div className="LandingPage">
			<div className={`donation-header ${hidden ? 'hidden' : ''}`}>
				<div
					className="donation-header-close"
					onClick={() => setHidden(true)}
				>
					&#10006;
				</div>
				<div className="donation-header-text">
					Give STL Day is approaching on Thursday, May 7! Please
					click&nbsp;
					<a href="https://www.givestlday.org/index.php?section=organizations&fwID=88">
						here
					</a>
					&nbsp;to donate to Clowder House <br />
					We appreciate your donations and continued support. Thank
					you!
				</div>
			</div>

			<NavBar />

			<div className="landing-body">
				<Section
					id="main"
					header={`Life Time Care For Your Feline Friend`}
					body={mainSection}
					img={images[1]}
				/>

				<InfoCardContainer />

				<Section
					id="volunteer"
					header={`Become a Volunteer`}
					body={volunteerSection}
					isReversed={true}
					img={images[2]}
				/>

				<Section
					id="cat-admittance"
					header={`Cat Admittance`}
					body={catAdmittanceSection}
					img={images[3]}
				/>

				<Section
					id="adopt"
					header={`Adopt`}
					body={adoptSection}
					isReversed={true}
					img={images[4]}
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
