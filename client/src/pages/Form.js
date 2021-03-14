import React, { Component } from "react";
import "./form.css";
import Select from "react-select";
import axios from "axios";
export default function Form() {
  const [categories, setCategories] = React.useState([]);
  const [image, setImage] = React.useState({});
  const [audio, setAudio] = React.useState();
  const [errors, setErrors] = React.useState({});
  const [input, setInput] = React.useState({});
  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData();
    form.append("name", input.name);
    form.append("description", input.description);
    form.append("artist", input.artist);
    form.append("price", input.price);
    form.append("bpm", input.bpm);
    form.append("scale", input.scale);
    form.append("date", input.date);
    form.append("files", image[0]);
    form.append("files", audio[0]);
    alert(JSON.stringify(input));
    const options = {
      method: "POST",
      url: "http://localhost:3001/products/",
      headers: { "Content-Type": "multipart/form-data" },
      data: form,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const handleInputChange = (event) => {
    if (event.target.name === "image") {
      setImage(event.target.files);
    } else if (event.target.name === "audio") {
      setAudio(event.target.files);
    } else {
      setInput({
        ...input,
        [event.target.name]: event.target.value,
      });
    }
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  function validate(input) {
    let errors = {};

    if (!input.name) {
      errors.name = "name is required";
    }
    if (!input.description) {
      errors.description = "description is required";
    }
    if (!input.artist) {
      errors.artist = "description is required";
    }
    if (!input.price) {
      errors.price = "description is required";
    }
    if (!input.bpm) {
      errors.bpm = "description is required";
    }
    if (!input.date) {
      errors.date = "description is required";
    }
    if (!image) {
      errors.image = "description is required";
    }
    if (!audio) {
      errors.audio = "description is required";
    }
    return errors;
  }

  const option = [
    { value: "rock", label: "Rock" },
    { value: "pop", label: "Pop" },
    { value: "lo-fi", label: "Lo-fi" },
    { value: "chill-hop", label: "Chill-Hop" },
  ];
  return (
    <form
      enctype="multipart/form-data"
      className="formAdd"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label>name</label>
      {errors.name && <p className="danger">{errors.name}</p>}

      <input
        className={`${errors.name && "danger"}`}
        name="name"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <label>description</label>

      {errors.description && <p className="danger">{errors.description}</p>}
      <textarea
        className={`${errors.description && "danger"}`}
        name="description"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></textarea>
      <label>artist</label>
      {errors.description && <p className="danger">{errors.description}</p>}

      <input
        className={`${errors.description && "danger"}`}
        name="artist"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>

      <label>price</label>
      {errors.description && <p className="danger">{errors.description}</p>}

      <input
        className={`${errors.description && "danger"}`}
        name="price"
        type="number"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>

      <label>bpm</label>
      {errors.description && <p className="danger">{errors.description}</p>}

      <input
        className={`${errors.description && "danger"}`}
        name="bpm"
        type="number"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>scale</label>
      {errors.description && <p className="danger">{errors.description}</p>}

      <input
        className={`${errors.description && "danger"}`}
        name="scale"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>date</label>
      {errors.description && <p className="danger">{errors.description}</p>}

      <input
        className={`${errors.description && "danger"}`}
        name="date"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>

      <label>image file</label>
      {errors.description && <p className="danger">{errors.description}</p>}

      <input
        className={`${errors.description && "danger"}`}
        type="file"
        name="image"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>audio file</label>
      {errors.description && <p className="danger">{errors.description}</p>}

      <input
        className={`${errors.description && "danger"}`}
        type="file"
        name="audio"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
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
        onChange={(e) => {
          handleInputChange(e);
        }}
      >
        Submit
      </button>
    </form>
  );
}