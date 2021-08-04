import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Layout from '../../ui/layout';

export default function Product() {
	return (
		<Layout>
			<div className="section">
				<div className="columns">
					<div className="column is-two-fifths"></div>
					<div className="column">
						<div className="columns is-multiline">
							<div className="column is-one-quarter"></div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
