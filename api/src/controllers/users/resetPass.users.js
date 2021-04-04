const { User } = require("../../db");

module.exports = {
    addCode: async (code, email) => {
        try {
            console.log('entre')
            const existingUser = await User.findOne({
                where:{
                email: email 
                } 
            });
            existingUser.resetCode = code
            existingUser.save()
        } catch (err) {
                console.log(err)
              };
    }
}