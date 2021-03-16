const { User } = require("../../db");

module.exports = {
    findAllUsers() {
        console.log(users.every(user => user instanceof User))
        console.log("All users:", JSON.stringify(users, null, 2))
        return User.findAll(); 
      }

};