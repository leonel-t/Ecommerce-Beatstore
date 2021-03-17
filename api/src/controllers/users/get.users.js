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
     findByEmail(email){
       return User.findOne({
         where:{
           email:email
         }
       }).then(user => {
         let userInfo = {
           name: user.name,
           email: user.email,
           rol: user.rol
         }
         return userInfo
       }).catch(err=>{err.message})
     }

};