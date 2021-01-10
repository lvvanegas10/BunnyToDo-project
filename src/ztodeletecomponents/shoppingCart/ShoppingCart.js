import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductItemShoppingCart from "./productItemShoppingCart/ProductItemShoppingCart";
import { loadProducts } from "../../redux/actions/productActions";
import { getTotalPrice, formatPrice } from "../../common/priceCalculator";
import "./shoppingCart.css";
import * as wompiConfig from "../../common/Wompi.config";

/** Summary of shopping cart */
export function ShoopingCart({ products, loadProducts, price }) {
  useEffect(() => {
    /** Load products */
    if (products.length === 0) {
      loadProducts().catch((error) => {
        alert("Loading products failed" + error);
      });
    }

    /** Load Wompi widget if there are products on the cart */
    if (products.length > 0 && price > 0) {
      const script = document.createElement("script");
      loadWompiWidget(script, price);
    }

    return () => {
      let form = document.getElementById("form-wompi");
      if (form) form.removeChild(form.childNodes[0]);
    };
  }, []);

  /** Load Wompi Widget */
  function loadWompiWidget(scriptElement, price) {
    scriptElement.src = "https://checkout.wompi.co/widget.js";
    scriptElement.async = true;
    scriptElement.setAttribute("data-render", "button");
    scriptElement.setAttribute("data-public-key", wompiConfig.WOMPI_PUBLIC_KEY);
    scriptElement.setAttribute("data-currency", "COP");
    scriptElement.setAttribute("data-amount-in-cents", String(price));
    scriptElement.setAttribute("data-reference", "REF-");

    document.getElementById("form-wompi").appendChild(scriptElement);
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {products.length === 0 ? (
        <div className="text-light">
          You have not products selected. Close the Shopping Cart and select
          products
        </div>
      ) : (
        <>
          {products.map((product) => {
            return (
              <ProductItemShoppingCart
                key={product.id}
                product={product}
              ></ProductItemShoppingCart>
            );
          })}
          <div className="shoppingCart-container">
            <div className="shoppingCart-price-container">
              Total:
              <span className="shoppingCart-price">
                ${formatPrice(parseInt(price))}
              </span>
            </div>
            <form id="form-wompi"></form>
          </div>
        </>
      )}
    </div>
  );
}

ShoopingCart.propTypes = {
  products: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  loadProducts: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    products: Object.values(state.shoppingCart),
    price: String(getTotalPrice(state.shoppingCart)),
  };
}

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoopingCart);
