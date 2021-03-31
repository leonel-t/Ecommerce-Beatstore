import React, { useState } from "react"
import "./Checkout.css"

const Checkout = () => {
    const [billing, setBilling] = useState(true);
    const [method, setMetod] = useState(false);
    const [payout, setPayout] = useState(false);
    const [done, setDone] = useState(false);

    const handleClick = (tab) => {
        switch (tab) {
            case "billing":
                return () => {
                    setBilling(true)
                    setMetod(false)
                    setPayout(false)
                    setDone(false)
                }
            case "method":
                return () => {
                    setBilling(false)
                    setMetod(true)
                    setPayout(false)
                    setDone(false)
                }
            case "payout":
                return () => {
                    setBilling(false)
                    setMetod(false)
                    setPayout(true)
                    setDone(false)
                }
            case "done":
                return () => {
                    setBilling(false)
                    setMetod(false)
                    setPayout(false)
                    setDone(true)
                }
            default:
                break;
        }
    }

    return (
        <div className="--Checkout">
            <div className="--Checkout-tab">
                <div
                    className={billing ? "--Checkout-tab-active" : "--Checkout-tab-inactive"}
                    onClick={handleClick(billing ? "" : "billing")}>
                    <p>Billing Info</p>
                </div>
                <div
                    className={method ? "--Checkout-tab-active" : "--Checkout-tab-inactive"}
                    onClick={handleClick(method ? "" : "method")}>
                    <p>Payment method</p>
                </div>
                <div
                    className={payout ? "--Checkout-tab-active" : "--Checkout-tab-inactive"}
                    onClick={handleClick(payout ? "" : "payout")}>
                    <p>Payment</p>
                </div>
                <div
                    className={done ? "--Checkout-tab-active" : "--Checkout-tab-inactive"}
                    onClick={handleClick(done ? "" : "done")}>
                    <p>Purchase completed</p>
                </div>
            </div>
            <div className="--Checkout-content">
                <div className={billing ? "--Checkout-content-active" : "--Checkout-content-inactive"}>
                    <form className="--Checkout-content-billing">
                        <div className="--Checkout-content-billing-items"><label>First name</label><input/></div>
                        <div className="--Checkout-content-billing-items"><label>Last name</label><input/></div>
                        <div className="--Checkout-content-billing-items"><label>Country</label><input/></div>
                        <div className="--Checkout-content-billing-items"><label>City</label><input/></div>
                        <div className="--Checkout-content-billing-items"><label>Address</label><input/></div>
                        <div className="--Checkout-content-billing-items"><label>Zip code</label><input/></div>
                        <button>Next</button>
                    </form>
                </div>
                <div className={method ? "--Checkout-content-active" : "--Checkout-content-inactive"}>
                    <p>method</p>
                </div>
                <div className={payout ? "--Checkout-content-active" : "--Checkout-content-inactive"}>
                    <p>payout</p>
                </div>
                <div className={done ? "--Checkout-content-active" : "--Checkout-content-inactive"}>
                    <p>thank you for your purchase, you will soon receive an email</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout