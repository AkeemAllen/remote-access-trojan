const inquirer = require("inquirer");
var clone = require("nodegit").Clone.clone;
const {PythonShell} =require('python-shell'); 

exports.hack = (exec) => {
  var fs = require('fs');
  var dir = './HatKey';

 if (!fs.existsSync(dir)){//make the 'HatKey' folder
     fs.mkdirSync(dir);
     clone("https://github.com/Naayouu/Hatkey", "./HatKey"); //clone repo to hatkey folder
    }

  const command = "cd ./HatKey && python HatKey.py" //open HatKey folder and run HatKey python script

  exec(command, (error, stdout, stderr) => {
    console.log("stdout", stdout);
    console.log("stderr", stderr);
    if (error !== null) {
      console.log(error);
    }
  });
  
};
