import React from 'react';
import Logo from "./logo.svg"
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'
import "./Header.css"


const Header = () =>{


    return (
      <div className="NavBar" >
        <img className="navbar-zCOIAP" data-id="342fc321-f2b1-4e94-a2f0-d97f2118bd31" src="https://cdn.animaapp.com/projects/604829c37b81d727e7cb8c9e/releases/6048e9a37c95ed32e1c01cfc/img/navbar@1x.png" anima-src="https://cdn.animaapp.com/projects/604829c37b81d727e7cb8c9e/releases/6048e9a37c95ed32e1c01cfc/img/navbar@1x.png" alt="background"/>
        <Link to="/" id="logoLink"><img src={Logo} id="logo" alt="logo"/></Link>
        <SearchBar />
        <div className="navOptions"> 
            <Link to="/" id="option1">option 1</Link>
            <Link to="/" id="option2">option 2</Link>
            <Link to="/" id="option3">option 3</Link>
        </div>
      </div>
    )
}



export default Header;
