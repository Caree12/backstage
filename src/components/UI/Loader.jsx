import React from 'react';

export default function Loader (props) {
	// DEFAULT - loads centered in a smaller space
	// FULL PAGE - props.fullPage

	return (
		<div className={props.fullPage ? "u_center" : ''}>
			<svg style={{margin: 'auto', background: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto', animationPlayState: 'running', animationDelay: '0s'}} width="150px" height="150px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
				<path d="M10 50A40 40 0 0 0 90 50A40 42.5 0 0 1 10 50" fill="#3dcff9" stroke="none" style={{animationPlayState: 'running', animationDelay: '0s'}} transform="rotate(30.9319 50 51.25)">
				  <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51.25;360 50 51.25" style={{animationPlayState: 'running', animationDelay: '0s'}}></animateTransform>
				</path>
			</svg>
		</div>
	);
};