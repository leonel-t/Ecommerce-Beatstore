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
        console.log(__dirname+'\images')
        await Newsletter.findAll({
            attributes: ["email"],
            raw: true
        }).then(list => {
            emailList = list.map(email => email.email)
            log(emailList)
            
            let mailOptions = {
                from: 'beatstars@mail.com', // TODO: email sender
                to: emailList, // TODO: email receiver
                subject: 'Beatstore',
                template: 'Template_for_Nesletter',
                text: "here are the newsletters",
                context: {
                    name: 'beatstars'
                },
                attachments: [
                    { 
                    filename: 'logo.png', 
                    path: path.join(__dirname,'../../uploads/logo.png'),
                    cid: 'logo'
                },
                { 
                    filename: 'bg-login.jpg', 
                    path: path.join(__dirname,'../../uploads/bg-login.jpg'),
                    cid: 'login'
                },
                { 
                    filename: '1616179549514-505916721-500x500.jpg', 
                    path: path.join(__dirname,'../../uploads/1616179549514-505916721-500x500.jpg'),
                    cid: 'letsGo'
                }  
                
            ],
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