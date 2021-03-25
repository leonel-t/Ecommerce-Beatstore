import React, { useState } from "react";
import "./TabUser.css";

const TabUser = () => {
    const [purchases, setPurchases] = useState(true);
    const [comments, setComments] = useState(false);

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
                    <p>My Purchases</p>
                </div>
                <div
                className={comments ? "--TabUser-tab-active" : "--TabUser-tab-inactive"}
                onClick={handleClick(comments ? "" : "comments")}>
                    <p>My Comments</p>
                </div>
            </div>
            <div className="--TabUser-content">
                <div className={purchases ? "--TabUser-content-active" : "--TabUser-content-inactive"}>
                    <p>COMPONENTE COMPRAS</p>
                </div>
                <div className={comments ? "--TabUser-content-active" : "--TabUser-comments-inactive"}>
                    <p>COMPONENTE COMENTARIOS</p>
                </div>
            </div>
        </div>
    )
};

export default TabUser;