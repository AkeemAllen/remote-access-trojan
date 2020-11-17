const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "", //we might have to create a temp gmail account or something to have a username and password
                    //here for it to work
        pass: ""
    }
  });
  

const message = {
    from: 'test@test.com',
    to: 'chadoliver017@gmail.com',
    subject: 'Test email subject',
    html: '<h1>Test email header</h1><p>Test email body<b>',
    attachments: [
        { // Use a URL as an attachment
          filename: 'your-testla.png',
          path: 'src/assets/utechlogo.png'
      }
    ]
};

exports.send = (exec) => {
    transporter.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
}
