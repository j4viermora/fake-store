const { axios } = require('axios');

export const storeAxios = axios.create({
	baseURL: 'https://fakestoreapi.com/',
	timeout: 3000,
});
