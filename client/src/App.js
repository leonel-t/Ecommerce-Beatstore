import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Pages
import Home from './pages/Home.js';
import Product from './pages/Product.js';
//Components
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

const App = () => {

  return (
      <BrowserRouter>
        <Header/>
          <Switch>
              <Route exact path="/" render={()=> <Home/> } />
              <Route exact path="/product" render={()=> <Product/> } />
          </Switch>
        <Footer/>
      </BrowserRouter>
  );
};

export default App;
