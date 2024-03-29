import { useRouter } from 'next/dist/client/router';
import React from 'react';
import CardProduct from '../CardProduct';

export default function SectionProducts({
	data = [],
	titleSection = '',
	isLoading,
	isError,
	categorySection = '',
}) {
	const router = useRouter();

	const handleSectionMore = () => {
		router.push(`/store?q=${categorySection}`);
	};

	return (
		<section className="my-6">
			<h3 className="is-size-1 mb-6 pb-3 has-text-centered">
				<strong>{titleSection}</strong>
			</h3>
			{isLoading && (
				<button class="button is-primary is-loading">Loading</button>
			)}
			<div className="columns is-multiline">
				{data
					?.filter(
						({ category }) => category == categorySection.toLocaleLowerCase()
					)
					?.slice(0, 4)
					?.map(({ id, price, title, description, image, category }) => (
						<div key={id} className="column is-one-quarter">
							<CardProduct
								price={price}
								title={title}
								description={description}
								image={image}
								id={id}
								category={category}
							/>
						</div>
					))}
				{isError && 'Somethin is wrong... sorry'}
			</div>
			<div className="is-flex is-justify-content-center">
				<button onClick={handleSectionMore} className="button is-link">
					SEE MORE
				</button>
			</div>
		</section>
	);
}
