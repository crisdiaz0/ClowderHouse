import React from 'react';

export interface FAQProps {
	title: string;
	body: string;
}

export const FAQ = ({ title, body }: FAQProps) => {
	return (
		<>
			<b>{title}</b>
			<p style={{ marginTop: 4, marginBottom: 24 }}>{body}</p>
		</>
	);
};
