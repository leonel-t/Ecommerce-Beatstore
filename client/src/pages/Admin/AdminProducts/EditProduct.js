import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "./form.css";
import Select from "react-select";
import axios from "axios";
import "../../Product/product.css";
import { fetchOneProduct } from "../../../stores/admin/admin.actions";
import AdminNav from "../AdminNav/AdminNav";

const PutForm = ({ STORE_ADMIN, fetchProduct }) => {
  const storeProduct = STORE_ADMIN.product;

  const { id } = useParams();
  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct, id]);

  const [categories, setCategories] = React.useState([]);
  const [image, setImage] = React.useState({});
  const [audio, setAudio] = React.useState();
  const [errors, setErrors] = React.useState({});
  const [cat, setCat] = React.useState([]);
  const [alt, setAlt] = React.useState({})
  const [tone, setTone] = React.useState({})
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
  const handleAlt = (e) => {
    setAlt({
      ...alt,
      [e.target.name]: e.target.value
    })

  }
  let idProduct;
  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData();
    form.append("name", input.name);
    form.append("description", input.description);
    form.append("artist", input.artist);
    form.append("price", input.price);
    form.append("bpm", input.bpm);
    form.append("scale", tone.value + alt.radName);
    form.append("date", input.date);
    // form.append("selectCat", cat.selectCat);

    form.append("files", image[0]);
    form.append("files", audio[0]);

    const options = {
      method: "POST",
      url: "http://localhost:3001/products/",
      headers: {
        "Content-Type": "multipart/form-data", "Cross-Origin-Opener-Policy": "same-origin"
      },
      data: form,

    };

    axios.request(options).then(function (response) {
      idProduct = response.data.id;
      console.log(categories);
      categories.forEach((element) => {
        console.log(element);
        axios
          .post(
            `http://localhost:3001/products/${idProduct}/category/${element.value}`
          )
          .then((res) => console.log(res));
      });
    });
  }
  const optionTone = [{
    value: "C",
    label: "C"
  }, {
    value: "D",
    label: "D"
  }, {
    value: "E",
    label: "E"
  }, {
    value: "F",
    label: "F"
  }, {
    value: "G",
    label: "G"
  }, {
    value: "A",
    label: "A"
  }, {
    value: "B",
    label: "B"
  }]
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
    var today = new Date();
    let msecsToday = today.getTime();
    var msecsProduct = Date.parse(input.date);
    msecsProduct > msecsToday
      ? (errors.date = "insert a valid date!")
      : console.log("ok");
    if (!tone.value) {
      errors.tone = "tone is required";
    }
    if (!image) {
      errors.image = "image is required";
    }
    if (!audio) {
      errors.audio = "audio is required";
    }
    return errors;
  }
  var option;

  if (cat && cat.length > 0) {
    option = cat.map((c) => {
      return {
        value: c.id,
        label: c.name,
      };
    });
  }
  return (
    <div className="subContainer">
      {console.log(product)}
      <AdminNav />
      <h2>Complete product data:</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="container formAdd"
        >

          <div className="column-1 box">
            <label>Name</label>
            {errors.name && <p className="danger">{errors.name}</p>}

            <input
              placeholder={product.name}
              className={`${errors.name && "danger"}`}
              name="name"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <label>Description</label>

            {errors.description && <p className="danger">{errors.description}</p>}
            <textarea
              placeholder={product.description}
              className={`${errors.description && "danger"}`}
              name="description"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></textarea>
            <label>Artist</label>
            {errors.artist && <p className="danger">{errors.artist}</p>}

            <input
              placeholder={product.artist}
              className={`${errors.artist && "danger"}`}
              name="artist"
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
          <div className="column-2 box">
            <label>Tone</label>
            {errors.tone && <p className="danger">{errors.tone}</p>}


            <Select
              placeholder={product.scale}

              name="selectTone"
              options={optionTone}
              onChange={setTone}
            // styles={customStyles}
            />
            <div className="radioTone">
              <div className="radioColumn" >
                <label for="indoor">natural</label>
                <input type="radio" name="radName" value="" />
              </div>
              <div className="radioColumn" >
                <label for="indoor"># </label>
                <input type="radio" name="radName" value="#" onChange={handleAlt} />
              </div>
              <div className="radioColumn">
                <label >b</label>
                <input type="radio" name="radName" value="b" onChange={handleAlt} />
              </div>
            </div>
            <label>Date</label>
            {errors.date && <p className="danger">{errors.date}</p>}

            <input
              placeholder={product.date}

              id="dateClass"
              className={` ${errors.date && "danger"}`}
              type="date"
              name="date"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>

            <label>Image file</label>

            <input
              className="buttonInput"
              type="file"
              name="image"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <label>Audio file</label>

            <input
              className="buttonInput"
              type="file"
              name="audio"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <label>Categories</label>

            <Select
              placeholder={product.categories}
              isMulti
              name="selectCat"
              options={option}
              onChange={setCategories}
            // styles={customStyles}
            />
          </div>
        </div>
        <div className="divButton">

          <button
            className="submitbuton"
            type="submit"
            onChange={(e) => {
              handleInputChange(e);
            }}
          >
            Save beat
          </button>
        </div>
      </form>
      <div className="divider"></div>
    </div>
  );
}

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
