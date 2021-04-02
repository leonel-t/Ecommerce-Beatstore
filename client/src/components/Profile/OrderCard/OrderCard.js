import React from "react";
import "./OrderCard.css";
import { useHistory } from "react-router-dom";
const OrderCard = ({ id, status, orderLines, createdAt }) => {
    const history = useHistory();

    function handleClick() {
        history.push(`profile/order/${id}`);

    }
    const totalPrice = orderLines.map(order => parseFloat(order.price))
    return (
        <div className="--OrderCard">
            <div className="--OrderCard-data">
                <div className="--OrderCard-data-date">
                    <span>Created at: {createdAt}</span>
                </div>
                <div className="--OrderCard-data-number">
                    <span>Order number: {id}</span>
                </div>
                <div className="--OrderCard-data-value">
                    <span>Price: {totalPrice.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue
                    })

                    }</span>
                    <span>Quantity of products: {orderLines.length}</span>
                </div>
                <div className="--OrderCard-data-status">
                    <span>Status: {status}</span>
                </div>
            </div>
            <div className="--OrderCard-detail-btn">
                <button onClick={handleClick}>Details</button>
            </div>
        </div>
    )
};

export default OrderCard;