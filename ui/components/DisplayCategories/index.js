import React from 'react';
import Image from 'next/image';

export default function Categories() {
	return (
		<div className="container my-5">
			<div className="columns py-5 px-5 card" style={{ borderRadius: '15px' }}>
				<div className="column is-flex is-flex-direction-column">
					<Image src="/vercel.svg" height={50} width={50} />
					<p className="is-size-5 has-text-centered">Electronics</p>
				</div>
				<div className="column is-flex is-flex-direction-column">
					<Image src="/vercel.svg" height={50} width={50} />
					<p className="is-size-5 has-text-centered">Jewelery</p>
				</div>
				<div className="column is-flex is-flex-direction-column">
					<Image src="/vercel.svg" height={50} width={50} />
					<p className="is-size-5 has-text-centered">Men's clothing</p>
				</div>
				<div className="column is-flex is-flex-direction-column">
					<Image src="/vercel.svg" height={50} width={50} />
					<p className="is-size-5 has-text-centered">"Women's clothing"</p>
				</div>
			</div>
		</div>
	);
}
