//import "./listProduct.css";
import React from "react";

import { connect } from "react-redux";
import { useParams } from 'react-router';

const OrderDetails = ({ order }) => {
    const { id } = useParams();
    console.log("la id es" + id)
    const totalPrice = order[0].orderLines.map(order => parseFloat(order.price))


    return (
        <div>
            <div className="--Orders">
                <div className="--Orders">
                    {order && order.length > 0 ? (
                        <>
                            <div>
                                {order[0].orderLines.map((product, index) => {
                                    return (
                                        <div key={index} className="--ItemCard">
                                            <div className="--ItemCard-left">
                                                <img
                                                    alt="albumImg"
                                                    src={`http://localhost:3001/images/${product.product.image}`}
                                                />
                                                <div className="--ItemCard-data">
                                                    <h2>{product.product.name}</h2>
                                                    <p>{product.product.artist}</p>
                                                </div>
                                            </div>
                                            <div className="--ItemCard-right">
                                                <h1 >
                                                    ${product.product.price}
                                                </h1>
                                                <span >

                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}

                                <h1 className="total">Total price:
                                    {
                                        totalPrice && totalPrice.length > 0 ? (
                                            totalPrice.reduce((accumulator, currentValue) => {
                                                return accumulator + currentValue
                                            })

                                        ) : (
                                            <div> </div>
                                        )

                                    }

                                </h1>

                            </div>
                        </>
                    ) : (
                        <p className="empty-cart">Empty Cart</p>
                    )
                    }
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        order: state.userReducers.orders,
    };
};

export default connect(mapStateToProps)(OrderDetails);
