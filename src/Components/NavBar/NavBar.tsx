import React from 'react';
import './NavBar.css';
import { Link } from '../Link/Link';
import images from '../../assets/Images';

export const NavBar = () => {
	return (
		<>
			<div className={`message-header`}>
				<div className="message-header__close">{/* &#10006; */}</div>
				<div className="message-header__text">
					We have kittens available for adoption! (All but the Siamese
					kittens are available) Visit our{' '}
					<a href="/gallery">gallery</a> to see more!
				</div>
			</div>
			<div className="nav-bar">
				<div className="nav-bar__logo">
					<img src={images[0].src} alt={images[0].alt} />
				</div>
				<div className="nav-bar__links">
					<Link text="Home" link="/" />
					<Link text="Gallery" link="/gallery" />
				</div>
			</div>
		</>
	);
};
