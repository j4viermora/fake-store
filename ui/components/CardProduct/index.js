import React, { useState } from 'react';
import Link from 'next/link';
import { useStoreContext } from '../../../context/StoreContext';
import { addToCart } from '../../../context/actions/cartActions';

export default function CardProduct({ title, price, image, category, id }) {
	const { dispatch } = useStoreContext();
	const [state, setState] = useState(true);
	const handleAddToCart = () => {
		setState(!state);
		const order = {
			title,
			price,
			image,
			id,
			countProduct: 1,
		};
		dispatch(addToCart(order));
	};

	return (
		<>
			<div className="card py-3 px-3 is-rounded" style={{ minHeight: '450px' }}>
				{' '}
				<div className="is-flex is-justify-content-center">
					<img src={image} alt={title} />
				</div>
				<div className="card-content">
					<h4 className="title is-6">{title.substring(0, 20)}</h4>
					<div className="title is-6">{price}$USD</div>
				</div>
				<div className="is-flex is-justify-content-space-evenly is-align-items-center buttons">
					<button className="button is-info">
						<Link href={`/${category}/${id}`}>
							<a className="has-text-link-light">SEE MORE</a>
						</Link>
					</button>
					<button
						name={id}
						onClick={handleAddToCart}
						className="button is-primary"
						disabled={!state}
					>
						{state & (id === id) ? 'ADD CART' : 'ADDED'}
					</button>
				</div>
			</div>
			<style jsx>{`
				img {
					width: 250px;
					height: 250px;
				}
			`}</style>
		</>
	);
}
