import React from 'react';
import { NavLink } from '../NavLink/NavLink';
import './NavBar.css';

export const NavBar = () => {
	const ContentLinks: NavLink[] = [
		{ text: 'Volunteer', link: '#' },
		{ text: 'Cat Admittance', link: '#' },
		{ text: 'Adopt', link: '#' },
		{ text: 'FAQs', link: '#' },
		{ text: 'Contact', link: '#contact' }
	];

	return (
		<div className="NavBar">
			<div className="logo">Clowder House Logo</div>

			<div className="main-links">
				{ContentLinks.map(link => (
					<NavLink
						key={link.text}
						text={link.text}
						link={link.link}
						isPrimary={link.isPrimary}
					/>
				))}
			</div>
		</div>
	);
};
