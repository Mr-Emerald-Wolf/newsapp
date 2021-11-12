import React, { Component } from 'react'
//import PropTypes from 'prop-types'

export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-custom-2 ">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light title-1" href="/">Midnight Express</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-gray" href="/about">About</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link text-gray" href="/">Created November 2021</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className ="btn btn-outline-secondary text-light" type ="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
