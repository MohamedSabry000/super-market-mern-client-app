import './navbar.css';
import logo from '../../assests/img/img.png';
import './navbarfunction';
function Navbar() {

    

    return (
        <nav className="navbar navbar-expand-lg  navbar-light customize-navbar justify-content-between" id="navbar">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>  
                         <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>   
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>   
                    </ul>
                </div>
                <a className="navbar-brand" href="#">
                    {/* Logo */}
                    <img src={logo} width="80" />
                    
                </a>
                <div class="auth">
                    <a className='bg-success text-white' href="#">Login </a>
                    <a className='bg-info register text-white' href="#"></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;