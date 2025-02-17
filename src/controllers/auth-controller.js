const users = require("../models/users");

module.exports = {
    //post /auth/register
    register: (req, res) => {
      // pegar os dados do body da requisição que o usuario enviou
      const { name, email, password } = req.body;
      if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string"
      ) {
        return res.status(400).json({ message: "Dados inválidos" });
      }
      const registeredUser = users.registerUser(name, email, password);
      if (!registeredUser) {
        return res.status(400).json({ message: "Email already in use" });
      }
        res.status(201).json(registeredUser);
    },
    //post /auth/login
    login: (req, res) => {},
  };