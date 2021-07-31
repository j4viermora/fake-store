import Head from 'next/head';
import Layout from '../ui/layout';

export default function Home() {
	return (
		<>
			<Layout>
				<section className="section is-medium">
					<h1 className="title">Medium section</h1>
					<h2 className="subtitle">
						A simple container to divide your page into{' '}
						<strong>sections</strong>, like the one you're currently reading.
					</h2>
				</section>
			</Layout>
		</>
	);
}
