import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container">
      <div className="navbar ">
        <ul className="list-unstyled d-flex justify-content-evenly w-100">
          <li>
            <Link className="text-decoration-none " to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none " to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none " to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none " to="/contact">
              Products
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />

      <footer className="bg-light p-4">
        Footer
      </footer>
    </div>
  );
}

export default Layout;
