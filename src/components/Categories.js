import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";


export default class Categories extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center  gap-2">
                        <Link to="/tech" className="btn btn-dark btn-white w-10">Tech</Link>
                        <Link to="/sports" className="btn btn-dark btn-white w-10">Sports</Link>
                        <Link to="/science" className="btn btn-dark btn-white w-10">Science</Link>
                        <Link to="/business" className="btn btn-dark btn-white w-10">Business</Link>
                        <Link to="/travel" className="btn btn-dark btn-white w-10">Travel</Link>
                        <Link to="/entertainment" className="btn btn-dark btn-white w-10">TV</Link>
                    </div>
                    <Outlet />
                </div>
            </>
        )
    }
}
