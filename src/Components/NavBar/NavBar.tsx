import React from 'react';
import './NavBar.css';
import { Link } from '../Link/Link';
import images from '../../assets/Images';

export const NavBar = () => {
	return (
		<>
			{/* <div className={`message-header`}>
				<div className="message-header__close">x</div>
				<div className="message-header__text">
					We have kittens available for adoption! Contact us for
					availability, and visit our{' '}
					<a href="/?p=gallery">gallery</a> to see more!
				</div>
			</div> */}
			<div className="nav-bar">
				<div className="nav-bar__logo">
					<img src={images[0].src} alt={images[0].alt} />
				</div>
				<div className="nav-bar__links">
					<Link text="Home" link="/" />
					<Link text="Adoption" link="/?p=adoption" />
					<Link text="Gallery" link="/?p=gallery" />
				</div>
			</div>
		</>
	);
};
