import axios from 'axios';
import React from 'react';
import Layout from '../../../ui/layout';
import Head from 'next/head';
import SingleProduct from '../../../ui/components/SingleProduct';
export default function SingleProductPage({
	data: { title, price, description, category, image, id },
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
			</Layout>
		</>
	);
}

export async function getServerSideProps({ params }) {
	const resp = await axios.get(
		`https://fakestoreapi.com/products/${params.id}`
	);
	const data = await resp.data;

	return {
		props: {
			data,
		},
	};
}
