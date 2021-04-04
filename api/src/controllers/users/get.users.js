const { User, Messages } = require("../../db");

module.exports = {
    findAllUsers() {
        return User.findAll(); 
      },

     findUserById(id) {
        return User.findOne({
          where: {
            id: id
          },
          include: [
            {
              model: Messages,
              as: "messages",
            },
          ],
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
           rol: user.rol,
           subscription: user.subscription,
           online: user.online,
           freeBeats: user.freeBeats,
           image:user.image
         }
         return userInfo
       }).catch(err=>{err.message})
     }

};