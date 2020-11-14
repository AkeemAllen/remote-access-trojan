const inquirer = require("inquirer");

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
    console.log(answers);
  });
