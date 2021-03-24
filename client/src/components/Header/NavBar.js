import React, { useRef } from 'react';
import './navBar.css';
import { useHistory } from "react-router-dom"

const NavBar = () => {
    const main = useRef()
    const history = useHistory();
    function dropDownNav() {
        let x = main.current;
        console.log(x)
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (

        <div ref={main} className="topnav" id="myTopnav">
            <a href="" className="active" onClick={() => { history.push(`/`) }}>Home</a>
            <a href="" onClick={() => { history.push(`/catalog`) }}>Catalog</a>
            <a href="" onClick={() => { history.push(`/admin`) }}>Admin</a>
            <a href="" onClick={() => { history.push(`/login`) }}>Login</a>

            <a href="javascript:void(0);" className="icon" onClick={() => dropDownNav()}>
                <span class="material-icons">
                    menu
                    </span>
            </a>
        </div>
    )
}

export default NavBar;