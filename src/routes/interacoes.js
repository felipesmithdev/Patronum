var express = require("express");
var router = express.Router();

var interacoesController = require("../controllers/interacoesController");

router.post("/interagir/:id_pessoa/:livro",  function (req, res){
  console.log(req.params.id_pessoa, 'id do usuario');
  console.log(req.params.livro, 'numero do livro');
  interacoesController.interagir(req,res);
})

router.get("/checar/:id_pessoa",  function (req, res){
  console.log(req.params.id_pessoa, 'id do usuario');
  interacoesController.checar(req,res);
})

module.exports = router;