import React from 'react'
import Nav from './nav'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
export default function layout() {
  return (
    <>
      <Nav />
      <Outlet></Outlet>
      <Footer />
    </>
  )
}
