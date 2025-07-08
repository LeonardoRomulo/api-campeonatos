import express from 'express';
import { retornaCampeonatos, retornaCampeonatosId } from './service/service.js';
const app = express();

app.get('/campeonatos', async (req, res) => {
    const campeonatos = await retornaCampeonatos();
    res.json(campeonatos);
});

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campeonatos = await retornaCampeonatosId(id);
    res.json(campeonatos);
});

// app.get ('/campeonatso/?ano', async (req,res) => {

// })

// app.get('/campeonatos/?time', async (req,res) => {

// })

app.listen(9000, async () => {
    const date = new Date();
    console.log(`Servidor iniciado em: ${date}`);
});