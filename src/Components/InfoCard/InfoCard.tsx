import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import './InfoCard.css';

export interface InfoCardProps {
	icon: IconDefinition;
	header: string;
	body: React.ReactChild;
}

export const InfoCard = ({ icon, header, body }: InfoCardProps) => {
	return (
		<div className="InfoCard">
			<div className="info-card-logo">
				<FontAwesomeIcon icon={icon} size="2x" />
			</div>
			<div className="info-card-header">{header}</div>
			<div className="info-card-body">{body}</div>
		</div>
	);
};
