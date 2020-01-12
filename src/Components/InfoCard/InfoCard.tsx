import React from 'react';
import './InfoCard.css';

export interface InfoCardProps {
	logo?: string;
	header: string;
	text: string;
}

export const InfoCard = ({ logo, header, text }: InfoCardProps) => {
	return (
		<div className="InfoCard">
			<div className="info-card-logo">{logo}</div>
			<div className="info-card-header">{header}</div>
			<div className="info-card-text">{text}</div>
		</div>
	);
};
