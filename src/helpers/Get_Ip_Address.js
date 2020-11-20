const { exec } = require("child_process");

exports.getIp = (deffered) => {
  let ip;
  exec(
    "echo $(ip a) > ips.txt && grep -Eo 'inet [0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}' ips.txt",
    (error, stdout, stderr) => {
      ip = stdout.split(" ")[2].trim();
      deffered.resolve(ip);
    }
  );
  return deffered.promise;
};
