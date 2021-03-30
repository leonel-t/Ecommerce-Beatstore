import React from 'react';
import Logo from "../assets/images/logo.png"
import "./Layouts.css"
//Components
//import Header from "../components/Header/Header";
//import HomeHeader from "../components/Header/HomeHeader";
//import AdminHeader from "../components/Header/AdminHeader";
import PagesFooter from '../components/Footer/PagesFooter.js';
import AdminNav from '../pages/Admin/AdminNav/AdminNav';
import HeaderHome from '../components/Header/HeaderHome/HeaderHome';
import HeaderAdmin from '../components/Header/HeaderAdmin/HeaderAdmin';
import HeaderPages from '../components/Header/HeaderPages/HeaderPages';
import { Link } from 'react-router-dom';
// import FloatingCard from './components/FloatingCard/FloatingCard.js';

const HomeLayout = ({ children }) => {


    return (
        <div>
            <HeaderHome></HeaderHome>
         
            {children}
        </div>
    )
}

const PagesLayout = ({ children }) => {
    return (
        <div>
            <HeaderPages></HeaderPages>
            <div className="page-layout-main">
                {children}
            </div>
            <PagesFooter></PagesFooter>
        </div>
    )
}
const ProductLayout = ({ children }) => {
    return (
        <div>
            <HeaderHome></HeaderHome>
                {children}
        </div>
    )
}

const AdminLayout = ({ children }) => {
    return (
        <div>
            <HeaderAdmin></HeaderAdmin>
            <AdminNav/>
            {children}
        </div>
    )
}

const LoginLayout = ({ children }) => {
    return (
        <div className="--Header-Login-bg">
            <div className="--Header-Login-Layout">
                <Link to="/"><img src={Logo} alt="BeatShop" /></Link>
            </div>
            {children}
        </div>
    )
}



export { HomeLayout, PagesLayout, LoginLayout, AdminLayout, ProductLayout };