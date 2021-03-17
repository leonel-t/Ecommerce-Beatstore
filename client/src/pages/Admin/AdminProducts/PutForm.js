import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./form.css";
import Select from "react-select";
import axios from "axios";
import "../../Product/product.css";
import { fetchOneProduct } from "../../../stores/products/products.actions";
const PutForm = ({ STORE_ADMIN, fetchProduct }) => {
  console.log(STORE_ADMIN);
  const { id } = useParams();
  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  const [categories, setCategories] = React.useState([]);
  console.log(categories);
  const [image, setImage] = React.useState({});
  const [audio, setAudio] = React.useState();
  const [errors, setErrors] = React.useState({});
  const product = {
    name: STORE_ADMIN.name,
    description: STORE_ADMIN.description,
    artist: STORE_ADMIN.artist,
    price: STORE_ADMIN.price,
    bpm: STORE_ADMIN.bpm,
    scale: STORE_ADMIN.scale,
    date: STORE_ADMIN.date,
  };
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
    form.append("oldImage", STORE_ADMIN.image);
    form.append("oldAudio", STORE_ADMIN.audio);
    form.append("id", STORE_ADMIN.id);

    const options = {
      method: "PUT",
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
        placeholder={product.name}
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <label>description</label>

      {errors.description && <p className="danger">{errors.description}</p>}
      <textarea
        className={`${errors.description && "danger"}`}
        name="description"
        placeholder={product.description}
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></textarea>
      <label>artist</label>
      {errors.artist && <p className="danger">{errors.artist}</p>}

      <input
        className={`${errors.artist && "danger"}`}
        name="artist"
        placeholder={product.artist}
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>

      <label>price</label>
      {errors.price && <p className="danger">{errors.price}</p>}

      <input
        className={`${errors.price && "danger"}`}
        name="price"
        placeholder={product.price}
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
        placeholder={product.bpm}
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>scale</label>
      {errors.scale && <p className="danger">{errors.scale}</p>}

      <input
        className={`${errors.scale && "danger"}`}
        name="scale"
        placeholder={product.scale}
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>date</label>
      {errors.date && <p className="danger">{errors.date}</p>}

      <input
        className={`${errors.date && "danger"}`}
        name="date"
        placeholder={product.date}
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>

      <label>image file</label>
      {errors.image && <p className="danger">{errors.image}</p>}

      <input
        className={`${errors.image && "danger"}`}
        type="file"
        name="image"
        onChange={(e) => {
          handleInputChange(e);
        }}
      ></input>
      <label>audio file</label>
      {errors.audio && <p className="danger">{errors.audio}</p>}

      <input
        className={`${errors.audio && "danger"}`}
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
};
const mapStateToProps = (state) => {
  return {
    STORE_ADMIN: state.adminReducers.product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchOneProduct(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PutForm);
