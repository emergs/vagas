var data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const id = parseInt(req.params.id);
    const userData = data.find(user => user.id === id);

    if (!userData) {
      res.status(404).send("Usuário não encontrado");
    }
    else {
      const indexUser = data.indexOf(userData);

      data.splice(indexUser, 1);
      res.status(200).send("Usuário deletado com sucesso");
    }
  }
  catch (error) {
    res.status(500).send("Erro interno do servidor");
  }
};