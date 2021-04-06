import "./orderwidget.scss";
import React from "react";

const OrderWidget = ()=>{
    return (
        <>
        <div className="--order-widget-title">
            <h1>Orders Live</h1>
        </div>
        <div className="--order-widget-main">
            <div className="--order-widget-col-cart">
                <p>Cart</p>
            </div>
            <div className="--order-widget-col-create">
                <p>Create</p>
            </div>
            <div className="--order-widget-col-process">
                <p>Process</p>
            </div>
            <div className="--order-widget-col-cancel">
                <p>Cancel</p>
            </div>
            <div className="--order-widget-col-complete">
                <p>Complete</p>
            </div>
        </div>
        </>
    )
};

export default OrderWidget