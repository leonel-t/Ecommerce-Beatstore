const { Categories } = require("../../db");

module.exports = {
    editCat: async (cat, id) => {
        return await Categories.update(cat, {
            where: { id: parseInt(id) },
        }).then((cat) => cat);
    },

    editCat2: async (cat, id) => {
        try {
            const existingCat = await Categories.findOne({
                where: {
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