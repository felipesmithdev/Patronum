var database = require("../database/config");

function adicionar_quizz(id_usuario, pontos, nome_quizz) {
  var instrucaoSql = `INSERT INTO quizzes (nome, pontuacao, fk_pessoa1) VALUES ('${nome_quizz}', ${pontos}, ${id_usuario})`;

  console.log("executando o insert sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
    adicionar_quizz
  }