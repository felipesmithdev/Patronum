var database = require("../database/config");

function trazer_dados() {
    console.log("to na model")
  var instrucaoSql = `
    select count(id_casa) as alunos, casa.nome as casa 
	from casa 
	join pessoa on pessoa.fk_casa = casa.id_casa
    group by casa.nome;`;

  console.log("executando o select sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function trazer_dados2() {
    console.log("to na model")
  var instrucaoSql = `select count(id) as quantidade,
	case 
	WHEN numero = 1 THEN 'Pedra Filosofal'
    WHEN numero = 2 THEN 'Câmara Secreta'
    WHEN numero = 3 THEN 'Prisioneiro de Azkaban'
    WHEN numero = 4 THEN 'Cálice de Fogo'
    WHEN numero = 5 THEN 'Ordem da Fênix'
    WHEN numero = 6 THEN 'Enigma do Principe'
    WHEN numero = 7 THEN 'Relíquias da Morte'
    WHEN numero = 8 THEN 'Criança Amaldiçoada'
    ELSE ''
    END AS 'nome'
	from interacoes 
    where numero = 1 or numero = 2 or numero = 3 or numero = 4 or numero = 5 or numero = 6 or numero = 7 or numero = 8 
    group by numero 
    order by numero;`;

  console.log("executando o select sql: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function dados_kpi1(){
  console.log("to dentro do model");
  var instrucaoSql = `SELECT count(id_pessoa) as usuarios FROM pessoa;`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);

}
function dados_kpi2(){
  console.log("to dentro do model");
  var instrucaoSql = `SELECT count(fk_casa) as alunos, casa.nome as casa
	FROM pessoa
    JOIN casa
    on fk_casa = id_casa
    where fk_casa = 1 or fk_casa = 2 or fk_casa = 3 or fk_casa = 4
    GROUP by casa.nome, casa.id_casa;`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);

}


function dados_kpi3(){
  console.log("to dentro do model");
  var instrucaoSql = `select truncate(avg(timestampdiff(YEAR, dt_nasc, curdate())),0) as idade FROM pessoa;`

  console.log('executando o select \n' + instrucaoSql);
  return database.executar(instrucaoSql);

}



module.exports = {
    trazer_dados,
    trazer_dados2,
    dados_kpi1,
    dados_kpi2,
    dados_kpi3
  }
  