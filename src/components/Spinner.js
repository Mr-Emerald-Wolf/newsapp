import React, { Component } from 'react'
import loading from '../loading.svg'

export default class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <img src={loading} alt="" />
            </div>
        )
    }
}
