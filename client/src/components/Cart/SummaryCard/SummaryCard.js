import "./SummaryCard.css"
import React, { useState } from "react"


const SummaryCard = ({funtionD, subtotal, total, discount}) => {
    const [code,setCode] = useState("")
    return (
        <div className="--SummaryCard">
            <h1>Cart Summary</h1>
            <span className="--SummaryCard-span">Got promo code?</span>
            <form onSubmit={(e)=> {
                e.preventDefault()
                return funtionD(code)
            }}>
                <input name="code" value={code} onChange={(e)=>setCode(e.target.value)} className="--SummaryCard-code" placeholder="Type code..."/>
                <button type="submit" className="--SummaryCard-buttoncode">Apply</button>
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