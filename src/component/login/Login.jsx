import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  let [username, password] = ["", "", ""];
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
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row  g-0">
            <div className="col-6">
              <div className="image-section"></div>
            </div>
            <div className="col-6">
              <div className="login-content">
                <p className="login-text">Log In</p>
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
                      placeholder="Enter password"
                      onChange={(e) => {
                        passwordChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 input-container ">
                    <button class="btn btn-success ms-auto d-block ">
                      login
                    </button>
                  </div>
                  <p className="signup-Link ">
                    Don't have an account <Link to="/signup">Sign Up</Link>
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

export default Login;
