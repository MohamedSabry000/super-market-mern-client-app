import "./navbar.css";
import logo from "../../assests/img/img.png";
import { useLocation, NavLink } from "react-router-dom";
import React from "react";
import useToken from "../../utils/hooks/useToken";

const Navbar = () => {
  const location = useLocation(); // Get The Current Route

  const { token } = useToken();

  const checkActive = (match) => location.pathname === match? "active" : "";
  const checkActiveCurrent = (match) => location.pathname === match? <span className="sr-only">(current)</span> : "";

  return (
    <nav
      className="navbar navbar-expand-lg  navbar-light customize-navbar justify-content-between"
      id="navbar"
    >
      <div className="container">
        <NavLink to="home" className="navbar-brand">
          <img src={logo} alt="Logo" width="70" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-auto">
            <li className="nav-item">
              <NavLink className={`nav-link ${checkActive("/home")}`} to="/home"> Home {checkActiveCurrent("/home")} </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${checkActive("/about")}`} to="/about"> About {checkActiveCurrent("/about")} </NavLink>
            </li>
            {token && (
              <li className="nav-item">
                <NavLink className={`nav-link ${checkActive("/profile")}`} to="/profile"> Profile {checkActiveCurrent("/home")} </NavLink>
              </li>
            )}
          </ul>
        </div>

        <div className="auth d-flex align-items-center">
          {!token ? (
            <>
              <NavLink to="/login" className="link btn-login"> Login </NavLink>
              <NavLink to="/signup" className="link btn-signup"> Signup </NavLink>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
              className="link btn-login"
            >
              Logout
            </button>
          )}
          <div className="animate-icon">
            <i className="fa fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
