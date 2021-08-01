import React from 'react';

function Bag({ width = 35, height = 35, color = 'black' }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="prefix__ionicon"
			viewBox="0 0 512 512"
			width={width}
			height={height}
			style={{ color: `${color}` }}
		>
			<title>{'Bag Handle'}</title>
			<path
				d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
			<path
				d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	);
}

export default Bag;
