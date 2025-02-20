module.exports = {
    //GET /welcome
  
    // função welcome que serve para mostrar a mensagem de boas vindas
    welcome: (req, res) => {
      // usuario esta autenticado? Se sim retorna o name se não retorna visitante
      const displayName = req.authenticatedUser?.name ?? "visitante";
      res.json({ message: `Seja bem-vindo(a), ${displayName}!` });
    }
  };