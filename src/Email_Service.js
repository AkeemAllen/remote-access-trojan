const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "johnbrowncsg@gmail.com", //we might have to create a temp gmail account or something to have a username and password
                    //here for it to work
        pass: "Johnbrowncsg123"
    }
  });
  



exports.send = (email) => {
    var message =  {
        from: 'test@test.com',
        to: email,
        subject: 'SCIT Past Papers',
        html: '<p>Greetings fellow SCIT Bulldogs! Finals are just around the corner, and we know how' +
         'stressful prepartions may be. Attached is a link with a few past papers to help get you started as well as' +
         'a grade calculator to help you determine your current grades as well as how much you will need to pass a course'+ 
         ' https://drive.google.com/file/d/19v6Gcr-nm8ii4MeIFo6x6to0iYfE44Le/view?usp=sharing<p>',
        // attachments: [
        //     { // Use a URL as an attachment
        //       filename: 'your-testla.png',
        //       path: 'src/assets/utechlogo.png'
        //   }
        // ]
    };

    transporter.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
}
