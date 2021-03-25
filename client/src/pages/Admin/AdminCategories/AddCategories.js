import React from "react";
import "./addCategories.css";

function AddCategories() {
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
    fetch("http://localhost:3001/categories", requestOptions);
  };
  return (
    <form className="catAdd" onSubmit={(e) => handleSubmit(e)}>
      <h1>Add Category:</h1>
      <div>
        <p>name:</p>
        <input
          placeholder="type the category name"
          className={`${errors.name && "danger"}`}
          type="text"
          name="name"
          onChange={handleInputChange}
          value={input.name}
        />
      </div>
      <div>
        {errors.username && <p className="danger">{errors.username}</p>}
        <p>description:</p>
        <textarea
          placeholder="type the description here"
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
  );
}
export default AddCategories;
