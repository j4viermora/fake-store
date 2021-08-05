import React from 'react';
import { storeAxios } from '../../config/axiosConfig';
import CardProduct from '../../ui/components/CardProduct';
import FilterProducts, {
	SortProducts,
} from '../../ui/components/FilterProducts';
import Layout from '../../ui/layout';

export default function Store({ data, err }) {
	if (err) {
		return (
			<h2 className="title is-4">
				{data.content}...{' '}
				<a href="mailto:javier@expressativo.com">Cuentanos el error</a>
			</h2>
		);
	}

	return (
		<Layout>
			<div className="section">
				{/* Breadcrumb */}
				<nav class="breadcrumb" aria-label="breadcrumbs">
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li class="is-active">
							<a href="#" aria-current="page">
								Category
							</a>
						</li>
					</ul>
				</nav>
				<div className="columns mt-5">
					<div className="column is-one-fifth">
						<FilterProducts />
					</div>
					<div className="column">
						<SortProducts />
						<hr />
						<div className="columns is-multiline">
							{data?.map(({ title, price, image, category, id }) => (
								<div className="column is-one-third">
									<CardProduct
										title={title}
										price={price}
										image={image}
										category={category}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ query }) {
	try {
		const category = query.q.toLowerCase();
		const resp = await storeAxios.get(`/products/category/${category}`);
		const data = await resp.data;
		return {
			props: {
				data,
				err: false,
			},
		};
	} catch (err) {
		return {
			props: {
				data: {
					content:
						'Algo anda mal por favor intente nuevamente en unos segundos o comuniquese con soporte',
				},
				err: true,
			},
		};
	}
}
