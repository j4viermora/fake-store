import * as React from 'react';

function Favorite(props) {
	const { width, height, color } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="prefix__ionicon is-primary"
			viewBox="0 0 512 512"
			width={width}
			height={height}
			{...props}
			style={{ color: `${color}` }}
		>
			<title>{'Heart'}</title>
			<path
				d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={32}
			/>
		</svg>
	);
}

export default Favorite;
