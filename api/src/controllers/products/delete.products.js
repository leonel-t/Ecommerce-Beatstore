const { Product, Categories } = require('../../db');
module.exports = {
   async deleteById(id){
     const deletedProd = await Product.destroy({
            where: { id: id },
            include: [
                {
                    model: Categories
                }
            ]
        })
        console.log("RESPUESTA A DELETE",deletedProd)
        return deletedProd;
    }
}
