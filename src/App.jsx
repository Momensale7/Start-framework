import { Component } from "react";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default class App extends Component{
  state={

  }
  render(){
    return <>
  
    <Nav/>
    <Home/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  }
}