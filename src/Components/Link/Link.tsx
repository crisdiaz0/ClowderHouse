import React from 'react';
import './Link.css';

export interface LinkProps {
	text: string;
	link: string;
	isPrimary?: boolean;
	clickable?: boolean;
}

export const Link = ({
	text,
	link,
	isPrimary = false,
	clickable = true,
}: LinkProps) => {
	return (
		<span className={`link-container ${isPrimary ? 'primary' : ''}`}>
			{clickable ? (
				<a href={link} className="link">
					{text}
				</a>
			) : (
				<>{text}</>
			)}
		</span>
	);
};
