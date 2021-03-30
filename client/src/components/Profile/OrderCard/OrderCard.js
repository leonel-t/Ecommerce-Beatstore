import React from "react";
import "./OrderCard.css";

const OrderCard = () => {
    return (
        <div className="--OrderCard">
            <div className="--OrderCard-data">
                <div className="--OrderCard-data-date">
                    <span>Date: 12/12/1234</span>
                </div>
                <div className="--OrderCard-data-number">
                    <span>Order number: 1234567890</span>
                </div>
                <div className="--OrderCard-data-value">
                    <span>Price: $123</span>
                    <span>Quantity of products: 12</span>
                </div>
                <div className="--OrderCard-data-status">
                    <span>Status: Complete</span>
                </div>
            </div>
            <div className="--OrderCard-detail-btn">
                <button>Details</button>
            </div>
        </div>
    )
};

export default OrderCard;