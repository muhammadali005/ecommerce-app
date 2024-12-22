import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-3">
        <div className="d-flex align-items-center">
          <Link to="/">
            <img src={logo} alt="store" width={40} className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ms-3">
              <Link to="/" className="nav-link">
                E-Commerce Store
              </Link>
            </li>
          </ul>
        </div>
        
        <Link to="/cart" className="ms-auto">
          <ButtonContainer>
            <span className="me-2">
              <i className="fas fa-cart-plus" />
              My Cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
