import React from "react";

//Internationalization
import { withTranslation } from 'react-i18next';
import AdminNav from '../../../pages/Admin/AdminNav/AdminNav';
import "./addCategories.css";
import {serverUrl} from '../../../auxiliar/variables';
function AddCategories({t}) {
  const [input, setInput] = React.useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = React.useState({});
  function validate(input) {
    let errors = {};
    if (!input.name) {
      errors.name = "name is required";
    }
    if (!input.description) {
      errors.description = "description is required";
    }

    return errors;
  }

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "token": localStorage.getItem("token")
        },
      body: JSON.stringify({
        ...input,
      }),
    };
    console.log(requestOptions.body);
    fetch(`${serverUrl}/categories`, requestOptions);
  };
  return (
    <>
    <AdminNav></AdminNav>
    <div className="--Cart-title">
      <h1>Add genre</h1>
    </div>
  <div className="--cat-all">
        <form className="catAdd" onSubmit={(e) => handleSubmit(e)}>
      <h1>{t("page.admin.forms.addGen.addGenre")}</h1>
      <div className="input-name">
        <p>{t("page.admin.forms.addGen.name")}</p>
        <input
          placeholder={t("page.admin.forms.addGen.placeholderOne")}
          className={`${errors.name && "danger"}`}
          type="text"
          name="name"
          onChange={handleInputChange}
          value={input.name}
        />
      </div>
      <div className="input-description">
        {errors.username && <p className="danger">{errors.username}</p>}
        <p>{t("page.admin.forms.addGen.description")}</p>
        <textarea
          placeholder={t("page.admin.forms.addGen.placeholderTwo")}
          className={`${errors.description && "danger"}`}
          type="text"
          name="description"
          onChange={handleInputChange}
          value={input.description}
        />
      </div>
      <div className="button-submit">
        {errors.description && <p className="danger">{errors.password}</p>}
        <button className="--submitbuton" type="submit">
        {t("page.admin.forms.addGen.submit")}
        </button>
      </div>
    </form>
  </div>
</>
  );
}
export default withTranslation()(AddCategories);