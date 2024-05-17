import React, { Component } from 'react'
import srcImg from "../images/avataaars.svg"



export default function home() {
  return (
      <>
          <div id='home' className="homeContent d-flex justify-content-center align-items-center text-white flex-column mt-5 " >
              <div className="homeImage mb-3">
                  <img src={srcImg} alt="" />
              </div>
              <h2 className="upper mb-3 fs-1 fw-bolder">start Framework</h2>
              <div className=" d-flex justify-content-center align-items-center text-white">
                  <span className='line me-3'></span>
                  <i className="fa-solid fa-star"></i>
                  <span className='line ms-3'></span>
              </div>
              <div className='mt-3'>Graphic Artist - Web Designer - Illustrator</div>
          </div>
      </>
  )
}
