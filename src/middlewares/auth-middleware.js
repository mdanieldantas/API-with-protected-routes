const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/environment");
const users = require("../models/users");

module.exports = {
  // verifica se o usuario esta autenticado
  optionalAuth: (req, res, next) => {
    // pega o header authorization da requisição
    const authHeader = req.headers.authorization;
    // se não tiver header authorization chama o next
    if (!authHeader) {
      next();
      // se tiver header authorization, verifica se o token é valido
    } else {
      const token = authHeader.split(" ")[1];
      // verifica se o token é valido
      try {
        const { id } = jwt.verify(token, JWT_SECRET);
        const user = users.findById(id);
        // se o usuario nao existir retorna um erro
        if (!user) return res.status(404).json({ message: "User not found" });

        // se o usuario existir, adiciona o usuario autenticado ao request
        req.authenticatedUser = user;
        next();

        // se o token nao for valido retorna um erro
      } catch (error) {
        return res.status(401).jason({ message: "Invalid token!" });
      }
    }
  },
};
