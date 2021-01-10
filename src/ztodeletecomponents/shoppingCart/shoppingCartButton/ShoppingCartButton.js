import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadProducts } from "../../../redux/actions/productActions";
import { TiShoppingCart } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { getTotalPrice, formatPrice } from "../../../common/priceCalculator";
import "./shoppingCartButton.css";

const paymentPath = "/payment-with-wompi";

/** Button that shows Shopping Cart */
export function ShoppingCartButton({ price, history }) {
  const [isActive, setIsActive] = useState(
    history.location.pathname === paymentPath
  );

  /** Handle click to toogle shopping cart */
  function handleClick(event) {
    event.preventDefault();
    setIsActive(!isActive);
    !isActive ? history.push(paymentPath) : history.push("/");
  }

  return (
    <div
      className={
        "shoppingCart-button flex-center-item" +
        (isActive ? " shoppingCart-button-active" : "")
      }
      onClick={handleClick}
    >
      <TiShoppingCart className="shoppingCart-button-icon" />
      <span className="shoppingCart-button-price">
        ${formatPrice(parseInt(price))}
      </span>
      {isActive ? (
        <div className="shoppingCart-button-close flex-center-item">
          <RiCloseLine />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

ShoppingCartButton.propTypes = {
  price: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    price: String(getTotalPrice(state.shoppingCart)),
  };
}

const mapDispatchToProps = {
  loadProducts,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShoppingCartButton)
);
