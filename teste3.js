var data = require("./fakeData");

module.exports = function (req, res) {
  const id = parseInt(req.params.id);
  const userData = data.find(user => user.id === id);

  if (userData) {
    const indexUser = data.indexOf(userData);

    data.slice(indexUser, 1);

    res.status(204);
  }

  res.status(404).send("Usuário não encontrado");


};