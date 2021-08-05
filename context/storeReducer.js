import { TYPES } from './types';

const storeReducer = (state, action) => {
	switch (action.type) {
		case TYPES.ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload],
				items: true,
			};
		case TYPES.REMOVE_CART:
			if (state.cart.length == 1) {
				return {
					...state,
					items: false,
				};
			}
			return {
				...state,
				cart: [
					...state.cart.filter((product) => product.id !== action.payload.id),
				],
			};

		default:
			state;
	}
};

export { storeReducer };
