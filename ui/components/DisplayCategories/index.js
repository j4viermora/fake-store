import React from 'react';
import Dress from '../../Icons/Dress';
import Electronics from '../../Icons/Electronics';
import Jewelery from '../../Icons/Jewelery';
import Shirt from '../../Icons/Shirt';

export default function Categories() {
	return (
		<div className="container my-5">
			<div className="columns py-5 px-5 card" style={{ borderRadius: '15px' }}>
				<div className="column is-flex is-flex-direction-column is-align-items-center">
					<Electronics height={50} width={50} />
					<p className="is-size-5 has-text-centered">Electronics</p>
				</div>
				<div className="column is-flex is-flex-direction-column is-align-items-center">
					<Jewelery height={50} width={50} />
					<p className="is-size-5 has-text-centered">Jewelery</p>
				</div>
				<div className="column is-flex is-flex-direction-column is-align-items-center">
					<Dress height={50} width={50} />
					<p className="is-size-5 has-text-centered">Women's clothing</p>
				</div>
				<div className="column is-flex is-flex-direction-column is-align-items-center">
					<Shirt height={50} width={50} />
					<p className="is-size-5 has-text-centered">Men's clothing</p>
				</div>
			</div>
		</div>
	);
}
