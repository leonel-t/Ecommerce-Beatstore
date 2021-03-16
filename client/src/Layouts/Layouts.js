import React from 'react';
//Components
import Header from "../components/Header/Header";
import HomeHeader from "../components/Header/HomeHeader";
import AdminHeader from "../components/Header/AdminHeader";
import Footer from '../components/Footer/Footer.js';
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
            <Footer></Footer>
        </div>
    )
  }
  const LoginLayout = ({children}) => {
    return (
        <div>
            {children}
            <Footer></Footer>
        </div>
    )
  }



export  {HomeLayout, PagesLayout, LoginLayout};