import './customers.scss';
import React from 'react';

//components 
import CustomersList from './CustomersList/CustomersList';

const Customers = () =>{

    return (
        <>
            <main className="admin-customers-main">
                <h1> Admin Customers</h1>
                <div>
                    <CustomersList/>
                </div>
            </main>
        </>
    )
}

export default Customers