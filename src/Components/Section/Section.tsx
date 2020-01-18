import React from 'react';
import './Section.css';

interface SectionProps {
	id: string;
	header: string;
	body: React.ReactChild;
	img?: string;
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
		<div className="section-text-container" id={id}>
			<h1 className="section-header">{header}</h1>
			<div className="section-body">{body}</div>
		</div>
	);

	const imgContainer = <div className="section-img-container">{img}</div>;

	return (
		<div className={`Section`}>
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
