import React, { Component } from 'react'

export default class About extends Component {
    state = {

    }

    render() {
        return <>
            <div id='about' className="aboutContent d-flex justify-content-center align-items-center text-white flex-column  " >
                <h2 className="upper mb-3 fs-1 fw-bolder">ABOUT COMPONENT</h2>
                <div className=" d-flex justify-content-center align-items-center text-white mb-2">
                    <span className='line me-3'></span>
                    <i className="fa-solid fa-star"></i>
                    <span className='line ms-3'></span>
                </div>
                <div className="container">
                    <div className="row px-5">
                        <div className="col-md-6 ps-md-5">
                            <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                        </div>
                        <div className="col-md-6 pe-5">
                            <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
}