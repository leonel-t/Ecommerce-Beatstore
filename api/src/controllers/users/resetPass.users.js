const { User } = require("../../db");

module.exports = {
    addCode: async (code, email) => {
        try {
            const existingUser = await User.findOne({
                where:{
                email: email 
                } 
            });
            existingUser.resetCode = code
            res.json('Password Reset Succesfull')
        } catch (err) {
                res.status(400).json(err);
              };
    },
    resetPass: async (code, pass) => {
        try {
            const existingUser = await User.findOne({
                where:{
                code: code
                } 
            });
            existingUser.password_virtual = pass
            res.json('Password Reset Succesfull')
        } catch (err) {
                res.status(400).json(err);
              };
    }
}