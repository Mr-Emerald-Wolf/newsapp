import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h1 className="display-2 text-light ">About</h1>
                    <p className="display-6 fw-light text-light">A place to relax and read the latest news late at night. </p>
                    <a href='https://github.com/Mr-Emerald-Wolf' className=" text-light ">Made By Shivam Sharma </a>
                    <p className=" text-light ">Using React, Bootstrap, react-Infinite-scroll-component and React Router v6</p>
                    <p className=" text-light ">{"</newscatcher> Free Api to fetch news."}</p>
                    <a href="https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt" className=" text-light ">Made using guidance from Learn ReactJS Playlist by CodeWithHarry.</a>

                </div>
            </>
        )
    }
}
