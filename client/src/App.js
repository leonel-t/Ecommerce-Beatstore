import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Layouts
import { HomeLayout, PagesLayout, LoginLayout } from './Layouts/Layouts';

//Pages
import Home from "./pages/Home/Home.js";

import Product from "./pages/Product/Product.js";
import Catalog from "./pages/Catalog/Catalog.js";
import Admin from "./pages/Admin/Admin.js";
import Form from "./pages/Admin/AdminProducts/Form";
import PutForm from "./pages/Admin/AdminProducts/PutForm";
import Categories from "./pages/Admin/AdminCategories/AddCategories";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register";
import Results from './pages/Home/Results/Results.js';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact path="/" component={Home} layout={HomeLayout} />
        <RouteWrapper exact path="/catalog" component={Catalog} layout={PagesLayout} />
        <RouteWrapper exact path="/product/:productId" component={Product} layout={PagesLayout} />
        <RouteWrapper exact path="/add" component={Form} layout={PagesLayout} />
        <RouteWrapper exact path="/admin" component={Admin} layout={PagesLayout} />
        <RouteWrapper exact path="/put/:id" component={PutForm} layout={PagesLayout} />
        <RouteWrapper exact path="/addCategories" component={Categories} layout={PagesLayout} />
        <RouteWrapper exact path="/login" component={Login} layout={LoginLayout} />
        <RouteWrapper exact path="/results/:name" component={Results} layout={PagesLayout} />
        <RouteWrapper exact path="/register" component={Register} layout={LoginLayout} />
      </Switch>
    </BrowserRouter>
  );
};
function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}
export default App;
