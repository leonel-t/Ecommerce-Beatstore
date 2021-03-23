const { User } = require("../../db");

module.exports = {
    editUser: async (user, id) => {
        try {
            const existingUser = await User.findOne({
                where:{
                id: id
                } 
            });
            existingUser.name = user.name
            existingUser.email = user.email
            existingUser.password_virtual = user.password
            await existingUser.save()

            return user;
        }
        catch (err) {
            res.status(400).json(err);
          };
    }
}