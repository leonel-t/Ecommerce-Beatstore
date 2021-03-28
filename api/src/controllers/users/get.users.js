const { User } = require("../../db");

module.exports = {
    findAllUsers() {
        return User.findAll(); 
      },

     findUserById(id) {
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
           id:user.id,
           name: user.name,
           email: user.email,
           rol: user.rol
         }
         return userInfo
       }).catch(err=>{err.message})
     }

};