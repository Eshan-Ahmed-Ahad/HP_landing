import React from 'react';

function Navbar(props) {
    return (
        <div className="navbar-area">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="index.html" >
                            {/* <!-- <img src="assets/img/logo/logo-website.png" alt=""> --> */}
                            Hablu-Programmer
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" data-scroll-nav="0" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link dropdown-toggle" data-scroll-nav="1" href="#" data-toggle="dropdown">Services</a>
                                    <div className="dropdown">
                                        
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Learn Coding  <sup className="text-denger">HOT</sup></a>
                                            <a className="dropdown-item" href="#">Courses</a>
                                            <a className="dropdown-item" href="#">Applications</a>
                                            <a className="dropdown-item" href="#">Sponsors </a>
                                            <a className="dropdown-item" href="#">HIRE US</a>
                                            <a className="dropdown-item" href="#">Donation      <sup style={{fontWeight:600}}>Imp</sup></a>
                                        </div>
                                    </div>

                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" data-scroll-nav="2" href="#aboutme">About</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" data-scroll-nav="3" href="#Articles">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#faq">FAQ</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#code">Code Runer <sup className="text-primary">New</sup> </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"  href="">Account</a>
                                </li>
                           </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;