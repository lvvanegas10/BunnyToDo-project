import { combineReducers } from "redux";
import products from "./productReducer";
import shoppingCart from "./shoppingCartReducer";
import selectedProduct from "./selectedProductReducer";

/** Index for reducers */
const rootReducer = combineReducers({
  products,
  shoppingCart,
  selectedProduct,
});

export default rootReducer;
