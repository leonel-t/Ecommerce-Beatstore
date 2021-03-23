import React from 'react';
import Logo from "../assets/images/logo.png"
import "./Layouts.css"
//Components
import Header from "../components/Header/Header";
import HomeHeader from "../components/Header/HomeHeader";
import AdminHeader from "../components/Header/AdminHeader";
import Footer from '../components/Footer/Footer.js';
import PagesFooter from '../components/Footer/PagesFooter.js';
import { Link } from 'react-router-dom';
// import FloatingCard from './components/FloatingCard/FloatingCard.js';

const HomeLayout = ({children}) => {


    return (
        <div>
            <HomeHeader></HomeHeader>
            {children}
            <Footer></Footer>
        </div>
    )
  }

  const PagesLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
            <PagesFooter></PagesFooter>
        </div>
    )
  }

  const AdminLayout = ({children}) => {
    return (
        <div>
            <AdminHeader></AdminHeader>
            {children}
        </div>
    )
  }

  const LoginLayout = ({children}) => {
    return (
        <div>
            <div className="--Header-Login-Layout">
                <Link to="/"><img src={Logo} alt="BeatShop"/></Link>
            </div>
            {children}
        </div>
    )
  }



export  {HomeLayout, PagesLayout, LoginLayout, AdminLayout};