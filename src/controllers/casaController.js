var casaModel = require("../models/casaModel");

function atualizar_casa(req, res) {
    var id_usuario = req.params.id_pessoa;
    var fk_casa = req.params.fk_casa;

    if (fk_casa == undefined) {
        res.status(400).send("Sua casa está undefined!");
    } else if (id_usuario == undefined) {
        res.status(400).send("Seu id está indefinida!");
    }else {

        casaModel.atualizar_casa(id_usuario, fk_casa)
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
  atualizar_casa
}