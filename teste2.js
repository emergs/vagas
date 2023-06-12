var data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const id = data.length + 1;
    const name = req.body.name;
    const job = req.body.job;
    const admin = req.body.admin;

    if (name === undefined) {
      res.status(400).send("O campo name é obrigatório <br><br> Ex: name: 'João Oliveira'");
    }

    if (job === undefined) {
      res.status(400).send("O campo job é obrigatório <br><br> Ex: job: 'Desenvolvedor'");
    }

    if (admin === undefined) {
      res.status(400).send("O campo admin é obrigatório <br><br> Ex: admin: true");
    }

    const newUser = {
      id: id,
      name: name,
      job: job,
      admin: admin
    };

    data.push(newUser);

    res.send(newUser);
  }
  catch (error) {
    res.status(500).send("Erro interno do servidor");
  }
};