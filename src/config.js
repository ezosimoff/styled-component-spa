const API_BASE_URL = 'https://restcountries.com/v3.1/';

export const GET_ALL =
	API_BASE_URL + 'all?fields=name,capital,flags,population,region&limit=10';

export const searchByCountry = (name) => API_BASE_URL + 'name/' + name;
export const searchByCode = (codes) =>
	API_BASE_URL + 'alpha?codes=' + codes.join(',');
