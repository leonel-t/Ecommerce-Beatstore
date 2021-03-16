import './admin.css';
import React, {useState} from 'react';
import axios from "axios";

const Admin = () =>{

    const [input, setInput] = useState();
    const [imagen, setImagen] = useState();
    const [audio, setAudio] = useState();

const handleSubmit = (e)=>{

    e.preventDefault()

     const form = new FormData();
           form.append("name", input.name);
           form.append("description", input.description);
           form.append("artist",  input.artist);
           form.append("price", input.price);
           form.append("bpm", input.bpm);
           form.append("scale", input.scale);
           form.append("date", input.date);
           form.append("files",imagen[0]);
           form.append("files",audio[0]);

            const options = {
                method: 'POST',
                url: 'http://localhost:3001/products/',
                headers: {'Content-Type': 'multipart/form-data'},
                data: form
              };
              
              axios.request(options).then(function (response) {
                console.log(response.data);
              }).catch(function (error) {
                console.error(error);
              });
    }

    const handleInputChange = event => {
        if (event.target.name === "imagen") {
        setImagen(event.target.files)
        }else if (event.target.name === "audio") {
            setAudio(event.target.files)
        }else {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
        }
    };
    
    return (
        <main className="--admin--main">
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
              <label for="name"> Name</label>
              <input onChange={(e)=>{handleInputChange(e)}} type="text" name="name"></input>
              <label for="descripion"> Description</label>
              <input onChange={(e)=>{handleInputChange(e)}} type="text" name="description"></input>
              <label for="artist"> artist</label>
              <input onChange={(e)=>{handleInputChange(e)}} type="text" name="artist"></input>
              <label for="price"> price</label>
              <input onChange={(e)=>{handleInputChange(e)}} type="number" name="price"></input>
              <label for="bpm"> bpm</label>
              <input onChange={(e)=>{handleInputChange(e)}} type="number" name="bpm"></input>
              <label for="scale"> scale</label>
              <input onChange={(e)=>{handleInputChange(e)}} type="text" name="scale"></input>
              <label for="date"> date</label>
              <input onChange={(e)=>{handleInputChange(e)}} type="text" name="date"></input>
              <label for="files"> files</label>
              <input onChange={(e)=>{handleInputChange(e)}} type="file" name="imagen"></input>
              <input onChange={(e)=>{handleInputChange(e)}} type="file" name="audio"></input>
              <button type="submit">Enviar</button>
          </form>
        </main>
    )
}


  
  
export default Admin;