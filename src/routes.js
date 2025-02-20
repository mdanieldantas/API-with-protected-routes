const express = require("express");
const authController = require("./controllers/auth-controller");
const welcomeController = require("./controllers/welcome-controller");
const { optionalAuth, ensureAuth, ensureAdmin } = require("./middlewares/auth-middleware");
const usersController = require("./controllers/users-controller");

// criando um roteador express
const router = express.Router();

// rota register do authController
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login); 

router.get("/welcome", optionalAuth, welcomeController.welcome);

router.get("/users",ensureAuth, ensureAdmin,usersController.index);
router.get("/users/:id",ensureAuth, ensureAdmin,usersController.show);

module.exports = router;