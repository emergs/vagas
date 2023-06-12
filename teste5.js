const { countViewsUser } = require("./teste1");
const data = require("./fakeData");

module.exports = function (req, res) {
  try {
    let times = 0;

    const id = parseInt(req.params.id);

    const userFound = data.find(user => user.id === id);

    if (!userFound) {
      res.status(404).send("Usuário não encontrado");
    }

    countViewsUser.forEach((elem) => {
      if (elem == id) {
        times++;
      }
    });

    res.send(`ID:[${userFound.id}] - O usuário ${userFound.name} foi lido ${times} vezes.`);
  }
  catch (error) {
    res.status(500).send("Erro interno do servidor");
  }
};