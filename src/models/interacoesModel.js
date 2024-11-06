var database = require("../database/config");

function interagir(id_usuario, livro) {
  var instrucaoSql = `INSERT INTO interacoes (numero, fk_pessoa) VALUES (${livro}, ${id_usuario})`;

  console.log("executando o update sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function checar(id_usuario) {
  var instrucaoSql = `SELECT numero FROM interacoes WHERE fk_pessoa = ${id_usuario}`;

  console.log("executando o select sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  interagir,
  checar
}
