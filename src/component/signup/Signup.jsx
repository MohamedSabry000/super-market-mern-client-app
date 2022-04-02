import "./signup.css";
import { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";
import Footer from "../footer/Footer";

import { signUpUser, updateProfileAvatar } from "../../api";
import useToken from "../../utils/hooks/useToken";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  const { token, setToken } = useToken();

  let usernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
    if (username.length < 3) e.target.style = "border-color:#bc3942";
    else e.target.style = "border-color:#d8e2dc";
  };
  let passwordChange = (e) => {
    setPassword(e.target.value);
    if (password.length < 8) {
      e.target.style = "border-color:#bc3942";
    } else e.target.style = "border-color:#d8e2dc";
  };
  let phoneChange = (e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
    if (phone.length < 11) e.target.style = "border-color:#bc3942";
    else e.target.style = "border-color:#d8e2dc";
  };
  let addressChange = (e) => {
    console.log(e.target.value);
    setAddress(e.target.value);
    if (address.length < 3) e.target.style = "border-color:#bc3942";
    else e.target.style = "border-color:#d8e2dc";
  };
  let emailChange = (e) => {
    setEmail(e.target.value);
    e.target.style = "border-color:#d8e2dc";
  };

  const onFileChange = (e) => {
    console.log(" On Change: ", e.target.files[0]);
    setAvatarFile(e.target.files[0]);
  }

  const onFileUpload = () => { 
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "myFile", 
      avatarFile, 
      avatarFile.name 
    );
    console.log(formData);
    return formData;
  }

  let validateForm = () => {
    console.log(
      "username:" + username + " password: " + password + " Email : " + email
    );
    if (!validator.isEmail(email)) {
      setEmailError("Please enter a valid Email!");
      return false;
    } else setEmailError("");

    if (
      password.length < 8 ||
      username.length < 3 ||
      address.length < 3 ||
      phone.length < 11
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm) {
      console.log(username, password);
      await signUpUser({
        name: username,
        email,
        password,
        address,
        phone,
      })
        .then((res) => {
          console.log(res);
          if (res.data.token) {
            setToken(res.data.token);
            if(avatarFile){
              const fileUpload = onFileUpload();
              updateProfileAvatar(res.data.token, fileUpload)
            }
            

            console.log("123");

            // window.location.href = "/profile";
          } else {
            setShowAlert(true);
          }
        })
        .catch((err) => {
          setToken(null);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="container">
          <div className="row  g-0">
            <div className="col-6">
              <div className="image-section"></div>
            </div>
            <div className="col-6">
              <div className="signup-content">
                <p className="signup-text">Sign Up</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 input-container">
                    <label className="form-label" htmlFor="username">
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
                    <label className="form-label" htmlFor="password">
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
                    <label className="form-label" htmlFor="email">
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
                    <label className="form-label" htmlFor="phone">
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
                    <label className="form-label" htmlFor="address">
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
                  <div className="customize-file">
                    <span>Choose</span>
                    <input type="file" name="avatar" onChange={onFileChange} />
                  </div>
                  <div className="mb-3 input-container ">
                    <button className="btn btn-success ms-auto d-block ">
                      Signup
                    </button>
                  </div>
                  <p className="signin-Link">
                    Already have an account{" "}
                    <Link
                      to="/login"
                      style={{
                        color: "white",
                      }}
                    >
                      Log In
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
