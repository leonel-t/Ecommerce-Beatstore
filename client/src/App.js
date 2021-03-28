import React, {useState, useMemo} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {AudioContext} from './components/musicPlayer/AudioContext';
//Layouts
import {
  PagesLayout,
  HomeLayout,
  LoginLayout,
  AdminLayout,
} from "./Layouts/Layouts";

//Pages
import Home from "./pages/Home/Home.js";
import MusicPlayer from "./components/musicPlayer/MusicPlayer"
import Product from "./pages/Product/Product.js";
import Catalog from "./pages/Catalog/Catalog.js";
import Form from "./pages/Admin/AdminProducts/AddProduct";
import PutForm from "./pages/Admin/AdminProducts/EditProduct";
import Categories from "./pages/Admin/AdminCategories/AddCategories";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register";
import Results from "./pages/Home/Results/Results.js";
import Cart from "./pages/Cart/Cart";
import EditCategories from './pages/Admin/AdminCategories/EditCategories';
import Admin from './pages/Admin/Admin';
import AdminListUsers from './pages/Admin/AdminListUsers/AdminListUsers';
import ProductList from './pages/Admin/AdminProducts/ListProducts';

import Profile from './pages/Auth/Profile'
import LoginGithub from './pages/Login/LoginGithub'
import ListCategories from "./pages/Admin/AdminCategories/ListCategories";
import './pages/Admin/AdminProducts/listProduct.css';
import ResetPass from './components/LoginCard/ResetPass/ResetPass';
import InsCode from './components/LoginCard/ResetPass/InsCode';



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact path="/" component={Home} layout={HomeLayout} />
        <RouteWrapper
          exact
          path="/catalog"
          component={Catalog}
          layout={PagesLayout}
        />
        <RouteWrapper
          exact
          path="/product/:productId"
          component={Product}
          layout={PagesLayout}
        />
        <RouteWrapper exact path="/listproducts" component={ProductList} layout={AdminLayout} />
        <RouteWrapper exact path="/listcat" component={ListCategories} layout={AdminLayout} />
        <RouteWrapper exact path="/editCat/:idCat/:name/:description" component={EditCategories} layout={AdminLayout} />
        <RouteWrapper exact path="/add" component={Form} layout={AdminLayout} />
        <RouteWrapper exact path="/admin" component={Admin} layout={AdminLayout} />
        <RouteWrapper exact path="/admin/ListUsers" component={AdminListUsers} layout={AdminLayout} />
        <RouteWrapper exact path="/put/:id" component={PutForm} layout={PagesLayout} />
        <RouteWrapper exact path="/addCategories" component={Categories} layout={AdminLayout} />
        <RouteWrapper exact path="/login" component={Login} layout={LoginLayout} />
        <RouteWrapper exact path="/player" component={MusicPlayer} layout={LoginLayout} />
        <RouteWrapper exact path="/results/:name" component={Results} layout={PagesLayout} />
        <RouteWrapper exact path="/register" component={Register} layout={LoginLayout} />
        <RouteWrapper exact path="/resetpass" component={ResetPass} layout={LoginLayout} />
        <RouteWrapper exact path="/inscode" component={InsCode} layout={LoginLayout} />
        <RouteWrapper exact path="/cart" component={Cart} layout={PagesLayout} />
        <RouteWrapper exact path="/profile" component={Profile} layout={PagesLayout} />
        <RouteWrapper exact path="/login/github/:email/:password" component={LoginGithub} layout={PagesLayout} />
      </Switch>
    </BrowserRouter>
  );
};
function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  const [audioList, setAudioList] = useState([])
  const providerValue = useMemo(()=>({audioList, setAudioList}),[audioList, setAudioList])
  return (
    <AudioContext.Provider value={providerValue}>
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
    </AudioContext.Provider>
  );
}
export default App;
