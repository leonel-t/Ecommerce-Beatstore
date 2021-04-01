import React, { useState, useEffect } from "react";
import './checkoutPay.css';
import emailjs from 'emailjs-com';
import { loadStripe } from "@stripe/stripe-js";
// import emailTemplate from "./template.js"
import { fetchAllOrders } from '../../stores/admin/admin.actions';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { connect } from "react-redux";

import axios from "axios";

const stripePromise = loadStripe("pk_test_51IacYXDloipSs6XKbHgrFYdB8siv2riOY2FoIz82WGXhlRkGRC5h37tWjeGLPjcZmvbJROADK3nfUblF8B6gwRKm001XPJ1lUM");

function CheckoutPay({ totalPrice, cart, userReducer, store_orders, fetchAllOrders }) {
    useEffect(() => {
        fetchAllOrders()
    }, [fetchAllOrders]);
    return (
        <Elements stripe={stripePromise}>
            <div className="row h-100 container-checkout">
                <div className="col-md-4 offset-md-4 h-100">
                    <CheckoutForm price={totalPrice} cart={cart} userReducer={userReducer} store_orders={store_orders} />
                </div>
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

const CheckoutForm = ({ price, cart, userReducer, store_orders }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: ""

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
                    "http://localhost:3001/api/checkout",
                    {
                        id,
                        amount: price * 100, //cents
                    }
                );
                console.log(data);
                console.log(input);
                let products = cart.map(prod => prod.product.name).join(", ")

                let emailData = {
                    name: input.name,
                    email: input.email,
                    id: store_orders[store_orders.length - 1].id,
                    price: userReducer.totalPrice,
                    products: products
                }
                // let myHtml = {
                //     myHtml: "<h1>prueba</h1>",
                //     email: input.email
                // }
                //email js
                if (data.message === 'Successful Payment') {
                    emailjs.send('service_b9mqvzg', 'template_lw3aj8d', emailData, 'user_G41cbN7fW7VHqXdcmtBXT')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                }
                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    };

    console.log(!stripe || loading);

    return (
        <div class="cell example example1" id="example-1">
            {console.log(price)}
            <form className="formexam" onSubmit={handleSubmit}>
                <fieldset>
                    <div class="row">
                        <label for="example1-name" data-tid="elements_examples.form.name_label">Name</label>
                        <input name="name" onChange={handleInputChange} id="example1-name" type="text" autocomplete="name" />
                    </div>
                    <div class="row">
                        <label for="example1-email" >Email</label>
                        <input onChange={handleInputChange}
                            name="email" type="email" required="" autocomplete="email" />
                    </div>

                </fieldset>
                <fieldset>
                    <div class="row">
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
                <button type="submit" >Pay ${price}</button>

            </form>
        </div>



    );
};

