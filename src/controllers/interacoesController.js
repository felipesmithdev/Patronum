var interacoesModel = require("../models/interacoesModel");

function interagir(req, res) {

    var id_usuario = req.params.id_pessoa;
    var livro = req.params.livro;

    if (livro == undefined) {
        res.status(400).send("Seu numero do livro está undefined!");
    } else if (id_usuario == undefined) {
        res.status(400).send("Seu id está indefinida!");
    }else {

        interacoesModel.interagir(id_usuario, livro)
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


function checar(req, res) {

    var id_usuario = req.params.id_pessoa;

    if (id_usuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else {

        interacoesModel.checar(id_usuario)
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
  interagir,
  checar
}