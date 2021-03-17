const { User } = require("../../db");

module.exports = {
    editUser: async (user) => {
        var existingUser = await User.findOne({
            where:{
              email:user.email
            }
        });

        if(existingUser){
            var editedUser = {
                email: user.email,
                password: user.password,
                name: user.name
            }
            existingUser = editedUser;
        }
    }
}