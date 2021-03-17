const server = require("express").Router();
require('../middlewares/passport.middleware');

module.exports = server;


// server.get('/', (req, res) => {
//         console.log(req.session)
    
//         delete req.session((err) =>  {
//             if(err) {
//                 console.log(err);
//             } else {
//                 res.status(200).json("Finished Session");
//             }
//       })
//     });