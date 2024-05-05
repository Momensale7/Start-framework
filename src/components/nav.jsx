import React, { Component } from 'react'

export default class nav extends Component{
    state={

    }
    render(){
        return <>
            <nav className="navbar navbar-expand-lg  fixed-top p-4 mainColor">
                <div className="container">
                    <a className="navbar-brand fw-bolder fs-2 text-white text-white" href="#">START FRAMEWORK</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <a className="nav-link text-white fw-bold mt-3 mt-md-0 px2 upper" href="#about">About</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link text-white fw-bold mt-3 mt-md-0 px2 upper" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link text-white fw-bold mt-3 mt-md-0 px2 upper" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    }
}