import * as nodemailer from 'nodemailer';
import { BulkMail } from './smtp.interface';

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    name: 'prodazha-optom.ru',
    pool: true,
    rateLimit: 10,
    maxConnections: 1,
    maxMessages: 10,
    port: 587,
    auth: {
        user: 'user1',
        pass: 'password1'
    }
});

export class Transporter {
    //TODO sendBulkMail

    sendBulkMails(option:BulkMail) : void {



    }


    sendMail(mailOptions, callback) : any {
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return callback()
            }
            console.log('Message sent: ' + info.response);
        });
    }

}



// setup e-mail data with unicode symbols
// send mail with defined transport object
