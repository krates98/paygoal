import React from "react";

import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
      <div className="container-fluid">
        <a
          className="navbar-brand d-flex w-50 me-auto"
          href="https://www.google.com"
        >
          <img src="/logo.svg" alt="Bootstrap" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-100" id="navbarNavAltMarkup">
          <div className="navbar-nav w-100 justify-content-center">
            <a
              className="nav-link "
              aria-current="page"
              href="https://www.google.com"
            >
              Home
            </a>
            <a className="nav-link" href="https://www.google.com">
              Payments
            </a>
            <a className="nav-link" href="https://www.google.com">
              Features
            </a>
            <a className="nav-link" href="https://www.google.com">
              Developers
            </a>
            <a className="nav-link" href="https://www.google.com">
              Pricing
            </a>
            <a className="nav-link" href="https://www.google.com">
              Support
            </a>
          </div>
          <div className="nav navbar-nav ms-auto w-100 justify-content-end">
            <a
              className="nav-link active"
              aria-current="page"
              href="https://www.google.com"
            >
              <button type="button" class="btn btn-primary signup">
                Sign Up
              </button>
            </a>
            <a
              className="nav-link active"
              aria-current="page"
              href="https://www.google.com"
            >
              <button type="button" class="btn btn-primary login">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
