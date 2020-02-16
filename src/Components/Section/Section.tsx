import React from 'react';
import './Section.css';
import { image } from '../../assets/Images';

interface SectionProps {
	id: string;
	header: string;
	body: React.ReactChild;
	img?: image;
	isReversed?: boolean;
}

export const Section = ({
	id,
	header,
	body,
	img,
	isReversed = false
}: SectionProps) => {
	const textContainer = (
		<div className="section-text-container">
			<h1 className="section-header">{header}</h1>
			<div className="section-body">{body}</div>
		</div>
	);

	const imgContainer = (
		<div className="section-img-container">
			{img && <img src={img.src} alt={img.alt} />}
		</div>
	);

	return (
		<div id={id} className={`${isReversed ? 'reversed' : 'normal'}`}>
			{isReversed ? (
				<>
					{imgContainer}
					{textContainer}
				</>
			) : (
				<>
					{textContainer}
					{imgContainer}
				</>
			)}
		</div>
	);
};
