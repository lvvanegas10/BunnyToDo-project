import React from "react";
import Store from "./store/Store"; // eslint-disable-line import/no-named-as-default
import Product from "./productDetail/ProductDetail";
import { Route, Switch } from "react-router-dom";
import ShoppingCart from "./shoppingCart/ShoppingCart"; // eslint-disable-line import/no-named-as-default
import Header from "./header/Header";
import "./App.css";

/** Entry point component */
function App() {
  return (
    <>
      <Header />
      <div id="content-container">
        <Store />
        <Switch>
          <Route exact path="/" component={Product} />
          <Route path="/payment-with-wompi" component={ShoppingCart} />
        </Switch>
      </div>
    </>
  );
}

export default App;
