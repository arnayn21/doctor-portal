import React from 'react';
import './NavBar.css';

const NavBar = () => {
    
    return (
            <nav className="navbar navbar-expand-lg navbar-light  justify-content-md-between justify-content-center flex-wrap">
          <div></div>
            <div className="navbar-nav flex-row">
                <a className="nav-item nav-link active" href="/home">Home<span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link active" href="/about">About</a>
                <a className="nav-item nav-link active" href="/dental">Dental Service</a>
                <a className="nav-item nav-link active" href="/reviews">Reviews </a>
                <a className="nav-item nav-link active" href="/blog">Blog</a>
                <a className="nav-item nav-link active" href="/contact">Contact Us</a>
            </div>
        </nav> 
    );
};

export default NavBar;