import React from "react";
import ErrorFooter from "../errorfooter/ErrorFooter";
import { Navbar } from "../navbar/Navbar";
import err from "../../assests/img/err-0١.png";
import "./error.css";
const Error = () => {
  return (
    <>
      <Navbar />
      <div className="row err-container">
        <div className="col-7">
          <div className="err-img"></div>
        </div>
        <div className="col-5 ">
          <div className="err-p">
            <h1> 404 </h1>
            <h3>Page Not Found</h3>
          </div>
        </div>
      </div>
      <ErrorFooter />
    </>
  );
};

export default Error;
