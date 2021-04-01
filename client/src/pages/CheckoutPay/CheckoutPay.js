import React, { useState } from "react";

import './checkoutPay.css';
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { connect } from "react-redux";

import axios from "axios";

const stripePromise = loadStripe("pk_test_51IbFjrLDJyVvtDkgSdbcQBERHyS60JKwwgP1txRVecZIQaA268HyHtWB9o285SwM1H9A1EhoUL7DMU6iKgIzlqbk00wBHvgczU");

function CheckoutPay({ totalPrice }) {
    return (
        <Elements stripe={stripePromise}>
            <div className="row h-100 container-checkout">
                <div className="col-md-4 offset-md-4 h-100">
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
        <div class="cell example example1" id="example-1">
            {console.log(price)}
            <form className="formexam" onSubmit={handleSubmit}>
                <fieldset>
                    <div class="row">
                        <label for="example1-name" data-tid="elements_examples.form.name_label">Name</label>
                        <input id="example1-name" data-tid="elements_examples.form.name_placeholder" type="text" placeholder="Jane Doe" required="" autocomplete="name" />
                    </div>
                    <div class="row">
                        <label for="example1-email" data-tid="elements_examples.form.email_label">Email</label>
                        <input id="example1-email" data-tid="elements_examples.form.email_placeholder" type="email" placeholder="janedoe@gmail.com" required="" autocomplete="email" />
                    </div>
                    <div class="row">
                        <label for="example1-phone" data-tid="elements_examples.form.phone_label">Phone</label>
                        <input id="example1-phone" data-tid="elements_examples.form.phone_placeholder" type="tel" placeholder="(941) 555-0123" required="" autocomplete="tel" />
                    </div>
                </fieldset>
                <fieldset>
                    <div class="row">
                        <CardElement />
                    </div>
                </fieldset>
                <button type="submit" data-tid="elements_examples.form.pay_button">Pay ${price}</button>

            </form>
        </div>



    );
};

