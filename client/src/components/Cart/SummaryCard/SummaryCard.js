import "./SummaryCard.css"
import React, { useState } from "react"
import sound from "../../../assets/audio/laser-click.mp3"

const SummaryCard = ({funtionD, subtotal, total, discount}) => {
    const [code,setCode] = useState("");
    const audio = new Audio(sound);
          audio.volume=0.1;
    return (
        <div className="--SummaryCard">
            <h1>Cart Summary</h1>
            <span className="--SummaryCard-span">Got promo code?</span>
            <form onSubmit={(e)=> {
                e.preventDefault()
                return funtionD(code)
            }}>
                <input name="code" value={code} onChange={(e)=>setCode(e.target.value)} className="--SummaryCard-code" placeholder="Type code..."/>
                <button onClick={()=>audio.play()} type="submit" className="--SummaryCard-buttoncode">Apply</button>
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
            <button onClick={()=>audio.play()} className="--SummaryCard-buttonout">Checkout</button>
        </div>
    )
}

export default SummaryCard;