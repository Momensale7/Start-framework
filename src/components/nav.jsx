import React, { Component } from 'react'
import { NavLink,Link } from 'react-router-dom'

export default function nav() {
  return (
       <>
        <nav className="navbar navbar-expand-lg  fixed-top p-4 mainColor">
            <div className="container">
                  <Link to="" className="navbar-brand fw-bolder fs-2 text-white text-white" >START FRAMEWORK</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                              < NavLink to="about" className="nav-link text-white fw-bold mt-3 mt-md-0 px2 fit upper" >About</NavLink>
                        </li>
                        <li className="nav-item me-3">
                              < NavLink to="portfolio" className="nav-link text-white fw-bold mt-3 mt-md-0 fit px2 upper" >Portfolio</ NavLink>
                        </li>
                        <li className="nav-item me-3">
                              < NavLink to="contact" className="nav-link text-white fw-bold mt-3 mt-md-0 fit px2 upper" >Contact</ NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

