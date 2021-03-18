const server = require("express").Router();




server.post("/", (req, res) => {
    console.log(req)
    if (req.isAuthenticated()) {
      req.logout();
      res.status(200).json({ msg: "logout successful" });
    }
    res.status(200).json({ msg: "no authenticated user" });
  });
  
module.exports = server;