import Head from 'next/head';
import Layout from '../ui/layout';
import DisplayCategories from '../ui/components/DisplayCategories';
import CountDown from '../ui/components/CountDown';
import Container from '../ui/components/Container';
import { getProducts, useGetPruducts } from '../hooks/useGetProduct';
import SectionProducts from '../ui/components/SecctionProducts';

export default function Home({ products }) {
	const { data, isError, isLoading } = useGetPruducts(products);

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Layout>
				<DisplayCategories />
				<Container>
					<CountDown />
					{products[1] | !!data ? (
						<>
							<SectionProducts
								data={data}
								isError={isError}
								isLoading={isLoading}
								titleSection="Electronics"
								categorySection={'Electronics'}
							/>
							<SectionProducts
								data={data}
								isError={isError}
								isLoading={isLoading}
								titleSection="Men's clothing"
								categorySection="men's clothing"
							/>
							<SectionProducts
								data={data}
								isError={isError}
								isLoading={isLoading}
								titleSection="Jewelery"
								categorySection="jewelery"
							/>
						</>
					) : (
						<h2 className="title is-1 has-text-centered my-6 py-6">
							Algo anda mal...
						</h2>
					)}
				</Container>
			</Layout>
		</>
	);
}

export async function getServerSideProps() {
	const products = await getProducts();
	return {
		props: {
			products,
		},
	};
}
