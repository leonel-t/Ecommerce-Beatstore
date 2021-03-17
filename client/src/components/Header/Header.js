import React, { useState } from 'react';
import "./Header.css"
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import SearchImg from "./Search.png"
import './Header.css'
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../stores/products/products.actions';


const Header = () =>  {
    const [name, setName] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (e) => {
        setName(e.target.value);
    }
        
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProducts(name));
        history.push(`/results/${name}`);
    }

    return (
      <header className="--newHeader-main" >
          <div className="--newHeader-main-row">
            <div className="--newHeader-main-row-col-logo">
                <Link to="/"><img src={Logo} alt="BeatShop"></img></Link>
            </div>
            <div className="--newHeader-main-row-col-menu">
                
               <form onSubmit={handleSubmit} className='--newHeader-main-row-col-menu-form'>
                    <div className="--newHeader-main-row-col-menu-form-div">
                        <input onChange={handleChange} name="name" value={name} placeholder="Search..." />
                        <img className="--newHeader-main-row-col-menu-form-div-img" onClick={handleSubmit} src={SearchImg} alt="SearchIcon" />
                    </div>
                </form>

            </div>
            <div className="--newHeader-main-row-col-menu">
                <ul className="--newHeader-main-row-col-menu-ul">
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/">Home</Link></li>
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/catalog">Catalog</Link></li>
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/login">Login</Link></li>
                    <li><Link className="--newHeader-main-row-col-menu-link" to="/add">Admin</Link></li>
                </ul>
            </div>
            <div className="--newHeader-main-row-col-user">
                <div className="--newHeader-main-row-col-user-icon">
                    <span class="material-icons --user-icon">
                    account_circle
                    </span>
                </div>
                <div className="--newHeader-main-row-col-user-options">
                    <p>Login / Register</p>
                </div>
            </div>
          </div>
      </header>
    )
}



export default Header;