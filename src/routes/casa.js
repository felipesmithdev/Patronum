var express = require("express");
var router = express.Router();

var casaController = require("../controllers/casaController");

router.get("/:id_casa", function (req, res) {
  aquarioController.buscar_casa(req, res);
});

router.post("/cadastrar", function (req, res) {
  casaController.cadastrar(req, res);
})

module.exports = router;