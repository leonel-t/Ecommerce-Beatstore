import React, { useState } from "react"
import TabBilling from "../../components/CheckoutTabs/TabBilling/TabBilling";
import CheckoutPay from "../CheckoutPay/CheckoutPay";
import "./Checkout.css"

const Checkout = () => {
    const [billing, setBilling] = useState(true);
    const [payout, setPayout] = useState(false);
    const [done, setDone] = useState(false);

    const handleClick = (tab) => {
        switch (tab) {
            case "billing":
                    setBilling(true)
                    setPayout(false)
                    setDone(false)
                    break
            case "payout":
                    setBilling(false)
                    setPayout(true)
                    setDone(false)
                    break
            case "done":
                    setBilling(false)
                    setPayout(false)
                    setDone(true)
                    break
            default:
                break
        }
    }

    const formBillingComplete = () => {
        handleClick("payout");
    }
    const paymentComplete = () => {
        handleClick("done");
    }

    return (
        <div className="--Checkout">
            <div className="--Checkout-tab">
                <div
                    className={billing ? "--Checkout-tab-active" : "--Checkout-tab-inactive"}
                    onClick={()=>handleClick(billing ? "" : "billing")}>
                    <p>Billing Info</p>
                </div>
                <div
                    className={payout ? "--Checkout-tab-active" : "--Checkout-tab-inactive"}
                    onClick={()=>handleClick(payout ? "" : "payout")}>
                    <p>Payment</p>
                </div>
                <div
                    className={done ? "--Checkout-tab-active" : "--Checkout-tab-inactive"}
                    onClick={()=>handleClick(done ? "" : "done")}>
                    <p>Purchase completed</p>
                </div>
            </div>

            {/* components */}

            <div className="--Checkout-content">
                <div className={billing ? "--Checkout-content-active" : "--Checkout-content-inactive"}>
                    <TabBilling f={formBillingComplete}/>
                </div>
                <div className={payout ? "--Checkout-content-active" : "--Checkout-content-inactive"}>
                    <CheckoutPay action={paymentComplete}/>
                </div>
                <div className={done ? "--Checkout-content-active" : "--Checkout-content-inactive"}>
                    <p>thank you for your purchase, you will soon receive an email</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout