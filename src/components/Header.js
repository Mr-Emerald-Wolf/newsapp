import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <div className="container my-4">
                        <h1 to="/" className="text-light display-1 title-1 text-center">Midnight Express</h1>
                        <h1 className="text-light fw-light text-center">Night is the other half of life, and the better half.</h1>
                    </div>
                </header>
            </>
        )
    }
}
