import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductItemStore from "./productItemStore/ProductItemStore";
import { loadProducts } from "../../redux/actions/productActions";
import { updateSelectedProduct } from "../../redux/actions/selectedProductActions";
import Masonry from "react-masonry-css";
import "./store.css";

const breakpointColumnsObj = {
  default: 3,
  1000: 2,
  700: 1,
};

/** Store container */
export function Store({
  products,
  selectedProduct,
  loadProducts,
  updateSelectedProduct,
}) {
  /** Load the products */
  useEffect(() => {
    if (products.length === 0) {
      loadProducts().catch((error) => {
        alert("Loading products failed" + error);
      });
    }
  }, []);

  return (
    <div>
      <h1>Store</h1>
      <div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {products.map((product) => {
            return (
              <ProductItemStore
                key={product.id}
                product={product}
                updateSelectedProduct={updateSelectedProduct}
                isSelected={
                  selectedProduct.id && product.id === selectedProduct.id
                }
              ></ProductItemStore>
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}

Store.propTypes = {
  products: PropTypes.array.isRequired,
  selectedProduct: PropTypes.object.isRequired,
  loadProducts: PropTypes.func.isRequired,
  updateSelectedProduct: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const shoppingCart = state.shoppingCart;

  /** Match the number of items from shopping cart with the products */
  const products = state.products.map((product) => {
    const numberOfItems = shoppingCart[product.id]
      ? shoppingCart[product.id].numberOfItems
      : 0;
    return { ...product, numberOfItems };
  });
  return {
    products,
    selectedProduct: state.selectedProduct,
  };
}

const mapDispatchToProps = {
  loadProducts,
  updateSelectedProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
