/* import {createServer} from 'node:http'
const server = createServer(() => {
    console.log('Server is running...')

})
server.listen(3000) 
import{ fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
const server = fastify()
server.get('/',() => {
    return 'Hello World'
})
server.get('/gay',() => {
    return 'Arhtur e gay e preguiçoso'
})
server.listen({
    port: 3000
})*/
import express from 'express';
import prisma from './prismaClient.js';

const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor em funcionamento!');
});

// Listar todos os ingressos
app.get('/ingressos', async (req, res) => {
    const ingressos = await prisma.ingresso.findMany(); // Busca todos os ingressos do banco
    res.json(ingressos);
});

// Criar um novo ingresso
app.post('/ingressos', async (req, res) => {
    const { jogo, preco, setor } = req.body;

    // Verificação de campos obrigatórios
    if (!jogo || !preco || !setor) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }

    // Criar novo ingresso no banco de dados
    const novoIngresso = await prisma.ingresso.create({
        data: { jogo, preco, setor }
    });

    res.status(201).json(novoIngresso);
});

// Obter ingresso pelo ID
app.get('/ingressos/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    // Buscar ingresso no banco
    const ingresso = await prisma.ingresso.findUnique({
        where: { id }
    });

    if (!ingresso) {
        return res.status(404).json({ mensagem: 'Ingresso não encontrado' });
    }

    res.json(ingresso);
});

// Atualizar um ingresso pelo ID
app.put('/ingressos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { jogo, preco, setor } = req.body;

    // Buscar o ingresso para atualizar
    const ingresso = await prisma.ingresso.findUnique({ where: { id } });

    if (!ingresso) {
        return res.status(404).json({ mensagem: "Ingresso não encontrado" });
    }

    // Atualizar no banco
    const ingressoAtualizado = await prisma.ingresso.update({
        where: { id },
        data: { jogo, preco, setor }
    });

    res.json(ingressoAtualizado);
});

// Deletar ingresso pelo ID
app.delete('/ingressos/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    // Verificar se o ingresso existe
    const ingresso = await prisma.ingresso.findUnique({ where: { id } });

    if (!ingresso) {
        return res.status(404).json({ mensagem: "Ingresso não encontrado" });
    }

    // Deletar ingresso
    await prisma.ingresso.delete({
        where: { id }
    });

    res.json({ mensagem: "Ingresso removido com sucesso!" });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

    


    
             
    
  
