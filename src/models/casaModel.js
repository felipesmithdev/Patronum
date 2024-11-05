var database = require("../database/config");

function atualizar_casa(id_usuario, fk_casa) {
  var instrucaoSql = `UPDATE pessoa SET fk_casa = ${fk_casa} WHERE id_pessoa = ${id_usuario}`;

  console.log("executando o update sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  atualizar_casa
}
