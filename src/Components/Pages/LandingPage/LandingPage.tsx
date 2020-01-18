import React from 'react';
import './LandingPage.css';
import { InfoCardContainer } from '../../InfoCard/InfoCardContainer';
import { Section } from '../../Section/Section';
import { NavBar } from '../../NavBar/NavBar';

export const LandingPage: React.FC = () => {
	return (
		<div className="LandingPage">
			<NavBar />

			<Section
				id="main"
				header={`Life Time Care For Your Feline Friend`}
				description={[
					`Clowder House Foundation, Inc. provides lifetime care for
					your cat or cats when you are no longer able to do so. We
					offer a tranquil setting with plenty of cat toys, furniture
					and sunny windows for your cat’s enjoyment. Music, human
					love and companionship will be a part of your cat’s everyday
					life.`,
					`We are a no-kill, minimum-cage facility, and we make every effort to accommodate your cat's special needs. 
					We recognize each cat's individuality and strive to make all our residents comfortable. 
					Cages are used only for new residents until they become acclimated, or for sick or injured cats.`,
					`Clowder House also provides homes for abused,
					neglected and un-adoptable cats as space and funds allow. 
					Rescued cats that can be socialized are available for adoption.`,
					`We provide many visitation opportunities for continued contact between you and your cat.`
				]}
			/>

			<InfoCardContainer />

			<Section
				id="volunteer"
				header={`Become a Volunteer`}
				description={[
					`We have approximately 300 cats in our care, and providing these cats with their daily needs requires a large volunteer base. 
					Clowder House provides all on-site training and lots of loving cats!`,
					`We are looking for caring volunteers who:`,
					`Are age 16 or older`,
					`Can provide own transportation to and from our facility`,
					`Are available one or multiple 3-4 hour shift, day or evening, any day of the week`,
					`Are seeking to fulfill high school or college required community hours`,
					`Can participate in job-sponsored volunteer programs (check with employer)`
				]}
				isReversed={true}
			/>

			<Section
				id="cat-admittance"
				header={`Cat Admittance`}
				description={[
					`Clowder House accepts new residents with a minimum placement fee. 
					Fees include all food, vet care, necessary medicine, etc. and range from $1,000 to $3,000 per cat. 
					On average, it’s estimated that a cat owner spends about $7,000-$10,000 to care for a cat during its life (estimated lifespan 15 years)(question about this)`,
					`Please contact us with any questions you may have about placing a cat.`,
					'While we are not set up for short-term care, if you have already made arrangements for future lifetime care, we can assist you with boarding in emergency situations.',
					'Once a residential application is made, you will be provided with all necessary papers and “call tags” for your home.',
					'Foundation funds may be available for special needs and multiple cat situations. We would be delighted to work with you or your legal advisor on planning options.'
				]}
			/>

			<Section
				id="adopt"
				header={`Adopt`}
				description={[
					`Have a little room at your house for a loving, four-legged friend? Since Clowder House provides homes for abused and neglected cats as space and funds allow, rescued cats that can be socialized are available for adoption. We have lots of cats and kittens who need homes. Please contact us`
				]}
				isReversed={true}
			/>

			<Section id="faqs" header={`FAQs`} description={[`faqs`]} />
		</div>
	);
};
