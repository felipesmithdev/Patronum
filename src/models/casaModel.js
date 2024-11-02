var database = require("../database/config");

function buscar_casa(casa) {

  var instrucaoSql = `SELECT * FROM casa WHERE id_casa = ${casa}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(casa, nome) {
  
  var instrucaoSql = `INSERT INTO (nome, fk_pessoa) interacoes VALUES (${nome}, ${casa})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscar_casa,
  cadastrar
}
