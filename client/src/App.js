import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Pages
import Home from "./pages/Home/Home.js";
import Product from "./pages/Product/Product.js";
import Catalog from "./pages/Catalog/Catalog.js";
import Admin from "./pages/Admin/Admin.js";
import Form from "./pages/Admin/AdminProducts/Form";
import PutForm from "./pages/Admin/AdminProducts/PutForm";
import Categories from "./pages/Admin/AdminCategories/AddCategories";
import Login from "./pages/Login/Login.js";
//Components
import Footer from './components/Footer/Footer.js';
// import FloatingCard from './components/FloatingCard/FloatingCard.js';
import Results from './pages/Home/Results/Results.js';
import Header from "./components/Header/Header.js";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/catalog" render={() => <Catalog />} />
        <Route exact path="/product/:productId" render={() => <Product />} />
        <Route exact path="/add" render={() => <Form />} />
        <Route exact path="/admin" render={() => <Admin />} />
        <Route exact path="/put/:id" render={() => <PutForm />} />
        <Route exact path="/addCategories" render={() => <Categories />} />
        <Route exact path="/login" render={() => <Login/>}/>
        <Route exact path="/results/:name" render={()=> <Results /> } />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
