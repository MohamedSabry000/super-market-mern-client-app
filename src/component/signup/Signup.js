import "./signup.css";
import { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";

function Signup() {
  let [email, username, password, phone, address] = ["", "", "", "", ""];
  const [emailError, setEmailError] = useState("");
  let usernameChange = (e) => {
    console.log(e.target.value);
    username = e.target.value;
    if (username.length < 3) e.target.style = "border-color:#bc3942";
    else e.target.style = "border-color:#d8e2dc";
  };
  let passwordChange = (e) => {
    password = e.target.value;
    if (password.length < 8) {
      e.target.style = "border-color:#bc3942";
    } else e.target.style = "border-color:#d8e2dc";
  };
  let phoneChange = (e) => {
    console.log(e.target.value);
    phone = e.target.value;
    if (phone.length < 11) e.target.style = "border-color:#bc3942";
    else e.target.style = "border-color:#d8e2dc";
  };
  let addressChange = (e) => {
    console.log(e.target.value);
    address = e.target.value;
    if (address.length < 3) e.target.style = "border-color:#bc3942";
    else e.target.style = "border-color:#d8e2dc";
  };
  let emailChange = (e) => {
    email = e.target.value;
    e.target.style = "border-color:#d8e2dc";
  };
  let Valid = () => {
    console.log(
      "username:" + username + " password: " + password + " Email : " + email
    );
    if (!validator.isEmail(email)) {
      setEmailError("Please enter a valid Email!");
    } else setEmailError("");
  };

  return (
    <>
      <div className="signup">
        <div className="container">
          <div className="row  g-0">
            <div className="col-6">
              <div className="image-section"></div>
            </div>
            <div className="col-6">
              <div className="signup-content">
                <p className="signup-text">Sign Up</p>
                <form method="post">
                  <div className="mb-3 input-container">
                    <label className="form-label" for="username">
                      Username
                    </label>
                    <input
                      id="username"
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      onChange={(e) => {
                        usernameChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 input-container">
                    <label className="form-label" for="password">
                      Password
                    </label>
                    <input
                      id="password"
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={(e) => {
                        passwordChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 input-container">
                    <label className="form-label" for="email">
                      Email
                    </label>
                    <input
                      id="email"
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      onChange={(e) => {
                        emailChange(e);
                      }}
                    />
                    <p>
                      <span style={{ color: "#bc3942" }}> {emailError}</span>
                    </p>
                  </div>
                  <div className="mb-3 input-container">
                    <label className="form-label" for="phone">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      className="form-control"
                      type="text"
                      name="phone"
                      placeholder="Enter Phone"
                      onChange={(e) => {
                        phoneChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 input-container">
                    <label className="form-label" for="address">
                      Address
                    </label>
                    <input
                      id="address"
                      className="form-control"
                      type="text"
                      name="address"
                      placeholder="Enter Address"
                      onChange={(e) => {
                        addressChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 input-container ">
                    <button
                      class="btn btn-success ms-auto d-block "
                      onClick={Valid}
                    >
                      Signup
                    </button>
                  </div>
                  <p className="signin-Link">
                    Already have an account <Link to="/login">Log In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
