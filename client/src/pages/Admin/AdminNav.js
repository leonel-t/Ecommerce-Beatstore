import "./adminNav.css";
import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <main className="--admin--main">
      <Link className="--admin--main-btn" to="/add">
        Add Product
      </Link>

      <Link className="--admin--main-btn" to="/addcategories">
        Add categories
      </Link>

      <Link className="--admin--main-btn" to="/listcat">
        List Categories
      </Link>
    </main>
  );
};

export default Admin;
