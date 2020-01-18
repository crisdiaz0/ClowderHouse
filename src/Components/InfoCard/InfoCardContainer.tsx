import React from 'react';
import { InfoCardProps, InfoCard } from './InfoCard';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
	faHandsHelping,
	faHandHoldingUsd
} from '@fortawesome/free-solid-svg-icons';
import './InfoCardContainer.css';
import { Link } from '../Link/Link';

export const InfoCardContainer = () => {
	const cards: InfoCardProps[] = [
		{
			icon: faClock,
			header: 'Contact Us',
			body: (
				<>
					<p>
						Clowder House is open to visitors 2 - 4PM on the 1st
						Sunday of each month
					</p>
					<address>
						Clowder House Foundation, Inc.
						<br /> 3134 Wyoming Street <br />
						St. Louis, MO 63118
					</address>
					<p>
						Phone:
						<Link
							text="314-776-PURR (7877)"
							link="tel:314-776-7877"
						/>
						<br />
						Email:
						<Link
							text="clowderhouse@juno.com"
							link="mailto:clowderhouse@juno.com"
						/>
					</p>
				</>
			)
		},
		{
			icon: faHandHoldingUsd,
			header: 'Make a donation',
			body: (
				<>
					<p>
						The generous donations of cat lovers enable us to
						provide these valuable services. With increased support,
						we will be able to expand the scope of services we
						offer.{' '}
					</p>
					<Link
						text="Donate"
						link="https://www.paypal.com/donate/?token=ZKMIG8ww5AHbt0q67XmP_8rrAE88huPi1V95ShzJCSjywKTAov19CUD4dTQ1V_xnIFRdBG"
					/>
				</>
			)
		},
		{
			icon: faHandsHelping,
			header: 'Volunteer',
			body: (
				<>
					<p>
						Unlike most animal shelters, Clowder House is a
						volunteer-only organization. We take pride in the fact
						that all money raised and donated goes directly towards
						the care of our cats and upkeep of our facility.
					</p>
					<Link text="Learn How You Can Help" link="#volunteer" />
				</>
			)
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
