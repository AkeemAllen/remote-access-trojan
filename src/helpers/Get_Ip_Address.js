const { exec } = require("child_process");

exports.getIp = (deffered) => {
  let ip;
  exec(
    "echo $(ifconfig) > ips && grep -Eo 'inet [0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}' ips",
    (error, stdout, stderr) => {
      ip = stdout.split(" ")[2].trim();
      deffered.resolve(ip);
    }
  );
  return deffered.promise;
};
