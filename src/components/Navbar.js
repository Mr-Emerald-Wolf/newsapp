import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-custom-2 sticky-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-light title-1">Midnight Express</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link text-gray">About</Link>

                            </li>

                            <li className="nav-item">
                                <Link to="" className="nav-link text-gray">Created November 2021</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary text-light" disabled={true} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar
