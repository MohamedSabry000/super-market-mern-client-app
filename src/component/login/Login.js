import "./login.css";
function Login() {
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
                <p className="login-text">Login</p>
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
                    />
                  </div>
                  <div className="mb-3 input-container ">
                    <button class="btn btn-success ms-auto d-block ">
                      login
                    </button>
                  </div>
                  <p className="signup-link">
                    Don't have an account <a href="#">sign up</a>
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
