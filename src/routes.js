const express = require("express");
const authController = require("./controllers/auth-controller");

// criando um roteador express
const router = express.Router();

// rota register do authController
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login); // Corrigido aqui

module.exports = router;