import React from "react";
import "./addCategories.css";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { putCategoryById } from "../../../stores/admin/admin.actions";
import AdminNav from '../../../pages/Admin/AdminNav/AdminNav';
function EditCategories({ putCategoryByIdEffect }) {
  const [input, setInput] = React.useState({
    name: "",
    description: "",
  });
  const [errors, setErrors] = React.useState({});
  const { idCat, name, description } = useParams();

  console.log(idCat)
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
    return putCategoryByIdEffect(idCat, JSON.stringify({
      ...input,
    }))
  };
  return (
    <>
    <AdminNav></AdminNav>
    <form className="catAdd" onSubmit={(e) => handleSubmit(e)}>
      <h1>Add Category:</h1>
      <div>
        <p>name:</p>
        <input
          className={`${errors.name && "danger"}`}
          type="text"
          name="name"
          onChange={handleInputChange}
          value={input.name}
          placeholder={name}
        />
      </div>
      <div>
        {errors.username && <p className="danger">{errors.username}</p>}
        <p>description:</p>
        <textarea
          placeholder={description}
          className={`${errors.description && "danger"}`}
          type="text"
          name="description"
          onChange={handleInputChange}
          value={input.description}

        />
      </div>
      <div>
        {errors.description && <p className="danger">{errors.password}</p>}
        <button className="--submitbuton" type="submit">
          Submit
        </button>
      </div>
    </form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    STORE_PRODUCT: state.productsReducers,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    putCategoryByIdEffect: (idCat, category) => dispatch(putCategoryById(idCat, category)),

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCategories);

