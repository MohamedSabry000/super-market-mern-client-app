import "./signup.css";
function Signup() {
    
    
    return(
        <>
            <div className="signup">
                <div className="container">
                    <div className="row  g-0">
                        <div className="col-6">
                            <div className="image-section">

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="signup-content">
                                <p className="signin-link">Already have an account <a href="#">sign in</a></p>
                                <form method="post">
                                    <div className="mb-3 input-container">
                                        <label className="form-label" for="username">Username</label>
                                        <input id="username" className="form-control" type="password" name="username" />
                                        <i className="fa fa-user fa-lg"></i>
                                    </div>
                                    <div className="mb-3 input-container">
                                        <label className="form-label" for="password">Password</label>
                                        <input id="password" className="form-control" type="password" name="password" />
                                    </div>
                                    <div className="mb-3 input-container">
                                        <label className="form-label" for="email">Email</label>
                                        <input id="email" className="form-control" type="email" name="email" />
                                    </div>
                                    <div className="mb-3 input-container">
                                        <label className="form-label" for="phone">Phone number</label>
                                        <input id="phone" className="form-control" type="number" name="phone" />
                                    </div>
                                    <div className="mb-3 input-container">
                                        <label className="form-label" for="address">Address</label>
                                        <input id="address" className="form-control" type="text" name="address" />
                                    </div>
                                    <div className="mb-3 input-container">
                                        <button class="btn btn-success ms-auto d-block">Signup</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
        



        
    )

}


export default Signup;