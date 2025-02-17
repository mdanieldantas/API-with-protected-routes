const users = require("../models/users");
const jwt = require("jsonwebtoken");

const secretKey = "chave-secreta-jwt";

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
  login: (req, res) => {
    // pegar os dados do body da requisição que o usuario enviou
    const { email, password } = req.body;
    // verificar se os tipos de dados estao corretos
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      return res.status(400).json({ message: "Dados inválidos" });
    }
    // verificar se o usuario existe usando o email
    const user = users.findByEmail(email);
    if (!user) return res.status(404).json({ message: "User not found" });
    // verificar se a senha está correta
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload = { id: user.id, email: user.email };
    // gerar um token jwt
    const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });
    res.json({ token });
  },
};
