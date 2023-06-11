var data = require("./fakeData");

module.exports = function (req, res) {
  const id = data.length + 1;
  const name = req.body.name;
  const job = req.body.job;

  const newUser = {
    id: id,
    name: name,
    job: job,
  }

  data.push(newUser)

  res.send(newUser);

};