import React from 'react';

export default function Cart({ index, image, title, price, countProduct, id }) {
	return (
		<>
			<div key={index}>
				<a className="navbar-item is-primary">
					<div>
						<img src={image} />
						<div id="cart-item" className="ml-3">
							<h4>{title}</h4>
							<p>Price: {price}$USD</p>
							<p>
								<strong>Count:</strong> {countProduct}
							</p>
							<button className="button mt-3 is-primary mr-1">Buy</button>
							<button className="button mt-3 is-danger">Delete</button>
						</div>
					</div>
				</a>
				<hr className="navbar-divider" />
			</div>
			<style jsx>
				{`
					.navbar-item img {
						max-height: 5rem;
						max-width: 5rem;
					}
				`}
			</style>
		</>
	);
}
