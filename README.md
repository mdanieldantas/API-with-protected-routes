# API-with-protected-routes

## Descrição
Este é um projeto prático para estudos em backend, focado na criação de uma API com rotas protegidas. O objetivo é aprender e aplicar conceitos de autenticação e autorização em uma aplicação Node.js utilizando Express.

## Link Online
API-with-protected-routes no GitHub

## Imagens do Projeto
![Projeto](./src/assets/images/image.png) 

## Funcionalidades
- 🔒 **Autenticação de Usuários**: Registro e login de usuários com geração de token JWT.
- 🛡️ **Rotas Protegidas**: Acesso a rotas restritas apenas para usuários autenticados.
- 👥 **Gestão de Usuários**: CRUD de usuários com diferentes níveis de permissão (admin e standard).
- 📧 **Validação de Campos**: Verificação de campos obrigatórios e formatos de dados.

## Tecnologias Utilizadas
- Node.js
- Express
- JSON Web Token (JWT)

## Como Executar o Projeto
Siga os passos abaixo para clonar, instalar dependências e executar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/mdanieldantas/API-with-protected-routes.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd API-with-protected-routes
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   npm run dev
   ```
   O servidor será iniciado em `http://localhost:3000`.

## Estrutura do Projeto
A estrutura de pastas e arquivos do projeto é organizada da seguinte forma:

```
API-with-protected-routes/
├── src/
│   ├── config/
│   │   └── environment.js
│   ├── controllers/
│   │   ├── auth-controller.js
│   │   ├── users-controller.js
│   │   └── welcome-controller.js
│   ├── middlewares/
│   │   └── auth-middleware.js
│   ├── models/
│   │   └── users.js
│   ├── routes/
│   │   └── routes.js
│   └── server.js
└── package.json
```

## Aprendizados
Durante o desenvolvimento deste projeto, foram adquiridos conhecimentos em:
- Implementação de autenticação e autorização com JWT.
- Criação de middlewares para proteção de rotas.
- Estruturação de projetos Node.js com Express.
- Boas práticas de desenvolvimento backend.

## Contribuições
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m 'Adiciona nova feature'
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato

**M Daniel Dantas**

- **GitHub:** [mdanieldantas](https://github.com/mdanieldantas)
- **LinkedIn:** [mdanieldantas](https://www.linkedin.com/in/mdanieldantas)
- **Portfólio:** [Portfólio de Daniel Dantas](https://danieldantasdev.vercel.app)
- **Email:** [contatomarcosdgomes@gmail.com](mailto:contatomarcosdgomes@gmail.com)
- **Currículo:** [Baixar Currículo](https://docs.google.com/document/d/1_FpPYPXiifH1B3BDWnJuNk05DQfddCOBqFxyT6Citg4/edit?usp=sharing)

