import "./listOrder.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import FilterOrder from "./FilterOrder"
import { fetchAllOrders, deleteOrderById } from "../../../stores/admin/admin.actions";
const ListOrder = ({ fetchAllOrdersEffect, filtered_orders, deleteOrderByIdEffect }) => {
    let history = useHistory();

    useEffect(() => {
        fetchAllOrdersEffect()
    }, [fetchAllOrdersEffect]);

    const handleClickEdit = (order) => {
        history.push(`/admin/listorders/${order}`);
    };
    const handleClickDelete = (id) => {
        try {
            id ? deleteOrderByIdEffect(id) : console.log("no hay id")
            setTimeout(function () { fetchAllOrdersEffect() }, 1000);



            console.log(id)

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="list-users-main">
            <div className="--Cart">
                <div className="--Cart-items">
                    {filtered_orders && filtered_orders.length > 0 ? (
                        <>
                            <div>
                                <h1 className="title-super">filter by status:</h1> <FilterOrder />
                                {filtered_orders.map((order, index) => {
                                    return (
                                        <div key={index} className="--ItemCard">
                                            <div className="--ItemCard-left">
                                                <div className="--ItemCard-data">
                                                    <h1>user id: {order.userId}</h1>
                                                    <h2>order status: {order.orderStatus}</h2>
                                                    <h2>total: ${order.total}</h2>
                                                </div>
                                            </div>
                                            <div className="--ItemCard-right">
                                                <span onClick={() => handleClickEdit(order.id)}>
                                                    <i class="far fa-edit --ItemCard-editItem"></i>
                                                </span>
                                                <span onClick={() => handleClickDelete(order.id)}>
                                                    <i class="fas fa-trash-alt --ItemCard-deletItem"></i>
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div></div>
                        </>
                    ) : (
                        <p className="empy-cart">There are no results</p>
                    )}
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        filtered_orders: state.adminReducers.ordersFiltered,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllOrdersEffect: () => dispatch(fetchAllOrders()),
        deleteOrderByIdEffect: (id) => dispatch(deleteOrderById(id)),

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOrder);
