import React from 'react';
import { InfoCardProps, InfoCard } from './InfoCard';
import './InfoCardContainer.css';

export const InfoCardContainer = () => {
	const cards: InfoCardProps[] = [
		{
			logo: '',
			header: 'Hours',
			text:
				'temp additional text temp additional text temp additional text temp additional text temp additional text temp additional text'
		},
		{
			logo: '',
			header: 'Make a donation',
			text:
				'temp additional text temp additional text temp additional text temp additional text temp additional text temp additional text'
		},
		{
			logo: '',
			header: 'Volunteer',
			text:
				'temp additional text temp additional text temp additional text temp additional text temp additional text temp additional text'
		}
	];
	return (
		<div className="InfoCardContainer">
			{cards.map(card => (
				<InfoCard
					key={card.header}
					logo={card.logo}
					header={card.header}
					text={card.text}
				/>
			))}
		</div>
	);
};
