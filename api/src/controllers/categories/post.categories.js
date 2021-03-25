const { Categories } = require("../../db");
module.exports = {
    addCat: async (category) => {
      let { name, description } = category;
      return await Categories.create({
        name,
        description,
      }).then(category =>{
        return category;
      });       
    },
}; 