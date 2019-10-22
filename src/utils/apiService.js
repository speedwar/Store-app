import axios from 'axios';

/**
 * Since this is code test without APIs
 * Below code won't be used
 *
 * Below API call can be used for staging, production
 * Once APIs are ready to use.
 */
const BASE_URL = 'http://localhost:8080/api/';

export const productService = {
  getProducts,
  postProductsFilter
};

export function getProducts() {
  const url = BASE_URL + 'products';
  return axios.get(url);
}

export function postProductsFilter(productSize) {
  const url = BASE_URL + 'products?filter=' + productSize;
  return axios.post(url);
}
