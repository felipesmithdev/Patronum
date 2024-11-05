var express = require("express");
var router = express.Router();

var casaController = require("../controllers/casaController");

// router.get("/:id_casa", function (req, res) {
//   aquarioController.buscar_casa(req, res);
// });

// router.post("/cadastrar", function (req, res) {
//   casaController.cadastrar(req, res);
// })

router.put("/atualizar_casa/:id_pessoa/:fk_casa",  function (req, res){
  console.log(req.params.id_pessoa, 'id da pessoa')
  console.log(req.params.fk_casa, 'id da casa');
  casaController.atualizar_casa(req,res);
})


module.exports = router;