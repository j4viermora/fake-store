import Head from 'next/head';
import Layout from '../ui/layout';
import DisplayCategories from '../ui/components/DisplayCategories';
import CountDown from '../ui/components/CountDown';
import Container from '../ui/components/Container';
export default function Home() {
	return (
		<>
			<Head></Head>
			<Layout>
				<DisplayCategories />
				<Container>
					<CountDown />
				</Container>
			</Layout>
		</>
	);
}
