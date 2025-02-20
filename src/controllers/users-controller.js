const users = require("../models/users");
const { findAll } = require("../models/users");


module.exports = {
    // GET /users
    index: (req, res) => {
        const allUsers = users.findAll();
        res.json(allUsers);
    },

    // GET /users/:id


    // POST /users

    // DELETE /users/:id
};