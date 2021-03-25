const server = require("express").Router();
const nodemailer = require("nodemailer");

server.post('/', (req, res, next) => {
    let data = req.body
    console.log(data)
    let smtpEmail = nodemailer.createTransport({
        service: 'gmail.com',
        port: 587,
        secure: false,
        auth:{
            user: 'noreply.beatstore@gmail.com',
            pass: 'Henry2020/2021'
        }
    });
    console.log('entre')
    let mailOptions = {
        from: 'noreply.beatstore@gmail.com',
        to: data.email,
        subject: 'Password Reset Code',
        html: `
        <h3>Hello BeatStore Client</h3>
        <p>Your password reset code is ${data.resetCode}. Don't share it with anyone, only insert it on the Reset Code box area to reset password</p>
        <p>If you are having trouble feel free to contact our support team at support.beatstore@gmail.com</p>
        `
    }

    smtpEmail.sendMail(mailOptions, error => {
        if(error){
            res.send(error)
        } else {
            res.send('Succes')
        }
    })
    
    smtpEmail.close();
})

module.exports = server;