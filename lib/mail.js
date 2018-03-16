'use strict';
const nodemailer = require('nodemailer');
const config = require('config').nodemailer;

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.user,
        pass: config.password
    }
})


function sendMail({ from, to, subject, text, html }) {
   
    const mailOptions = {
        from: '"No Reply" <noreply@vertisize.com>', // sender address
        to: to, // list of receivers, Can Be arry of emails or coma seperated list of emails(as string)..
        subject: subject, // Subject line
        text: text, // plain text body
        html: html // html body
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}

module.exports = sendMail


