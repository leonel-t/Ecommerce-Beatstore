const { User } = require("../../db");
const bcrypt = require('bcrypt');

module.exports = {

  addUser: async (user) => {

    const Exist = await User.findOne({
        where:{
          email:user.email
        }
    });

    if(Exist){
      return new Promise((res,rej)=>{
            res('user exist')
      })
    }

    return await User.create(user).then(user => user);  
  },


}