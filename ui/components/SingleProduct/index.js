import React from 'react';
import { useFormik } from 'formik';
export default function SingleProduct({
	image,
	title,
	price,
	description,
	category,
	id,
}) {
	const formik = useFormik({
		initialValues: {
			countProduct: 1,
		},
		onSubmit: (value) => {
			const order = {
				...value,
				title,
				price,
				id,
			};
			alert(JSON.stringify(order));
		},
	});

	return (
		<>
			<section className="section">
				<div className="columns card is-rounded my-6 pt-5">
					<div className="column is-flex is-justify-content-center">
						<div className="container-img">
							<img src={image} />
						</div>
					</div>
					<div className="column">
						<h2 className="title is-2">{title}</h2>
						<span className="tag is-warning">{category}</span>
						<hr />
						<h3 className="title is-2 has-text-info-dark">{price}$USD</h3>
						<form onSubmit={formik.handleSubmit} className="control">
							<label className="label">Count</label>
							<input
								name="countProduct"
								onChange={formik.handleChange}
								value={formik.values.countProduct}
								type="number"
								className="input is-info"
							/>
							<button type="submit" className="button is-primary mt-3">
								ADD TO CART
							</button>
						</form>
					</div>
				</div>
				<div className="columns card py-5 px-3 is-rounded">
					<div className="content">
						<h4 className="title is-5">Description</h4>
						<p>{description}</p>
					</div>
				</div>
			</section>
			<style jsx>{`
				img {
					width: 100%;
					height: 100%;
				}
				.container-img {
					height: 350px;
					width: 350px;
				}
				.control {
					width: 70px;
				}
			`}</style>
		</>
	);
}
