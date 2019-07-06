import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
// import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <button>Cart</button>
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline - block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease -in -out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
`;
