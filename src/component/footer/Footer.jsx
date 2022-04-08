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
                <h2>Discover</h2>
                <h5> <a href="javascript:void(0);">Our Team</a> </h5>
                <h5> <a href="javascript:void(0);">Branches</a> </h5>
                <h5> <a href="javascript:void(0);">Delivery</a> </h5>
                <h5> <a href="javascript:void(0);">Terms and condition</a> </h5>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h2>Locations</h2>
                <h5> <a href="javascript:void(0);">Shebin</a> </h5>
                <h5> <a href="javascript:void(0);">Tanta</a> </h5>
                <h5> <a href="javascript:void(0);">Cairo</a> </h5>
                <h5> <a href="javascript:void(0);">6 October</a> </h5>
                <h5> <a href="javascript:void(0);">Nasr city</a> </h5>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h2>Brands</h2>
                <h5> <a href="javascript:void(0);">Delta</a> </h5>
                <h5> <a href="javascript:void(0);">Kazion</a> </h5>
                <h5> <a href="javascript:void(0);">Metro</a> </h5>
                <h5> <a href="javascript:void(0);">Galhoom</a> </h5>
                <h5> <a href="javascript:void(0);">Kher Baldna</a> </h5>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h2>Pages</h2>
                <h5> <NavLink to={`/home`}> Home </NavLink> </h5>
                <h5> <NavLink to={`/about`}> About Us </NavLink> </h5>
                <h5> <a href="/html/home.html">Home</a> </h5>
                <h5> <a href="/html/about.html">About Us</a> </h5>
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
