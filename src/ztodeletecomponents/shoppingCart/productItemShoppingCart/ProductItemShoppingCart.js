import React from "react";
import PropTypes from "prop-types";
import "./productItemShoppingCart.css";
import NumberOfItemsView from "../../common/numberOfItemsView/NumberOfItemsView";

/** Display and item in the shopping cart summary*/
function ProductItemShoppingCart({ product }) {
  return (
    <>
      <div className="shoppingCart-product">
        <div className="shoppingCart-product-number">
          <NumberOfItemsView numberOfItems={product.numberOfItems} />
        </div>
        <div className="shoppingCart-product-image-container flex-center-item ">
          <img src={product.image} className="shoppingCart-product-image" />
        </div>
      </div>
    </>
  );
}

ProductItemShoppingCart.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItemShoppingCart;
