import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import Layout from '../../ui/layout';

export default function Product() {
	const router = useRouter();

	useEffect(() => {
		router.push('/');
	}, []);

	return (
		<Layout>
			<div>Products</div>
		</Layout>
	);
}
