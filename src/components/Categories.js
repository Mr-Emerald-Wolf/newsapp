import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center  gap-2">
                        <a href="/" className="btn btn-dark btn-white w-10">Tech</a>
                        <a href="/" className="btn btn-dark btn-white w-10">Sports</a>
                        <a href="/" className="btn btn-dark btn-white w-10">World</a>
                        <a href="/" className="btn btn-dark btn-white w-10">Finance</a>
                        <a href="/" className="btn btn-dark btn-white w-10">Health</a>
                        <a href="/" className="btn btn-dark btn-white w-10">Media</a>
                    </div>
                </div>
            </>
        )
    }
}
