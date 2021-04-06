
require('dotenv').config();
const { Newsletter } = require("../db");
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const log = console.log;
const path = require("path");
let emailList = []
// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || '1234' // TODO: your gmail password
    }
});
transporter.use('compile', hbs(
    {
        viewEngine: {
            partialsDir: "./views",
            defaultLayout: ""
        },
        viewPath: "./views",
        extName: ".hbs"
    }

));
module.exports = {

    sendMail: async function () {

        await Newsletter.findAll({
            attributes: ["email"],
            raw: true
        }).then(list => {
            emailList = list.map(email => email.email)
            log(emailList)
            let mailOptions = {
                from: 'asdf', // TODO: email sender
                to: emailList, // TODO: email receiver
                subject: 'Nodemailer - Test',
                template: 'index',
                text: "here are the newsletters",
                context: {
                    name: 'beatstars'
                }
            };

            // Step 3
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    return log('Error occurs' + err);
                }
                return log('Email sent!!!');
            });

        })
    }

}