import './navbar.css';
import logo from '../../assests/img/img.png';
import {NavLink} from 'react-router-dom';
function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg  navbar-light customize-navbar justify-content-between" id="navbar">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="home">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="products">Products</NavLink>
                        </li>  
                         <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>   
                        <li className="nav-item">
                            <NavLink className="nav-link" to="profile">Profile</NavLink>
                        </li>   
                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact">Contact</NavLink>
                        </li>   
                    </ul>
                </div>
                <NavLink className="navbar-brand" to="home">
                    {/* Logo */}
                    <img src={logo} width="80" />
                    
                </NavLink>
                <div class="auth">
                    <NavLink className='link bg-success text-white' to="login">Login </NavLink>
                    <NavLink className='link bg-info register text-white' to="signup"></NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;