/*  INSTALANDO  SERVIDOR.JS

ANTIGO 
const expres = require("express")


NOVO 
import express from 'express'

// REQ request
// RES response
// cada alteração, precisa atualizar no terminal 

*/

import express from 'express'; // importa o express, que é um framework para criar servidores web em Node.js, desse jeito importa o express por completo, quando nao coloca os bigodinhos, ele importa tudo, ou seja, o express inteiro, e ai voce pode usar as funcoes do express, como app.get, app.post, etc.
import { PrismaClient } from "./generated/prisma/client.js" // importa o prisma client, ecoloca os bigodinhos traz so o que eu quero, nesse caso o client.js que tem as funcoes para acessar o banco de dados
import cors from 'cors' // importa o cors, que é um middleware para permitir que o frontend acesse o backend, sem o cors, o frontend nao consegue acessar o backend, porque eles estao em dominios diferentes, ou seja, o frontend esta rodando em localhost:3000 e o backend esta rodando em localhost:3001, entao o cors permite que o frontend acesse o backend
const prisma = new PrismaClient() // instancia do prisma client
const app = express();
app.use(express.json()); // serve para transformar o corpo da requisicao em json
app.use(cors()) // serve para usar o cors, ou seja, para permitir que o frontend acesse o backend, sem o cors, o frontend nao consegue acessar o backend, porque eles estao em dominios diferentes, ou seja, o frontend esta rodando em localhost:3000 e o backend esta rodando em localhost:3001, entao o cors permite que o frontend acesse o backend


app.get('/usuarios', async (req, res) => {  // metodo GET
    const users = await prisma.user.findMany() // metodo para encontrar todos os usuarios no banco de dados
    res.status(200).json(users) // retorna o banco de dados


})//Aqui estou pegando todos os usuarios criados no banco de dados, e retornando para o cliente, 200 = ok 



app.post('/usuarios', async (req, res) => { //async diz que a funcao e assincrona, ou seja, ela pode demorar para ser executada
    const user = await prisma.user.create({ // metodo para criar um usuario no banco de dados
        // await = espera a resposta do banco de dados para continuar a execucao do codigo
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age

        }
    }) // Aqui eu estou criando um usuario


    res.status(201).json(user) // retorna o usuario criado para o cliente, 201 = criado
})

app.put('/usuarios/:id', async (req, res) => { //async diz que a funcao e assincrona, ou seja, ela pode demorar para ser executada
    const user = await prisma.user.update({ // metodo para atualizar um usuario no banco de dados, aqui eu preciso passar o id do usuario que eu quero atualizar, e os dados que eu quero atualizar
        // await = espera a resposta do banco de dados para continuar a execucao do codigo
        where: {
            id: req.params.id  // aqui eu pego o id do usuario que eu quero atualizar, e passo para o prisma, para ele saber qual usuario eu quero atualizar
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age

        }
    }) // Aqui eu estou criando um usuario


    res.status(201).json(user) // retorna o usuario criado para o cliente, 201 = criado
})


app.delete('/usuarios/:id', async (req, res) => { // metodo para deletar um usuario no banco de dados, aqui eu preciso passar o id do usuario que eu quero deletar
    await prisma.user.delete({
        where: {
            id: req.params.id // aqui eu pego o id do usuario que eu quero deletar, e passo para o prisma, para ele saber qual usuario eu quero deletar
        }
    })

    //res.status(200).send() // retorna uma resposta vazia para o cliente, 204 = sem conteudo
    res.status(200).json({ message: 'Usuario deletado com sucesso' }) // retorna uma mensagem para o cliente, 200 = ok
})


// req= requisicao
// res= resposta / Quando o backend recebe uma requisicao, ele envia uma resposta

app.listen(3000)

// http://localhost:3000/usuarios - GET
// http://localhost:3000/usuarios - POST
