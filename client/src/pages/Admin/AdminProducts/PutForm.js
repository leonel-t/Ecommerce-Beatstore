import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./form.css";
import Select from "react-select";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../Product/product.css";
import { fetchOneProduct } from "../../../stores/admin/admin.actions";
import Admin from "../Admin";

const PutForm = ({ STORE_ADMIN, fetchProduct }) => {
  const history = useHistory();
  const storeProduct = STORE_ADMIN.product;

  const { id } = useParams();
  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  const [categories, setCategories] = React.useState([]);
  console.log(categories);
  const [image, setImage] = React.useState({});
  const [audio, setAudio] = React.useState();
  const [editFiles, setEditFiles] = React.useState(false);
  const [editImage, setEditImage] = React.useState(false);
  const [editAudio, setEditAudio] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [cat, setCat] = React.useState([]);
  useEffect(() => {
    const datos = async () => {
      return await fetch("http://localhost:3001/categories")
        .then((response) => response.json())
        .then((optionCategories) => {
          return setCat(optionCategories);
        });
    };

    datos();
  }, []);
  var product = {};
  if (storeProduct.name) {
    product = {
      name: storeProduct.name,
      description: storeProduct.description,
      artist: storeProduct.artist,
      price: storeProduct.price,
      bpm: storeProduct.bpm,
      scale: storeProduct.scale,
      date: storeProduct.date,
    };
  } else {
    product = {
      name: "No Product",
      description: "No Product",
      artist: "No Product",
      price: "No Product",
      bpm: "No Product",
      scale: "No Product",
      date: "No Product",
    };
  }
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
    if (image && image[0] && editFiles === "edit") {
      form.append("files", image[0]);
    }
    if (audio && audio[0] && editFiles === "edit") {
      form.append("files", audio[0]);
    }
    form.append("oldImage", storeProduct.image);
    form.append("oldAudio", storeProduct.audio);
    form.append("id", storeProduct.id);
    form.append("editFiles", editFiles);
    form.append("editImage", editImage);
    form.append("editAudio", editAudio);

    const options = {
      method: "PUT",
      url: "http://localhost:3001/products/",
      headers: { "Content-Type": "multipart/form-data" },
      data: form,
    };

    axios
      .request(options)
      .then(function (response) {
        return history.push("/admin");
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  const handleInputChange = (event) => {
    if (event.target.name === "image") {
      setImage(event.target.files);
      setEditFiles("edit");
      setEditImage("edit");
    } else if (event.target.name === "audio") {
      setAudio(event.target.files);
      setEditFiles("edit");
      setEditAudio("edit");
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

  return (
    <div class="subContainer">
      <Admin />

      <h2>Complete product data:</h2>
      <form
        enctype="multipart/form-data"
        class="container formAdd"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div class="column-1 box">
          <label>Name</label>
          {errors.name && <p className="danger">{errors.name}</p>}

          <input
            className={`${errors.name && "danger"}`}
            name="name"
            placeholder={product.name}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <label>Description</label>

          {errors.description && <p className="danger">{errors.description}</p>}
          <textarea
            className={`${errors.description && "danger"}`}
            placeholder={product.description}
            name="description"
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></textarea>
          <label>Artist</label>
          {errors.artist && <p className="danger">{errors.artist}</p>}

          <input
            className={`${errors.artist && "danger"}`}
            name="artist"
            placeholder={product.artist}
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></input>

          <label>Price</label>
          {errors.price && <p className="danger">{errors.price}</p>}

          <input
            placeholder={product.price}
            className={`${errors.price && "danger"}`}
            name="price"
            type="number"
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></input>

          <label>BPM</label>
          {errors.bpm && <p className="danger">{errors.bpm}</p>}

          <input
            placeholder={product.bpm}
            className={`${errors.bpm && "danger"}`}
            name="bpm"
            type="number"
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></input>
        </div>
        <div class="column-2 box">
          <label>Scale</label>
          {errors.scale && <p className="danger">{errors.scale}</p>}

          <input
            placeholder={product.scale}
            className={`${errors.scale && "danger"}`}
            name="scale"
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></input>
          <label>Date</label>

          {errors.date && <p className="danger">{errors.date}</p>}

          <input
            placeholder={product.date}
            className={`${errors.date && "danger"}`}
            type="date"
            name="date"
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></input>

          <label>Image file</label>
          {/* {errors.image && <p className="danger">{errors.image}</p>} */}

          <input
            // className={`${errors.image && "danger"}`}
            type="file"
            name="image"
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></input>
          <label>Audio file</label>
          {/* {errors.audio && <p className="danger">{errors.audio}</p>} */}

          <input
            // className={`${errors.audio && "danger"}`}
            type="file"
            name="audio"
            onChange={(e) => {
              handleInputChange(e);
            }}
          ></input>
          <label>Categories</label>

          <Select
            isMulti
            name="selectCat"
            options={cat}
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
        </div>
      </form>
      <div className="divider"></div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    STORE_ADMIN: state.adminReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchOneProduct(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PutForm);
