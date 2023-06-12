const data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const id = parseInt(req.params.id);

    const userData = data.find(user => user.id === id);

    if (!userData) {
      res.status(404).send("Usuário não encontrado");
    }

    const indexUser = data.indexOf(userData);

    const userEdited = {
      id: id,
      name: req.body.name,
      job: req.body.job,
      admin: userData.admin === false ? false : true
    };

    data[indexUser] = userEdited;

    res.status(200).send(userEdited);
  }
  catch (error) {
    res.status(500).send("Erro interno do servidor");
  }
};