const data = require("./fakeData");

module.exports = function (req, res) {

  const id = parseInt(req.params.id);

  const userData = data.find(user => user.id === id);

  if (!userData) {
    res.status(404).send("Usuário não encontrado")
  }

  const indexUser = data.indexOf(userData);

  const userEdited = {
    id: id,
    name: req.body.name,
    job: req.body.job
  }

  data[indexUser] = userEdited;

  res.status(200).send(userEdited)

};