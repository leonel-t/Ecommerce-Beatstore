import "./SummaryCard.css"
import React, { useState } from "react"
import { connect } from 'react-redux';
import sound from "../../../assets/audio/laser-click.mp3"
import { getDiscountCoupon } from '../../../stores/user/user.actions';
//Internationalization
import { withTranslation } from 'react-i18next';
import { useHistory } from "react-router-dom"

const SummaryCard = ({ t, getDiscountCouponEffect, STORE_USER, subtotal, total, discount }) => {
    const history = useHistory()

    const [code, setCode] = useState("");
    const audio = new Audio(sound);
    audio.volume = 0.1;
    //USER
    var userStore = STORE_USER.user && STORE_USER.user.data && STORE_USER.user.data.user ? STORE_USER.user.data.user : null;
    //###########################################################################################################################

    const user = {
        userState: userStore ? true : false,
        id: userStore && userStore.id ? userStore.id : 0,
        orderId: STORE_USER.cartDetaills.id ? STORE_USER.cartDetaills.id : 0
    }
    const handleDiscount = (code) => {
        getDiscountCouponEffect(code, user)
    }
    return (
        <div className="--SummaryCard">
            <h1>{t("page.cart.summary")}</h1>
            <span className="--SummaryCard-span">{t("page.cart.promoCodeTitle")}</span>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleDiscount(code)
            }}>
                <input name="code" value={code} onChange={(e) => setCode(e.target.value)} className="--SummaryCard-code" placeholder={t("page.cart.promoCodeInput")} />
                <button onClick={() => audio.play()} type="submit" className="--SummaryCard-buttoncode">{t("page.cart.promoCodeButton")}</button>
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
            <button onClick={() => history.push("/checkout")} className="--SummaryCard-buttonout">{t("page.cart.checkout")}</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        STORE_USER: state.userReducers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDiscountCouponEffect: (code, user) => dispatch(getDiscountCoupon(code, user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(SummaryCard));

