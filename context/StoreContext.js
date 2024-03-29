import { createContext, useContext, useReducer } from 'react';
import { storeReducer } from './storeReducer';
const StoreContext = createContext();

const initialState = {
	searchProducts: '',
	wishList: '',
	countDown: null,
	cart: [],
	menuOpen: false,
	items: false,
	seeProducts: 5,
	allProducts: [],
	modal: false,
};

export function StoreProvider({ children }) {
	const [storeState, dispatch] = useReducer(storeReducer, initialState);
	const ctx = {
		storeState,
		dispatch,
	};

	return <StoreContext.Provider value={ctx}>{children}</StoreContext.Provider>;
}

export function useStoreContext() {
	return useContext(StoreContext);
}
