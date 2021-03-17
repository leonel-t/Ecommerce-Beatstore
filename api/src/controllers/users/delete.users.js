const { User } = require("../../db");

module.exports = {
    deleteUser: async (id) => {
        try {
            const existingUser = await User.findOne({
                where:{
                id: id
                } 
            });
            await existingUser.destroy()
            return 'Succesfully deleted User';
        }
        catch (err) {
            res.status(400).json(err);
          };
    }
}