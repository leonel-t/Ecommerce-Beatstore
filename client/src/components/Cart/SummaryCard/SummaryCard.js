import "./SummaryCard.css"
import React, { useState } from "react"
import sound from "../../../assets/audio/laser-click.mp3"

//Internationalization
import { withTranslation } from 'react-i18next';

const SummaryCard = ({t,funtionD, subtotal, total, discount}) => {
    const [code,setCode] = useState("");
    const audio = new Audio(sound);
          audio.volume=0.1;
    return (
        <div className="--SummaryCard">
            <h1>{t("page.cart.summary")}</h1>
            <span className="--SummaryCard-span">{t("page.cart.promoCodeTitle")}</span>
            <form onSubmit={(e)=> {
                e.preventDefault()
                return funtionD(code)
            }}>
                <input name="code" value={code} onChange={(e)=>setCode(e.target.value)} className="--SummaryCard-code" placeholder={t("page.cart.promoCodeInput")}/>
                <button onClick={()=>audio.play()} type="submit" className="--SummaryCard-buttoncode">{t("page.cart.promoCodeButton")}</button>
            </form>
            <div className="--SummaryCard-sub">
                <span>{t("page.cart.subtotal")}</span>
                <span>${subtotal}</span>
            </div>
            <div className="--SummaryCard-sub">
                <span>{t("page.cart.discount")}</span>
                <span>${discount}</span>
            </div>
            <div className="--SummaryCard-tot">
                <span>{t("page.cart.total")}</span>
                <span>${total}</span>
            </div>
            <button onClick={()=>audio.play()} className="--SummaryCard-buttonout">{t("page.cart.checkout")}</button>
        </div>
    )
}

export default withTranslation()(SummaryCard);