import React, { Component } from "react";
import "./form.css";
import Select from "react-select";

export default function Form() {
  const [categories, setCategories] = React.useState([]);
  const [input, setInput] = React.useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });
  const handleInputChange = (e) => {
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

  function handleSubmit(e) {
    e.preventDefault();
  
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...input,
      }),
    });
  }
  const option = [
    { value: "rock", label: "Rock" },
    { value: "pop", label: "Pop" },
    { value: "lo-fi", label: "Lo-fi" },
    { value: "chill-hop", label: "Chill-Hop" },
  ];
  return (
    <form className="formAdd" onSubmit={(e) => handleSubmit(e)}>
      <label>name</label>
      {errors.name && <p className="danger">{errors.name}</p>}

      <input
        className={`${errors.name && "danger"}`}
        name="name"
        onChange={handleInputChange}
      />
      <label>description</label>

      {errors.description && <p className="danger">{errors.description}</p>}
      <textarea
        className={`${errors.description && "danger"}`}
        name="description"
        onChange={handleInputChange}
      ></textarea>

      <label>price</label>
      <input name="price" onChange={handleInputChange}></input>

      <label>stock</label>
      <input name="stock" onChange={handleInputChange}></input>
      <label>image</label>
      <input name="image" onChange={handleInputChange}></input>
      <label>categories</label>

      <Select
        isMulti
        options={option}
        className="basic-multi-select"
        onChange={setCategories}
      />

      <button
        className="submitbuton"
        type="submit"
        onChange={handleInputChange}
      >
        Submit
      </button>
    </form>
  );
}
