const users = require("../models/users");
const { findAll } = require("../models/users");


module.exports = {
    // GET /users
    index: (req, res) => {
        const allUsers = users.findAll();
        res.json(allUsers);
    },

    // GET /users/:id
show: (req, res) => {
    // pego a id dos parametros da requisição
    const {id} = req.params;
    // crio uma constante user e pego o usuario pelo id usando o metodo findById e passando o id da requisição como parametro
    const user = users.findById(id)
    if(!user) return res.status(404).json({message:"User not found"})
}

    // POST /users

    // DELETE /users/:id
};