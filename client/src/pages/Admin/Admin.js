import './admin.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Admin = () =>{


    return (
        <main className="--admin--main">
            <Link className="--admin--main-btn" to="/add">Add Product</Link>
        </main>
    )
}


  
  
export default Admin;