import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand Tname" onClick={() => Navigate("/")}>
            FickleFlight
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse Nav" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  onClick={() => Navigate("/")}
                  aria-current="page"
                >
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/search" ? "active" : " "
                  }`}
                  onClick={() => Navigate("/search")}
                >
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/hotels" ? "active" : ""
                  }`}
                  onClick={() => Navigate("/hotels")}
                >
                  Hotels
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/offers" ? "active" : ""
                  } `}
                  onClick={() => Navigate("/offers")}
                >
                  Offers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
