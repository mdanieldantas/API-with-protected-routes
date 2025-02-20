const users = [
  {
    id: 1,
    name: "Isaac",
    email: "isaac@email.com",
    password: "12",
    role: "admin",
  },
  {
    id: 2,
    name: "Dan",
    email: "Dan@email.com",
    password: "12",
    role: "standard",
  },
];

module.exports = {
  // retona todos os usuários
  findAll: () => users,
  // retorna um usuário pelo id
  findById: (id) => users.find((user) => user.id === id),
  // retorna um usuário pelo email
  findByEmail: (email) => users.find((user) => user.email === email),
  // registra um novo usuário
  registerUser: (nome, email, password) => {
    // verifica se o usuário já está registrado
    const userAlreadyRegistered = users.find((user) => user.email === email);
    // caso seja, retorna null
    if (userAlreadyRegistered) return null;
    // caso contrário, registra o novo usuário
    const newUser = {
      id: Math.floor(Math.random() * 9999999).toString(),
      name: nome,
      email,
      password,
      role: "standard",
    };
    // adiciona o novo usuário ao array de usuários
    users.push(newUser);
    // retorna o novo usuário
    return newUser;
  },
  // registra um novo usuário com role
  createUser: (nome, email, password, role) => {
    // verifica se o usuário já está registrado
    const userAlreadyRegistered = users.find((user) => user.email === email);
    // caso seja, retorna null
    if (userAlreadyRegistered) return null;
    // caso contrário, registra o novo usuário
    const newUser = {
      id: (users.length + 1).toString(),
      name: nome,
      email,
      password,
      role,
    };
    // adiciona o novo usuário ao array de usuários
    users.push(newUser);
    // retorna o novo usuário
    return newUser;
  },
  // deleta um usuário pelo id
  deleteUser: (id) => {
    // verifica se o usuário existe
    const userIndex = users.findIndex((user) => user.id === id);
    // caso não exista, retorna null
    if (userIndex === -1) return null;
    // caso exista, deleta o usuário
    // o splice retorna um array com o elemento deletado
    const [deletedUser] = users.splice(userIndex, 1);
    return deletedUser;
  },
};
