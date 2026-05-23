# 🚀 Modulo-Nodes

API REST completa para cadastro de usuários, desenvolvida durante os estudos no **DevClub**.

## 📋 Sobre o projeto

Este projeto é uma API REST que permite criar, listar, atualizar e deletar usuários, utilizando Node.js com Express e banco de dados MongoDB através do Prisma ORM.

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Express](https://expressjs.com/) - Framework web para Node.js
- [Prisma ORM](https://www.prisma.io/) - ORM para banco de dados
- [MongoDB Atlas](https://www.mongodb.com/atlas) - Banco de dados na nuvem

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- Uma conta no [MongoDB Atlas](https://www.mongodb.com/atlas)

## 🚀 Como rodar o projeto

### 1. Instale as dependências
\`\`\`bash
npm install
\`\`\`

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:
\`\`\`env
DATABASE_URL="sua-url-de-conexao-do-mongodb-atlas"
\`\`\`

### 3. Gere o Prisma Client
\`\`\`bash
npx prisma generate
\`\`\`

### 4. Rode o servidor
\`\`\`bash
npm run dev
\`\`\`

O servidor estará rodando em `http://localhost:3000` ✅

## 📌 Rotas da API

### Usuários

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/usuarios` | Lista todos os usuários |
| `POST` | `/usuarios` | Cria um novo usuário |
| `PUT` | `/usuarios/:id` | Atualiza um usuário pelo ID |
| `DELETE` | `/usuarios/:id` | Deleta um usuário pelo ID |

### Exemplos de requisição

**POST /usuarios**
\`\`\`json
{
    "name": "João Silva",
    "email": "joao@email.com",
    "age": 25
}
\`\`\`

**PUT /usuarios/:id**
\`\`\`json
{
    "name": "João Silva Atualizado",
    "email": "joao@email.com",
    "age": 26
}
\`\`\`

## 📁 Estrutura do projeto

\`\`\`
aulas-node/
├── generated/          # Arquivos gerados pelo Prisma
├── node_modules/       # Dependências do projeto
├── prisma/
│   └── schema.prisma   # Schema do banco de dados
├── .env                # Variáveis de ambiente (não versionado)
├── .gitignore          # Arquivos ignorados pelo Git
├── package.json        # Dependências e scripts
└── server.js           # Arquivo principal da aplicação
\`\`\`

## 👨‍💻 Autor

Feito por **Kaelton** durante os estudos no [DevClub](https://devclub.com.br).

## 📄 Licença

Este projeto está sob a licença MIT.