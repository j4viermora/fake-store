import { useQuery } from 'react-query';

export const getProducts = async () => {
	const resp = await fetch('https://fakestoreapi.com/products');
	const data = await resp.json();
	return data;
};

export const useGetPruducts = (products) => {
	const { data, isLoading, isSuccess, isError } = useQuery(
		'products',
		getProducts,
		{ initialData: products }
	);
	return {
		data,
		isLoading,
		isSuccess,
		isError,
	};
};
