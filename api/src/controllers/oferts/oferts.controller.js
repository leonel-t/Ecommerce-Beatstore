const { Oferts, Product } = require("../../db");

module.exports = {
  createOfert: async (idProduct,ofert) => {
    return await Oferts.create(ofert).then((ofert) => {
      return Product.findByPk(idProduct).then((Product) => {
        Oferts.findByPk(ofert.id).then((newOfert) => {
          var ofertAdded = newOfert;
            return Product.addOfert(newOfert).then(()=>{
              return ofertAdded.dataValues;
            });            
          }).catch((error) => {
            return res.json(error);
          });
       })
    });
  },
  getOferts: async () => {
    return await Oferts.findAll().then((oferts) => oferts);
  },
  getOfertById: async (ofertId) => {
    return await Oferts.findByPk(ofertId).then((ofert) => ofert);
  },
  editOfert: async (ofertId, ofert) => {
    return await Oferts.update(ofert, {
      where: {
        id: ofertId,
      },
    }).then((ofert) => ofert);
  },
  deleteComment: async (ofertId) => {
    return await Oferts.destroy({
      where: {
        id: ofertId,
      },
    }).then((ofert) => {
      return ofert === 1 ? "Ofert delete succefull" : "ofert dont´s exist"
    });
  },
};
