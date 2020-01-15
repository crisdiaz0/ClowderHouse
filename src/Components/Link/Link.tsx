import React from 'react';
import './Link.css';

export interface LinkProps {
	text: string;
	link: string;
	isPrimary?: boolean;
}

export const Link = ({ text, link, isPrimary = false }: LinkProps) => {
	return (
		<span className={`link-container ${isPrimary ? 'primary' : ''}`}>
			<a href={link} className="link">
				{text}
			</a>
		</span>
	);
};
