import {productConstants} from './../constants';

const initialState = {
};

export function product(state = initialState, action) {
  switch (action.type) {
    case productConstants.PRODUCT_REQUEST:
      return {
        ...state,
        isProductRequesting: true,
        isProductFailure: false,
        product: action.data
      };
    case productConstants.PRODUCT_SUCCESS:
      return {
        ...state,
        isProductRequesting: false,
        isProductSuccess: true,
        product: action.data
      };
    case productConstants.PRODUCT_FAILURE:
      return {
        ...state,
        isProductRequesting: false,
        isProductFailure: true,
        productError: action.error
      };

    case productConstants.PRODUCT_FILTER_REQUEST:
      return {
        ...state,
        isProductFilterReqesting: true,
        product: action.data
      };
    case productConstants.PRODUCT_FILTER_SUCCESS:
      return {
        ...state,
        isProductFilterRequesting: false,
        isProductFilterSuccess: true,
        product: action.data,
      };
    case productConstants.PRODUCT_FILTER_FAILURE:
      return {
        ...state,
        isProductFilterRequesting: false,
        productFilterError: action.data
      };
    default:
      return state;
  }
}
