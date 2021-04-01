const server = require("express").Router();
const Stripe = require("stripe");
const { STRIPE_KEY } = process.env;
const stripe = new Stripe(STRIPE_KEY);


//CUSTOMERS LIST 
server.get("/", async (req, res, next) => {
  const customers = await stripe.customers.list();
  
  return res.status(200).json(customers);
    
});

//CUSTOMERS By ID
server.get("/:idCustomer", async (req, res, next) => {
  const {idCustomer} = req.params
  const customers = await stripe.customers.retrieve(idCustomer);
  
  return res.status(200).json(customers);
    
});

module.exports = server;