import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { connect } from "react-redux";

import axios from "axios";

const stripePromise = loadStripe("pk_test_51IacYXDloipSs6XKbHgrFYdB8siv2riOY2FoIz82WGXhlRkGRC5h37tWjeGLPjcZmvbJROADK3nfUblF8B6gwRKm001XPJ1lUM");

function CheckoutPay({ totalPrice }) {
    return (
        <Elements stripe={stripePromise}>
            <div className="row h-100 container-checkout">
                <div className="col-md-4 offset-md-4 h-100">

            <div className=" container-checkout">
                <div >

                    <CheckoutForm price={totalPrice} />
                </div>
            </div>

        </Elements>
    );
}
const mapStateToProps = (state) => {
    return {
        totalPrice: state.userReducers.totalPrice,
    };
};
export default connect(mapStateToProps)(CheckoutPay);

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        setLoading(true);

        if (!error) {
            // console.log(paymentMethod)
            const { id } = paymentMethod;
            try {
                const { data } = await axios.post(
                    "http://localhost:3001/api/checkout",
                    {
                        id,
                        amount: price * 100, //cents
                    }
                );
                console.log(data);

                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    };

    console.log(!stripe || loading);

    return (
        <form className="card card-body card-checkout" onSubmit={handleSubmit}>
            {/* Product Information */}
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQHm4RX2CV6SFg/company-logo_200_200/0/1614611860377?e=2159024400&v=beta&t=KXTwn9uVt9c7rhHUvgnt_4U8F_mBLWrTpfUW_pO55dU"
                alt=""
                className="img-fluid"
            />

            <h3 className="text-center my-2">Price: {price}$</h3>
            {/* User Card Input */}
            <div className="form-group">
                <CardElement />
            </div>

            <button disabled={!stripe} className="btn btn-success">
                {loading ? (
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                    "Buy"
                )}
            </button>
        </form>
    );
};

