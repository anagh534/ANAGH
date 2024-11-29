import React from 'react'
import './NavBar.css'
import { Link } from 'react-router'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">ANAGH K R</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link' to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className='nav-link' >Services</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-brands fa-instagram"></i> Instagram</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="fa-brands fa-github"></i> Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar