import React, { Component } from 'react'

export default function contact() {
  return (
      <>
          <div id='contact' className=" colorMain d-flex justify-content-center align-items-center flex-column mt-5 py-5">
              <h2 className="upper mb-3 fs-1 fw-bolder mt-3">CONATCT SECTION</h2>
              <div className=" d-flex justify-content-center align-items-center text-white ">
                  <span className='line me-3 mainColor'></span>
                  <i className="fa-solid fa-star colorMain "></i>
                  <span className='line ms-3 mainColor'></span>
              </div>
          </div>
          <div className='contactForm w-50 mx-auto p-3'>
              <div className='mb-3'>

                  <input id="userName" type="text" placeholder="userName" name="userName" className="form-control z-1 border-0 border-bottom py-3 position-relative" />
              </div>
              <div className='mb-3'>
                  <input id="userAge" type="number" placeholder="userAge" name="userAge" className="form-control z-1 border-0 border-bottom py-3 position-relative" />
              </div>
              <div className='mb-3'>
                  <input id="userEmail" type="email" placeholder="userEmail" name="userEmail" className="form-control z-1 border-0 border-bottom py-3 position-relative" />
              </div>
              <div className='mb-3'>
                  <input id="uPassword" type="password" placeholder="userPassword" name="uPassword" className="form-control z-1 border-0 border-bottom py-3 position-relative" />
              </div>
          </div>
      </>
  )
}

