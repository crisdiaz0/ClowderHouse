import React, { useState } from 'react';
import './NavBar.css';
import { Link } from '../Link/Link';
import images from '../../assets/Images';

export const NavBar = () => {
	const [hidden, setHidden] = useState(false);

	return (
		<>
			<div className={`message-header ${hidden ? 'hidden' : ''}`}>
				<div
					className="message-header__close"
					onClick={() => setHidden(true)}
				>
					&#10006;
				</div>
				<div className="message-header__text">
					Kittens up for adoption!
				</div>
			</div>
			<div className="nav-bar">
				<div className="nav-bar__logo">
					<img src={images[0].src} alt={images[0].alt} />
				</div>
				<div className="nav-bar__links">
					<Link text="Home" link="/" isPrimary={false} />
					<Link text="Gallery" link="/gallery" isPrimary={false} />
				</div>
			</div>
		</>
	);
};
