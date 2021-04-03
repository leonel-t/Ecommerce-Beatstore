import React, { useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import laserSound from "../../../assets/audio/tab-sound.ogg"
//Internationalization
import { withTranslation } from 'react-i18next';
import swal from 'sweetalert';
import AdminNav from "../AdminNav/AdminNav";
import "./form.css";
import {serverUrl} from '../../../auxiliar/variables';

const Form = ({ t }) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      // Overwrittes the different states of border
      borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? "red" : "blue",
        background: "white"
      }
    }),
    menu: (base, state) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
      background: state.isFocused ? "yellow" : "green",
      "&:hover": {
        // Overwrittes the different states of border
        background: "blue"
      }
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
      background: "white",

    }),
    menuPortal: base => ({
      background: "red",
      "&:hover": {
        // Overwrittes the different states of border
        background: "blue"
      }
    }),
    multiValueLabel: base => ({
      background: "rgb(106,31,174)",
      color: "white",
      padding: "5px",
      borderRadius: "5px",
      outline: "none",
    }),
    multiValueRemove: base => ({
      background: "red",
      color: "white",
      padding: "4x",
      marginBottom: "10px",
      borderRadius: "5px"
    }),
    singleValue: base => ({
      background: "yellow",
      color: "black",
      "&:hover": {
        // Overwrittes the different states of border
        background: "blue"
      }
    }),
    group: base => ({
      background: "yellow",
      color: "black"
    })
  };

  const [categories, setCategories] = React.useState([]);
  const [image, setImage] = React.useState({});
  const [audio, setAudio] = React.useState();
  const [errors, setErrors] = React.useState({});
  const [input, setInput] = React.useState({});
  const [cat, setCat] = React.useState([]);
  const [alt, setAlt] = React.useState({})
  const [tone, setTone] = React.useState({})
  const handleAlt = (e) => {
    setAlt({
      ...alt,
      [e.target.name]: e.target.value
    })

  }
  useEffect(() => {
    const datos = async () => {
      return await fetch(`${serverUrl}/categories`)
        .then((response) => response.json())
        .then((optionCategories) => {
          return setCat(optionCategories);
        });
    };

    datos();
  }, []);
  const audioErr = new Audio(laserSound)
  let idProduct;
  function handleSubmit(e) {
    e.preventDefault();
    try {
      const form = new FormData();

      form.append("name", input.name);
      form.append("description", input.description);
      form.append("artist", input.artist);
      form.append("price", input.price);
      form.append("bpm", input.bpm);
      form.append("scale", alt.radName === undefined ? tone.value : tone.value + alt.radName);
      form.append("date", input.date);
      form.append("selectCat", cat.selectCat);

      form.append("files", image[0]);
      form.append("files", audio[0]);
      const options = {
        method: "POST",
        url: `${serverUrl}/products/`,
        headers: {
          "Content-Type": "multipart/form-data", "Cross-Origin-Opener-Policy": "same-origin",
          "token": localStorage.getItem("token")
        },
        data: form,

      };

      axios.request(options).then(function (response) {
        idProduct = response.data.id;
        categories.forEach((element) => {
          axios.post(`${serverUrl}/products/${idProduct}/category/${element.value}`).then((res) => console.log(res));
        });
      });
      swal({
        title: "item added",
        icon: "success",
        //buttons: true,
      })

    } catch (error) {
      audioErr.play()
      console.log("faltan inputs")
    }
  }
  const optionTone = [{
    value: "C",
    label: t("page.admin.forms.addBeats.notes.c")
  }, {
    value: "D",
    label: t("page.admin.forms.addBeats.notes.d")
  }, {
    value: "E",
    label: t("page.admin.forms.addBeats.notes.e")
  }, {
    value: "F",
    label: t("page.admin.forms.addBeats.notes.f")
  }, {
    value: "G",
    label: t("page.admin.forms.addBeats.notes.g")
  }, {
    value: "A",
    label: t("page.admin.forms.addBeats.notes.a")
  }, {
    value: "B",
    label: t("page.admin.forms.addBeats.notes.b")
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
      errors.name = t("page.admin.forms.addBeats.errors.inpName");
    }
    if (!input.description) {
      errors.description = t("page.admin.forms.addBeats.errors.inpDescription");
    }
    if (!input.artist) {
      errors.artist = t("page.admin.forms.addBeats.errors.inpArtist");
    }
    if (!input.price) {
      errors.price = t("page.admin.forms.addBeats.errors.inpPrice");
    }
    if (!input.bpm) {
      errors.bpm = t("page.admin.forms.addBeats.errors.inpBpm");
    }

    if (!input.date) {
      errors.date = t("page.admin.forms.addBeats.errors.inpDate");
    }
    var today = new Date();
    let msecsToday = today.getTime();
    var msecsProduct = Date.parse(input.date);
    msecsProduct > msecsToday
      ? (errors.date = t("page.admin.forms.addBeats.errors.inpValidDate"))
      : console.log("ok");
    if (!tone.value) {
      errors.tone = t("page.admin.forms.addBeats.errors.inpTone");
    }
    if (!image) {
      errors.image = t("page.admin.forms.addBeats.errors.inpImage");
    }
    if (!audio) {
      errors.audio = t("page.admin.forms.addBeats.errors.inpAudio");
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
    <>
    <AdminNav></AdminNav>
    <div className="subContainer">
      <h2>{t("page.admin.forms.addBeats.title")}</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="container formAdd"
        >

          <div className="column-1 box">
            <label>{t("page.admin.forms.addBeats.name")}</label>
            {errors.name && <p className="danger">{errors.name}</p>}

            <input
              className={`${errors.name && "danger"}`}
              name="name"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
            <label>{t("page.admin.forms.addBeats.description")}</label>

            {errors.description && <p className="danger">{errors.description}</p>}
            <textarea
              className={`${errors.description && "danger"}`}
              name="description"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></textarea>
            <label>{t("page.admin.forms.addBeats.artist")}</label>
            {errors.artist && <p className="danger">{errors.artist}</p>}

            <input
              className={`${errors.artist && "danger"}`}
              name="artist"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>

            <label>{t("page.admin.forms.addBeats.price")}</label>
            {errors.price && <p className="danger">{errors.price}</p>}

            <input
              className={`${errors.price && "danger"}`}
              name="price"
              type="number"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>

            <label>{t("page.admin.forms.addBeats.bpm")}</label>
            {errors.bpm && <p className="danger">{errors.bpm}</p>}

            <input
              className={`${errors.bpm && "danger"}`}
              name="bpm"
              type="number"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
          </div>
          <div className="column-2 box">
            <label>{t("page.admin.forms.addBeats.tone")}</label>
            {errors.tone && <p className="danger">{errors.tone}</p>}


            <Select
              name="selectTone"
              options={optionTone}
              onChange={setTone}
              styles={customStyles}
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
            <label>{t("page.admin.forms.addBeats.date")}</label>
            {errors.date && <p className="danger">{errors.date}</p>}

            <input
              id="dateClass"
              className={` ${errors.date && "danger"}`}
              type="date"
              name="date"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>

            <label>{t("page.admin.forms.addBeats.image")}</label>

            <input
              className="buttonInput"
              type="file"
              name="image"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <label>{t("page.admin.forms.addBeats.audio")}</label>

            <input
              className="buttonInput"
              type="file"
              name="audio"
              onChange={(e) => {
                handleInputChange(e);
              }}
            ></input>
            <label>{t("page.admin.forms.addBeats.categories")}</label>

            <Select
              isMulti
              name="selectCat"
              options={option}
              onChange={setCategories}
              styles={customStyles}
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
            {t("page.admin.forms.addBeats.addBeatButton")}
          </button>
        </div>
      </form>
      <div className="divider"></div>
    </div>
    </>
  );
}
export default withTranslation()(Form)