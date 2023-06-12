const data = require("./fakeData");

const countViewsUser = [];

const getUser = (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    countViewsUser.push(id);

    res.send(data.find(user => user.id === id));
  }
  catch (error) {
    res.status(500).send("Erro interno do servidor");
  }
};

const getUsers = (req, res, next) => {
  try {
    res.send(data);
  }
  catch (error) {
    res.status(500).send("Erro interno do servidor");
  }

};

module.exports = {
  getUser,
  getUsers,
  countViewsUser
};