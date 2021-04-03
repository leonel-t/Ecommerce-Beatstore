import React, { useEffect, useState } from "react";

//Internationalization
import { withTranslation } from 'react-i18next';
import ComentCard from "../ComentCard/ComentCard";
import OrderCard from "../OrderCard/OrderCard";
import axios from "axios"

import "./TabUser.css";

const TabUser = ({ t, orders }) => {
    const [purchases, setPurchases] = useState(true);
    const [comments, setComments] = useState(false);
    const [userComents, setUserComents] = useState([]);

    // useEffect(async ()=>{
    //     const email = localStorage.getItem("email")
    //     const cmts = await axios.get(`http://localhost:3001/comments/email/${email}`)
    //     setUserComents(cmts.data)
    // },[])

    

    const handleClick = (param) => {
        switch (param) {
            case "purchases":
                return () => {
                    setComments(false);
                    setPurchases(true);
                };
            case "comments":
                return () => {
                    setComments(true);
                    setPurchases(false);
                };
            default:
                break;
        };
    };

    return (
        <div className="--TabUser">
            <div className="--TabUser-tab">
                <div
                    className={purchases ? "--TabUser-tab-active" : "--TabUser-tab-inactive"}
                    onClick={handleClick(purchases ? "" : "purchases")}>
                    <p>{t('page.profile.tabUser.purchases')}</p>
                </div>
                <div
                    className={comments ? "--TabUser-tab-active" : "--TabUser-tab-inactive"}
                    onClick={handleClick(comments ? "" : "comments")}>
                    <p>{t('page.profile.tabUser.coments')}</p>
                </div>
            </div>
            <div className="--TabUser-content">
                <div className={purchases ? "--TabUser-content-active" : "--TabUser-content-inactive"}>
                    {orders && orders.length >= 1 ? (
                        orders.map((order, index) => {
                            return (
                                <OrderCard

                                    key={index}
                                    id={order.id}
                                    status={order.orderStatus}
                                    orderLines={order.orderLines}
                                    createdAt={order.createdAt}

                                />
                            );
                        })
                    ) : (
                        <p>NO PRODUCTS IN DB</p>
                    )}
                </div>
                <div className={comments ? "--TabUser-content-active" : "--TabUser-content-inactive"}>
                    {
                        userComents && userComents.length > 0 
                        ? userComents.map((coment)=><ComentCard coment={coment}/>)
                        : (
                            <p>No comments found.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default withTranslation()(TabUser);