const inquirer = require("inquirer");
var clone = require("nodegit").Clone.clone;
const { PythonShell } = require("python-shell");

exports.hack = (exec, Q) => {
  var fs = require("fs");
  var dir = "./HatKey";
  var deferred = Q.defer();

  if (!fs.existsSync(dir)) {
    //make the 'HatKey' folder
    fs.mkdirSync(dir);
    clone("https://github.com/Naayouu/Hatkey", "./HatKey"); //clone repo to hatkey folder
  }

  const command = `python ./HatKey/HatKey.py`; //open HatKey folder and run HatKey python script

  exec(command, (error, stdout, stderr) => {
    return error
      ? deferred.reject(stderr + new Error(error.stack || error))
      : deferred.resolve(stdout);
  });

  return deferred.promise;
};
