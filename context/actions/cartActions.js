import { TYPES } from '../types';

export const deleteProductCart = (id) => {
	return {
		type: TYPES.REMOVE_CART,
		payload: {
			id,
		},
	};
};

export const addToCart = (order) => {
	return {
		type: TYPES.ADD_TO_CART,
		payload: order,
	};
};
