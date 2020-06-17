import React from 'react';
import './NavBar.css';
import { LinkProps, Link } from '../Link/Link';
import images from '../../assets/Images';

export const NavBar = () => {
	const ContentLinks: LinkProps[] = [
		{ text: 'Volunteer', link: '/#volunteer' },
		{ text: 'Cat Admittance', link: '/#cat-admittance' },
		{ text: 'Adopt', link: '/#adopt' },
		{ text: 'FAQs', link: '/#faqs' },
	];

	return (
		<div className="NavBar">
			<div className="left">
				<div className="main-logo">
					<img
						className="lozad"
						src={images[0].src}
						alt={images[0].alt}
					/>
				</div>
				<div>
					<Link text="Home" link="/" isPrimary={false} />
					<Link text="Gallery" link="/gallery" isPrimary={false} />
				</div>
			</div>

			<div className="main-links">
				{ContentLinks.map((link) => (
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
