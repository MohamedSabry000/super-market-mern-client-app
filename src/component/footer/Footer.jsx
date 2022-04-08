import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row footer-content">
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h5>Discover</h5>
                <ul>
                  <li> <a href="javascript:void(0);">Our Team</a> </li>
                  <li> <a href="javascript:void(0);">Branches</a> </li>
                  <li> <a href="javascript:void(0);">Delivery</a> </li>
                  <li> <a href="javascript:void(0);">Terms and condition</a> </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h5>Locations</h5>
                <ul>
                  <li> <a href="javascript:void(0);">Shebin</a> </li>
                  <li> <a href="javascript:void(0);">Tanta</a> </li>
                  <li> <a href="javascript:void(0);">Cairo</a> </li>
                  <li> <a href="javascript:void(0);">6 October</a> </li>
                  <li> <a href="javascript:void(0);">Nasr city</a> </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h5>Brands</h5>
                <ul>
                  <li> <a href="javascript:void(0);">Adidas</a> </li>
                  <li> <a href="javascript:void(0);">Kazion</a> </li>
                  <li> <a href="javascript:void(0);">Metro</a> </li>
                  <li> <a href="javascript:void(0);">Galhoom</a> </li>
                  <li> <a href="javascript:void(0);">Kher Baldna</a> </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h5>Pages</h5>
                <ul>
                  <li> <NavLink to={`/home`}> Home </NavLink> </li>
                  <li> <NavLink to={`/about`}> About Us </NavLink> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* copy right section */}
        <div className="footer-bottom">
          Copyright &copy; {`${date}`} All rights reserved{" "}
        </div>
      </footer>
    </>
  );
}
/*

*/
