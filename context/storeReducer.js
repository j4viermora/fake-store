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
			console.log(state.cart);
			if (state.cart.length == 1) {
				return {
					...state,
					cart: [
						...state.cart.filter(
							(product) => product.title !== action.payload.title
						),
					],
					items: false,
				};
			}
			return {
				...state,
				cart: [
					...state.cart.filter(
						(product) => product.title !== action.payload.title
					),
				],
				items: true,
			};

		default:
			state;
	}
};

export { storeReducer };
