const server = require("express").Router();
const putControler = require("../../controllers/products/put.products");
const fs = require("fs");
const path = require("path");
const asd = require("../../../");
module.exports = server;

server.put("/", (req, res, next) => {
  const {
    id,
    name,
    description,
    artist,
    price,
    bpm,
    scale,
    date,
    oldImage,
    oldAudio,
    editFiles
  } = req.body;
  var product;

  if (editFiles === "edit") {
    let url = path.join(__dirname, "../../../uploads/");
    let img = oldImage;
    let audio = oldAudio;
    let imgPath = url + img;
    let audioPath = url + audio;
    let aux = [];
        aux.push(imgPath)
        aux.push(audioPath)
    
        for (let i = 0; i < aux.length; i++) {
          console.log("DELET FILES")
          fs.unlinkSync(aux[i])
          console.log("FILE DELETE", aux[i])
        }

        const files = req.files;
        const imgToDb = files[0].filename;
        const audioToDb = files[1].filename;

        product = {
          name: name,
          description: description,
          artist: artist,
          price: price,
          bpm: bpm,
          scale: scale,
          date: date,
          image: imgToDb,
          audio: audioToDb,
        };

  }else{

    product = {
      name: name,
      description: description,
      artist: artist,
      price: price,
      bpm: bpm,
      scale: scale,
      date: date,
    };

  }

  putControler
    .editProduct(product, id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
});
