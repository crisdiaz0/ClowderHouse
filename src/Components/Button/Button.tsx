import React from 'react';
import './Button.css';

interface ButtonProps {
	text: string;
	link: string;
}

export const Button = ({ text, link }: ButtonProps) => {
	return <button className="Button">yeet</button>;
};
