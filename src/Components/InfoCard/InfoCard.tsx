import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import './InfoCard.css';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface InfoCardProps {
	icon: IconDefinition;
	header: string;
	body: React.ReactChild;
}

export const InfoCard = ({ icon, header, body }: InfoCardProps) => {
	return (
		<div className="InfoCard">
			<div className="info-card-header">
				<FontAwesomeIcon
					icon={icon as IconProp}
					size="2x"
					className="info-card-header-logo"
				/>
				<div className="info-card-header-text">{header}</div>
			</div>

			<div className="info-card-body">{body}</div>
		</div>
	);
};
