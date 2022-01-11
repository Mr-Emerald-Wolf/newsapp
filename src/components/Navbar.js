import React from 'react'
import { Link, useSearchParams} from "react-router-dom";


const Navbar = () => {

    const [search, setSearch] = useSearchParams();
    const HandleSubmit = () => {
        var x = document.getElementById("query").value;
        setSearch({ query:  x});
      };
    //useState, define functions here
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
                                    <div className="navbar-text ">Created November 2021</div>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </>
    )
}
export default Navbar
