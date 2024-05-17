import React, { Component } from 'react'

export default function footer() {
  return (
      <>
          <div className='footer mainColor p-100 text-white'>
              <div className="container">
                  <div className="row gy-5">
                      <div className="col-md-4">
                          <h3 className='text-center'>LOCATION</h3>
                          <p className='text-center'>2215 John Daniel Drive</p>
                          <p className='text-center'>Clark, MO 65243</p>
                      </div>
                      <div className="col-md-4">
                          <h3 className='text-center'>AROUND THE WEB</h3>
                          <div className="icons d-flex align-items-center justify-content-center">
                              <i className="fa-brands fa-facebook mx-1 icon"></i>
                              <i className="fa-brands fa-twitter mx-1 icon"></i>
                              <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                              <i className="fa-solid fa-globe mx-1 icon"></i></div>
                      </div>
                      <div className="col-md-4">
                          <h3 className='text-center'>ABOUT FREELANCER</h3>
                          <p className='text-center'> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="copyRight text-center p-3 text-white">
              Copyright © Your Website 2021
          </div>
      </>
  )
}
