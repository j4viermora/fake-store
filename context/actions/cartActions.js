import { TYPES } from '../types';

export const deleteProductCart = (title) => {
	return {
		type: TYPES.REMOVE_CART,
		payload: {
			title,
		},
	};
};

export const addToCart = (order) => {
	return {
		type: TYPES.ADD_TO_CART,
		payload: order,
	};
};
