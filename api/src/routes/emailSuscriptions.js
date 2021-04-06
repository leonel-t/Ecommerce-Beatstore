
require('dotenv').config();
const { Newsletter } = require("../db");
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const log = console.log;
let emailList = []
// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || '1234' // TODO: your gmail password
    }
});
// transporter.use('compile', hbs({
//     viewEngine: 'express-handlebars',
//     viewPath: './src/views'
// }));

module.exports = {


    sendMail: function () {

        Newsletter.findAll({
            attributes: ["email"],
            raw: true
        }).then(list => {
            emailList = list.map(email => email.email)
            log(emailList)
            for (let i = 0; i < emailList.length; i++) {
                let mailOptions = {
                    from: 'asdf', // TODO: email sender
                    to: emailList[i], // TODO: email receiver
                    subject: 'Nodemailer - Test',
                    template: 'index',
                    text: "here are the newsletters",
                    // context: {
                    //     name: 'beatstars'
                    // }
                };

                // Step 3
                transporter.sendMail(mailOptions, (err, data) => {
                    if (err) {
                        return log('Error occurs' + err);
                    }
                    return log('Email sent!!!');
                });
            }
        })
    }

}