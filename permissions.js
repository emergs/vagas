const data = require("./fakeData");

module.exports = function (req, res, next) {
  try {
    //pegar o param da req - este é o id a ser atualizado ou deletado
    const id = parseInt(req.params.id);

    //pegar a query da req - este é o id do responsável pela ação
    const actionResponsibleId = parseInt(req.query.id);

    //verificar se os ids existem
    const userFound = data.find(user => user.id === id);
    const userResponsible = data.find(user => user.id === actionResponsibleId);
    if (!userFound || !userResponsible) {
      res.status(404).send("Usuário não encontrado");
    }

    //verificar se o responsavel tem permissao para atualizar ou excluir
    else if (userResponsible?.admin === false && id !== actionResponsibleId) {
      res.status(403).send("Você não tem permissão para realizar essa ação");
    }
    //executar a ação
    else {
      next();
    }
  }
  catch (error) {
    res.status(500).send("Erro interno do servidor");
  }
}
