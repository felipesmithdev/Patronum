var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController");

router.post("/inserir_quizz/:id_pessoa/:pontos/:nome_quizz",  function (req, res){
    console.log(req.params.id_pessoa, 'id da pessoa')
    console.log(req.params.pontos, 'pontuação')
    console.log(req.params.nome_quizz, 'nome do quizz')
    quizzController.inserir_quizz(req,res);
  })

module.exports = router;