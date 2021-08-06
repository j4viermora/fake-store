import { TYPES } from '../types';

export const seeProductsHandler = (value) => ({
	type: TYPES.SEE_PRODUCTS_HANDLE,
	payload: value,
});
