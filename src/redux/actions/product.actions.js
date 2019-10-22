import {productConstants} from '../constants';
import {productService} from './../../utils';
import _ from 'lodash';

import productsData from './../../../public/assets/data/products.json';

export const productActions = {
  getProducts,
  postProductsFilterOption
};

/**
 * request product list
 *
 * Since API is not given, I tried to mimic promise constructor
 * It will always fetch date from products.json
 */
function getProducts() {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(productsData));

    /**
     * If API is available, uncomment below code for API call.
     */

    // productService.getProducts()
    //   .then((response) => {
    //     dispatch(success(response));
    //   })
    //   .catch((error) => {
    //     dispatch(failure(error));
    //   });
  };

  function request(data) {
    return {type: productConstants.PRODUCT_REQUEST, data};
  }
  function success(data) {
    return {type: productConstants.PRODUCT_SUCCESS, data};
  }
  function failure(error) {
    return {type: productConstants.PRODUCT_FAILURE, error};
  }
}

/**
 * In order to show filtered products on client side,
 * Frontend will send Query (http://serverdomain.com.au/product%size=S) to backend
 * and Backend server should handle the filtering and returns filtered data.
 *
 * Below code is for text purpose to meet the requirement.
 * This is not for production.
 */

/**
 * post filter Query and get filtered products
 * @param {Array} size - Cloth size
 */
function postProductsFilterOption(size) {
  return (dispatch) => {
    dispatch(request(size));
    const responseData = productsData;
    const filteredProducts = _.filter(responseData, ['size', [size]]);
    dispatch(success(filteredProducts));
  };

  function request(data) {
    return {type: productConstants.PRODUCT_FILTER_REQUEST, data};
  }
  function success(data) {
    return {type: productConstants.PRODUCT_FILTER_SUCCESS, data};
  }
  function failure(error) {
    return {type: productConstants.PRODUCT_FILTER_FAILURE, error};
  }
}
