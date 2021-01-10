import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";

//------------------------------------------------------------------
// Actions Creators
//------------------------------------------------------------------

/** Action creator: LOAD_PRODUCTS_SUCCESS*/
export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

//------------------------------------------------------------------
// Actions
//------------------------------------------------------------------

/** Load products from API */
export function loadProducts() {
  return function (dispatch) {
    return productApi
      .getProducts()
      .then((products) => {
        dispatch(loadProductsSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
}
