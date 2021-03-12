const { Product, Categories } = require("../../db");
module.exports = {
    addCat: async (params) => {
        const { name, description } = params;
    
        const cat = await Categories.create({
          name,
          description,
       
        });
    
        return cat;
      },
    
}