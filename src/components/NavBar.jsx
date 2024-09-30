import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container">
                <a className="navbar-brand" href="/">ANAGH K R</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blogs</a>
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
                            <a className="nav-link" href="#"><i class="fa-brands fa-github"></i> Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar