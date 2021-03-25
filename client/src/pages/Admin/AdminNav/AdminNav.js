import "./adminNav.css";
import React, {useState} from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  const [activeState, setactiveState] = useState("")
  const handleClickActiveState = (value)=>{
    return setactiveState(value)
  }
  return (
    <main className="--admin--main">
        <Link 
        onClick={()=> handleClickActiveState("Admin Dashboard")}
        className={activeState === "Admin Dashboard" ? "--admin--main-btn --admin--main-btn-active" : "--admin--main-btn"} to="/admin">
        Admin Dashboard
      </Link>
      <Link 
        onClick={()=> handleClickActiveState("List Products")}
        className={activeState === "List Products" ? "--admin--main-btn --admin--main-btn-active" : "--admin--main-btn"} to="/listproducts">
        List Products
      </Link>
      <Link 
       onClick={()=> handleClickActiveState("Add Product")}
       className={activeState === "Add Product" ? "--admin--main-btn --admin--main-btn-active" : "--admin--main-btn"} to="/add">
        Add Product
      </Link>

      <Link 
      onClick={()=> handleClickActiveState("List Categories")}
      className={activeState === "List Categories" ? "--admin--main-btn --admin--main-btn-active" : "--admin--main-btn"} to="/listcat">
        List Categories
      </Link>

      <Link
      onClick={()=> handleClickActiveState("Add Categories")}
       className={activeState === "Add Categories" ? "--admin--main-btn --admin--main-btn-active" : "--admin--main-btn"} to="/addcategories">
        Add Categories
      </Link>
      <Link 
      onClick={()=> handleClickActiveState("List Users")}
      className={activeState === "List Users" ? "--admin--main-btn --admin--main-btn-active" : "--admin--main-btn"} to="/admin/ListUsers">
        List Users
      </Link>

    </main>
  );
};

export default AdminNav;
