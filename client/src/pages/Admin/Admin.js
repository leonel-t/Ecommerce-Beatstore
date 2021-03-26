import React from "react";
import "./admin.css";
//Internationalization
import { withTranslation } from 'react-i18next';
const Admin = ({t}) => {
  return (
    <>
    <main className="--admin--main-panel">
        <h1>{t("page.admin.title")}</h1>
    </main>
    </>
  );
};

export default withTranslation()(Admin);