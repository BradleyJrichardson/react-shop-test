import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

function App() {
  return (
    <React.Fragment>
      <h3>ArtSmart Libby</h3>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
    </React.Fragment>
  );
}

export default App;
