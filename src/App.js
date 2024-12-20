
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js'
import React from 'react'
import {Link} from 'react-router-dom'
import MyRouter from './router/index.js';
import Navbar from './components/Navbar.js'

//<link to = "/">Home</link>
  //  <link to = "/about-us">About Us</link>
    //<link to = "/contact-us">Contact Us</link>
//<Home/> was in App function
function App() {
  return (
    <div>
    
    <Navbar/>
    <MyRouter/> 
      </div>
  );
}

export default App;
