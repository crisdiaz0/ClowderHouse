import React from 'react';

import './NavBar.css';
import { LinkProps, Link } from '../Link/Link';

export const NavBar = () => {
	const ContentLinks: LinkProps[] = [
		{ text: 'Volunteer', link: '#volunteer' },
		{ text: 'Cat Admittance', link: '#cat-admittance' },
		{ text: 'Adopt', link: '#adopt' },
		{ text: 'FAQs', link: '#faqs' }
	];

	return (
		<div className="NavBar">
			<div className="logo">Clowder House Logo</div>

			<div className="main-links">
				{ContentLinks.map(link => (
					<Link
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
