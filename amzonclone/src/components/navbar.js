import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar()
{
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold fs-4" href="">Chinmay's Collection</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">Register</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">Cart</NavLink>
          </div>
        </div>
      </div>
    </nav>
    );
}
export default Navbar;