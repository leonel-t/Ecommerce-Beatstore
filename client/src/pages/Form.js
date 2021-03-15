import React, { Component, useEffect } from "react";
import "./form.css";
import Select from "react-select";
import axios from "axios";
let optionCategories;
export default function Form() {
  const [categories, setCategories] = React.useState([]);
  const [image, setImage] = React.useState({});
  const [audio, setAudio] = React.useState();
  const [errors, setErrors] = React.useState({});
  const [input, setInput] = React.useState({});
  const [cat, setCat] = React.useState([]);
  useEffect(() => {
    const datos = async () => {
      return await fetch("http://localhost:3001/categories")
        .then((response) => response.json())
        .then((optionCategories) => {
          console.log(optionCategories);
          return setCat(optionCategories);
        });
    };

    datos();
  }, [optionCategories]);

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
    form.append("selectCat", input.selectCat);

    form.append("files", image[0]);
    form.append("files", audio[0]);
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
      errors.artist = "artist is required";
    }
    if (!input.price) {
      errors.price = "price is required";
    }
    if (!input.bpm) {
      errors.bpm = "bpm is required";
    }
    if (!input.date) {
      errors.date = "date is required";
    }
    if (!input.scale) {
      errors.scale = "scale is required";
    }
    if (!image) {
      errors.image = "image is required";
    }
    if (!audio) {
      errors.audio = "audio is required";
    }
    return errors;
  }
  const option = cat.map((c) => {
    return {
      value: c.name,
      label: c.name,
    };
  });

  return (
    <form
      enctype="multipart/form-data"
      className="formAdd"
      onSubmit={(e) => handleSubmit(e)}
    >
      {console.log(cat)}
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
      {errors.artist && <p className="danger">{errors.artist}</p>}

      <input
        className={`${errors.artist && "danger"}`}
        name="artist"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>

      <label>price</label>
      {errors.price && <p className="danger">{errors.price}</p>}

      <input
        className={`${errors.price && "danger"}`}
        name="price"
        type="number"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>

      <label>bpm</label>
      {errors.bpm && <p className="danger">{errors.bpm}</p>}

      <input
        className={`${errors.bpm && "danger"}`}
        name="bpm"
        type="number"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>scale</label>
      {errors.scale && <p className="danger">{errors.scale}</p>}

      <input
        className={`${errors.scale && "danger"}`}
        name="scale"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>date</label>
      {errors.date && <p className="danger">{errors.date}</p>}

      <input
        className={`${errors.date && "danger"}`}
        type="date"
        name="date"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>

      <label>image file</label>
      {/* {errors.image && <p className="danger">{errors.image}</p>} */}

      <input
        // className={`${errors.image && "danger"}`}
        type="file"
        name="image"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>audio file</label>
      {/* {errors.audio && <p className="danger">{errors.audio}</p>} */}

      <input
        // className={`${errors.audio && "danger"}`}
        type="file"
        name="audio"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>categories</label>

      <Select
        isMulti
        name="selectCat"
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
