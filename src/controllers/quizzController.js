var quizzModel = require("../models/quizzModel");

function inserir_quizz(req, res) {

    var id_usuario = req.params.id_pessoa;
    var pontos = req.params.pontos;
    var nome_quizz = req.params.nome_quizz;

    if (pontos == undefined) {
        res.status(400).send("Seu numero do livro está undefined!");
    } else if (id_usuario == undefined) {
        res.status(400).send("Seu id está indefinida!");
    }else if (nome_quizz == undefined){
        res.status(400).send("Nome do quizz está undefined")
    } else {

        quizzModel.adicionar_quizz(id_usuario, pontos, nome_quizz)
            .then(
                function (resultadoAutenticar) {
                  console.log(resultadoAutenticar)
                  res.status(200).json(resultadoAutenticar)
                }
            ).catch(
                function (erro) {
                    // console.log(erro);
                    // console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    inserir_quizz
}