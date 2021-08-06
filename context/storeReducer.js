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
		case TYPES.SEE_PRODUCTS_HANDLE: {
			return {
				...state,
				seeProducts: action.payload,
			};
		}

		case 'openModal': {
			return {
				...state,
				modal: true,
			};
		}
		case 'closeModal': {
			return {
				...state,
				modal: false,
			};
		}

		default:
			state;
	}
};

export { storeReducer };
