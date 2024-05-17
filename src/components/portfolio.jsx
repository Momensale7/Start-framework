import React, { Component, useState } from 'react'
import srcImg1 from "../images/poert1.png"
import srcImg2 from "../images/port2.png"
import srcImg3 from "../images/port3.png"


export default function portfolio() {

    let [isShow,setShow]=useState(false)
   
    function showModalI(srcc){
        document.getElementById('srcImg').src = srcc;
        if(isShow){
            // console.log('is show')
            setShow(false);
            document.getElementById('port1').classList.add('d-none')
            document.getElementById('port1').classList.remove('d-block')
        }else{
            // console.log('close')
            setShow(true)
            document.getElementById('port1').classList.add('d-block')
            document.getElementById('port1').classList.remove('d-none')


        }

    }

  return (
      <>
          <div id='port1' className='d-none bg-dark bg-opacity-50  vh-100 w-100 d-flex justify-content-center align-items-center position-fixed z-3' onClick={() => showModalI()}>
              <img id='srcImg' src={srcImg1} className='w-50  ' alt="" />
          </div>
          <div id='portfolio' className=" colorMain d-flex justify-content-center align-items-center  flex-column mt-5 pt-5 mb-5 ">
              <h2 className="upper mb-3 fs-1 fw-bolder mt-3">PORTFOLIO COMPONENT</h2>
              <div className=" d-flex justify-content-center align-items-center text-white" >
                  <span className='line me-3 mainColor'></span>
                  <i className="fa-solid fa-star colorMain "></i>
                  <span className='line ms-3 mainColor'></span>
              </div>
             
              <div className="container mt-2">
                  <div className="row gy-5">
                      <div className="col-md-6 col-lg-4" onClick={() => showModalI(srcImg1)}>
                          <div className="item position-relative rounded-2 overflow-hidden">
                              <img src={srcImg1} className='img-fluid pointer' alt="" />
                              <div className="overlay d-flex align-items-center justify-content-center">
                                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4" onClick={() => showModalI(srcImg2)}>
                          <div className="item position-relative rounded-2 overflow-hidden">
                              <img src={srcImg2} className='img-fluid pointer' alt="" />
                              <div className="overlay d-flex align-items-center justify-content-center">
                                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4" onClick={() => showModalI(srcImg3)}>
                          <div className="item position-relative rounded-2 overflow-hidden">
                              <img src={srcImg3} className='img-fluid pointer' alt="" />
                              <div className="overlay d-flex align-items-center justify-content-center">
                                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4" onClick={() => showModalI(srcImg1)}>
                          <div className="item position-relative rounded-2 overflow-hidden">
                              <img src={srcImg1} className='img-fluid pointer' alt="" />
                              <div className="overlay d-flex align-items-center justify-content-center">
                                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4" onClick={() => showModalI(srcImg2)}>
                          <div className="item position-relative rounded-2 overflow-hidden">
                              <img src={srcImg2} className='img-fluid pointer' alt="" />
                              <div className="overlay d-flex align-items-center justify-content-center">
                                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-4" onClick={() => showModalI(srcImg3)}>
                          <div className="item position-relative rounded-2 overflow-hidden">
                              <img src={srcImg3} className='img-fluid pointer' alt="" />
                              <div className="overlay d-flex align-items-center justify-content-center">
                                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
