const nodemailer = require('nodemailer');
// const sesTransport = require('nodemailer-ses-transport');
//
// const transport = nodemailer.createTransport(sesTransport({
//     accessKeyId: "AKIAJMCF6YN32KT6QKCA",
//     secretAccessKey: "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",
//     rateLimit: 1 // do not send more than 5 messages in a second
// }));

const transport = nodemailer.createTransport({
    host: 'email-smtp.us-east-1.amazonaws.com',
    pool:true,
    port: 25,
    requireTLS: true,
    auth: {
        user: 'AKIAIQ2US7N6YYMBDOEQ',
        pass: 'Ak+HKUhwETGpUgcy8lNdPr3Dh+knqtgPusrHeYjm/y5c'
    }
});


// SMTP Username:AKIAJP4KVTFDN6DB5HHA
// SMTP Password:AnB2OAR3Mc5JTq674iL4+8geKSGkPlGf+89waxCzqvW1


function MailSender() {
}

MailSender.sendMail = function(options){
    transport.sendMail(options, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info);
    });
};

module.exports = MailSender;
