const { User } = require("../../db");

module.exports = {
    findAllUsers() {
        return User.findAll(); 
      },

      findById(id) {
        return User.findOne({
          where: { id: id }
        });
      },

};