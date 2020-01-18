import React from 'react';
import { InfoCardProps, InfoCard } from './InfoCard';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
	faHandsHelping,
	faHandHoldingUsd
} from '@fortawesome/free-solid-svg-icons';
import './InfoCardContainer.css';
import {
	contactCardSection,
	donationCardSection,
	volunteerCardSection
} from '../../Resources/Bodies';

export const InfoCardContainer = () => {
	const cards: InfoCardProps[] = [
		{
			icon: faClock,
			header: 'Contact Us',
			body: contactCardSection
		},
		{
			icon: faHandHoldingUsd,
			header: 'Make a donation',
			body: donationCardSection
		},
		{
			icon: faHandsHelping,
			header: 'Volunteer',
			body: volunteerCardSection
		}
	];
	return (
		<div className="InfoCardContainer">
			{cards.map(card => (
				<InfoCard
					key={card.header}
					icon={card.icon}
					header={card.header}
					body={card.body}
				/>
			))}
		</div>
	);
};
