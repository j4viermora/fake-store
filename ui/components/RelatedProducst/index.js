import React from 'react';
import SectionProducts from '../SecctionProducts';

export const RelatedProducts = ({ relatedProducts, category }) => {
	return (
		<SectionProducts
			titleSection="Related Products"
			categorySection={category}
			data={relatedProducts}
		/>
	);
};
