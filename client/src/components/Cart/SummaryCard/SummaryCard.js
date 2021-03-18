import "./SummaryCard.css"
import React from "react"


const SummaryCard = ({subtotal, total, discount}) => {
    return (
        <div className="--SummaryCard">
            <span className="--SummaryCard-span">Got promo code?</span>
            <form>
                <input className="--SummaryCard-code" placeholder="Type code..."/>
                <button className="--SummaryCard-buttoncode">Apply</button>
            </form>
            <div className="--SummaryCard-sub">
                <span>Subtotal</span>
                <span>${subtotal}</span>
            </div>
            <div className="--SummaryCard-sub">
                <span>Discount</span>
                <span>${discount}</span>
            </div>
            <div className="--SummaryCard-tot">
                <span>Total</span>
                <span>${total}</span>
            </div>
            <button className="--SummaryCard-buttonout">Checkout</button>
        </div>
    )
}

export default SummaryCard;