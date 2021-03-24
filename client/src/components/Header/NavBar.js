import React, { useRef } from 'react';
import './navBar.css';
import { useHistory, Link } from "react-router-dom"

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
            <Link  className="link active" to="/">Home</Link>
            <Link className="link "  to="/catalog">Catalog</Link>
            <Link className="link "  to="/admin">Admin</Link>
            <Link className="link "  to="/Login">Login</Link>
            <a href="javascript:void(0);" className="icon" onClick={() => dropDownNav()}>
                <span class="material-icons">
                    menu
                    </span>
            </a>
        </div>
    )
}

export default NavBar;