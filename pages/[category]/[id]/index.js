import axios from 'axios';
import React from 'react';
import Layout from '../../../ui/layout';
import Head from 'next/head';
import SingleProduct from '../../../ui/components/SingleProduct';
import { RelatedProducts } from '../../../ui/components/RelatedProducst';
export default function SingleProductPage({
	data: { title, price, description, category, image, id },
	relatedProducts,
}) {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<Layout>
				<SingleProduct
					title={title}
					price={price}
					description={description}
					category={category}
					image={image}
					id={id}
				/>
				<RelatedProducts
					relatedProducts={relatedProducts}
					category={category}
				/>
			</Layout>
		</>
	);
}

export async function getServerSideProps({ params }) {
	const resp = await axios.get(
		`https://fakestoreapi.com/products/${params.id}`
	);

	const resp2 = await axios.get(
		`https://fakestoreapi.com/products/category/${params.category}`
	);

	const data = await resp.data;
	const relatedProducts = await resp2.data;

	return {
		props: {
			data,
			relatedProducts,
		},
	};
}
