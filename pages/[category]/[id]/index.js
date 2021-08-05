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
	try {
		const resp = axios.get(`https://fakestoreapi.com/products/${params.id}`);

		const resp2 = axios.get(
			`https://fakestoreapi.com/products/category/${params.category}`
		);

		const [product, related] = await Promise.all([resp, resp2]);

		const data = await product.data;
		const relatedProducts = await related.data;

		return {
			props: {
				data,
				relatedProducts,
			},
		};
	} catch (err) {}
}
