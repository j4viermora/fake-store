import { TYPES } from './types';

const storeReducer = (state, action) => {
	switch (action.type) {
		case TYPES.ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload],
			};

		default:
			state;
	}
};

export { storeReducer };
