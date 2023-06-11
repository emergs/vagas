var data = require("./fakeData");

const getUser = (req, res, next) => {

  const id = parseInt(req.params.id);

  res.send(data.find(user => user.id === id));
};

const getUsers = (req, res, next) => {

  res.send(data);

};

module.exports = {
  getUser,
  getUsers
};