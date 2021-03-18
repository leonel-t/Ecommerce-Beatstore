const { Categories } = require("../../db");

module.exports = {
    deleteCat: async (id) => {
        try {
            const existingCat = await Categories.findOne({
                where:{
                id: id
                } 
            });
            await existingCat.destroy()
            return 'Succesfully deleted Category';
        }
        catch (err) {
            res.status(400).json(err);
          };
    }
}