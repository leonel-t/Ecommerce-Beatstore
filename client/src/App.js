import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import Home from './pages/Home/Home.js';
import Product from './pages/Product.js';
import Catalog from './pages/Catalog.js';
import Form from './pages/Form';
//Components
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import FloatingCard from './components/FloatingCard/FloatingCard.js';

const App = () => {

  return (
    
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={()=> <Home/> } />
            <Route exact path="/catalog" render={()=> <Catalog/> } />
            <Route exact path="/product/:productId" render={()=> <Product/> } />
            <Route exact path="/add" render={()=> <Form  /> } />

        </Switch>
    <Header/>
    <FloatingCard/>
    <Footer/>
    </BrowserRouter>
  );
};

export default App;
