import "./adminNav.css";
import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <main className="--admin--main">
      <Link className="--admin--main-btn" to="/listproducts">
        List Products
      </Link>
      <Link className="--admin--main-btn" to="/add">
        Add Product
      </Link>

      <Link className="--admin--main-btn" to="/listcat">
        List Categories
      </Link>

      <Link className="--admin--main-btn" to="/addcategories">
        Add Categories
      </Link>
      <Link className="--admin--main-btn" to="/admin/ListUsers">
        List Users
      </Link>

    </main>
  );
};

export default AdminNav;
