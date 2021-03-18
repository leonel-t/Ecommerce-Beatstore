const { Categories } = require("../../db");

module.exports = {
    editCat: async (cat, id) => {
        try {
            console.log(cat, id)
            const existingCat = await Categories.findOne({
                where:{
                id: id
                } 
            });
            console.log(existingCat)
            existingCat.name = cat.name
            existingCat.description = cat.description
            await existingCat.save()

            return cat;
        }
        catch (err) {
            res.status(400).json(err);
          };
    }
}