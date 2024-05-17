import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import React from 'react'
import Layout from "./components/layout";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
let me = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },

    ]
  }

])
export default function App() {
 
  return (
    <>
    <RouterProvider router={me}></RouterProvider>
    </>
    )
}
