import React, { useState } from "react";

//Internationalization
import { withTranslation } from 'react-i18next';

import "./TabUser.css";

const TabUser = ({t}) => {
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
                    <p>{t('page.profile.tabUser.componentPurchases')}</p>
                </div>
                <div className={comments ? "--TabUser-content-active" : "--TabUser-comments-inactive"}>
                    <p>{t('page.profile.tabUser.componentComments')}</p>
                </div>
            </div>
        </div>
    )
};

export default withTranslation()(TabUser);