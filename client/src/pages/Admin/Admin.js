import React from "react";
import AdminNav from "./AdminNav/AdminNav";
import "./admin.css";
const Admin = () => {
  return (
    <>
    <AdminNav/>
    <main className="--admin--main-panel">
        <h1>ADMIN</h1>
    </main>
    </>
  );
};

export default Admin;