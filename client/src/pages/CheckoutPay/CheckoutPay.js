import React, { useState, useEffect } from "react";
import './checkoutPay.css';
import emailjs from 'emailjs-com';
import { loadStripe } from "@stripe/stripe-js";
import { fetchAllOrders, getAllProductsRequest } from '../../stores/admin/admin.actions';
// import { cleanCart } from '../../stores/user/user.actions';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";

import Loader from "../../../src/assets/images/loader.gif"

import { connect } from "react-redux";



import axios from "axios";
import swal from "sweetalert";
import {serverUrl} from '../../auxiliar/variables';

const stripePromise = loadStripe("pk_test_51Icg9cADTx0pd3FBysK2HLURpyLXLZ6e76DqoGyHAqrIMmzN47GicTKI36JNV82th2uhIDkpRNUu8T0wYOzRai0q00tcTHA1VQ");

function CheckoutPay({ totalPrice, cart, userReducer, store_orders, fetchAllOrders, action }) {
    useEffect(() => {
        fetchAllOrders()
    }, [fetchAllOrders]);
    return (
        <Elements stripe={stripePromise}>
            <div className="container-pay">
                <CheckoutForm price={totalPrice} cart={cart} userReducer={userReducer} store_orders={store_orders} action={action} />
            </div>
        </Elements>
    );
}
const mapStateToProps = (state) => {
    return {
        totalPrice: state.userReducers.totalPrice,
        cart: state.userReducers.cart,
        userReducer: state.userReducers,
        store_orders: state.adminReducers.orders,

    };
};
export default connect(mapStateToProps, { fetchAllOrders })(CheckoutPay);

const CheckoutForm = ({ price, cart, userReducer, store_orders, action }) => {
    const stripe = useStripe();
    const elements = useElements();

    const today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    console.log(today)

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: "",
        email: "",
        date: today
    })

    const handleInputChange = async (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        setLoading(true);

        if (!error) {

            console.log(paymentMethod)
            const { id } = paymentMethod;
            console.log(id)

            try {
                const { data } = await axios.post(
                    `${serverUrl}/api/checkout`,
                    {
                        id,
                        amount: price * 100, //cents
                    }
                );

                let products = cart.map(prod => prod.product.name).join(", ")
                console.log(userReducer)
                const userId = userReducer.user.data.user.id;
                const userForms = await axios.get(`${serverUrl}/infouser`)
                const userForm = userForms.data.filter(user => user.userId === userId)
                let emailData = {
                    email: input.email,
                    id: store_orders[store_orders.length - 1].id,
                    price: userReducer.totalPrice,
                    products: products,
                    date: input.date,
                    fname: userForm[userForm.length - 1].firstName,
                    lname: userForm[userForm.length - 1].lastName,
                    country: userForm[userForm.length - 1].country,
                    city: userForm[userForm.length - 1].city,
                    address: userForm[userForm.length - 1].address,
                    zipcode: userForm[userForm.length - 1].zipCode
                }
                console.log(userId)
                console.log(emailData)
                if (data.message === 'Successful Payment') {
                    // send email
                    emailjs.send('service_b9mqvzg', 'template_lw3aj8d', emailData, 'user_G41cbN7fW7VHqXdcmtBXT')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });

                    action();
                  
                    axios.put(`${serverUrl}/order/${emailData.id}`, {
                        orderStatus: "complete",
                        userName: input.name,
                        userEmail: input.email,
                        total: userReducer.totalPrice
                    })
                    // .then(()=>{
                    //     setTimeout(()=>{
                    //         window.location.assign("./")
                    //     },2000)
                    // })

                }else if (data.message !== 'Successful Payment'){
                    console.log("RAZON:",data.message);
                    axios.put(`${serverUrl}/order/${emailData.id}`, { orderStatus: "complete" })

                        // .then(() => {
                        //     setTimeout(() => {
                        //         window.location.assign("./")
                        //     }, 2000)
                        // })
                }else{
                    console.log("RAZON:", data.message);
                    swal(data.message);
                }
                //clear input
                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    };

    console.log(!stripe || loading);

    return (
        <div className="example example1" >
            {console.log(price)}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="row">
                        <label for="example1-name" >Name</label>
                        <input name="name" onChange={handleInputChange} id="example1-name" type="text" autocomplete="name" />
                    </div>
                    <div className="row">
                        <label for="example1-email" >Email</label>
                        <input onChange={handleInputChange}
                            name="email" type="email" required="" autocomplete="email" />
                    </div>

                </fieldset>
                <fieldset>
                    <div className="row">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#ffffff',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }} />
                    </div>
                </fieldset>
                <button type="submit" >{
                    loading ? (
                        <img alt="imagerandom" height="30" src={Loader} />

                    ) : price > 0 ? (`Pay $${price}`) : ""
                }</button>

            </form>
        </div>



    );
};

