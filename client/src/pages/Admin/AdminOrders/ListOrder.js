// import "./listCat.css";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllOrders, deleteOrderById } from "../../../stores/admin/admin.actions";
const ListOrder = ({ fetchAllOrdersEffect, store_orders, deleteOrderByIdEffect }) => {

    useEffect(() => {
        fetchAllOrdersEffect()
    }, [fetchAllOrdersEffect]);

    const handleClickEdit = (orderId, name, description) => {
        // history.push(`/editCat/${categoryId}/${name}/${description}`);
    };
    const handleClickDelete = (id) => {
        try {
            deleteOrderByIdEffect(id);
            fetchAllOrdersEffect()

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="list-users-main">
            <div className="--Cart">
                <div className="--Cart-items">
                    {store_orders && store_orders.length > 0 ? (
                        <>
                            <div>
                                {store_orders.map((order, index) => {
                                    return (
                                        <div key={index} className="--ItemCard">
                                            <div className="--ItemCard-left">
                                                <div className="--ItemCard-data">
                                                    <h2>{order.userId}</h2>
                                                    <p>{order.orderStatus}</p>
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
                        <p className="empy-cart">Empy Cart</p>
                    )}
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        store_orders: state.adminReducers.orders,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllOrdersEffect: () => dispatch(fetchAllOrders()),
        deleteOrderByIdEffect: (id) => dispatch(deleteOrderById(id)),

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOrder);
