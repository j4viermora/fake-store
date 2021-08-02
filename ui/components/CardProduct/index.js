import React from 'react';
import { rounded } from '../../../styles/theme';
import Link from 'next/link';

export default function CardProduct({
	title,
	price,
	description,
	image,
	category,
	id,
}) {
	return (
		<>
			<div
				className="card py-3 px-3"
				style={{ ...rounded, minHeight: '450px' }}
			>
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
					<button className="button is-primary">ADD CART</button>
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
