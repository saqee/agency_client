import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import Login from '../Login/Login';
const Navbar = () => {
  const colorNav={
    color:'#474747'
  }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
      <a  href="#"><img className="img-fluid" style={{width:'120px', height:'60px' }} src={logo} alt="" srcset=""/></a>
  

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-5" style={colorNav} href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5"  style={colorNav} href="#">Our Protfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5"  style={colorNav} href="#">Our Team</a>
      </li>
     <li class="nav-item">
        <a class="nav-link mr-5 "  style={colorNav} href="#">Contact Us</a>
      </li> 
    <li>
      <a href="/login" style={{backgroundImage:"linear-gradient(#111430, #111430)", width:'120px', color:'white'}}>Sign In</a>
    </li>
     
      
    </ul>
    
  </div>
</nav>
        </div>
    );
};

export default Navbar;