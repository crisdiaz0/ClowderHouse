import React from 'react';
import './NavLink.css';

export interface NavLink {
	text: string;
	link: string;
	isPrimary?: boolean;
}

export const NavLink = ({ text, link, isPrimary = false }: NavLink) => {
	return (
		<div className={`NavLink ${isPrimary ? 'primary' : ''}`}>
			<a href={link} className="link">
				{text}
			</a>
		</div>
	);
};
