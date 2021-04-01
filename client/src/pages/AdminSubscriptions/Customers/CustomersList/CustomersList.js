import './customerslist.scss';
import React, {useEffect} from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { getCustomers } from "../../../../stores/AdminSubscriptions/adminSubscriptions.actions";
const CustomersList = ({CUSTOMERS, getCustomersEffect}) =>{

    useEffect(() => {
        getCustomersEffect()
    }, [getCustomersEffect])

    return (
        <>
        {CUSTOMERS.customersLoading
            ?(
                <p>Cargando...</p>
            ):(
                <div className="admin-customerslist-main">
                <h2> Admin Customers List</h2>
                {CUSTOMERS.customers && CUSTOMERS.customers.length > 0
                ?(
                    CUSTOMERS.customers.map((customer, index)=>{
                        return (
                            <p key={index}>{customer.id}</p>
                        )
                    })
                ):(
                    <h2>Not Customers</h2>
                )}
            </div>
            )
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
      CUSTOMERS: state.AdminSubscriptionsReducers,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getCustomersEffect: () => dispatch(getCustomers())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustomersList);
