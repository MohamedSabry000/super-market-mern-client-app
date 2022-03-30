import "./signup.css";
function Signup() {
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
                <p className="signup-text">Signup</p>
                <form method="post">
                  <div className="mb-3 input-container">
                    <label className="form-label" for="username">
                      Username
                    </label>
                    <input
                      id="username"
                      className="form-control"
                      type="password"
                      name="username"
                      placeholder="Enter Username"
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
                    />
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
                    />
                  </div>
                  <div className="mb-3 input-container ">
                    <button class="btn btn-success ms-auto d-block ">
                      Signup
                    </button>
                  </div>
                  <p className="signin-link">
                    Already have an account <a href="#">sign in</a>
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
