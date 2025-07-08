import express from 'express';
import { retornaCampeonatos, retornaCampeonatosAno, retornaCampeonatosId, retornaCampeonatoTime } from './service/service.js';
const app = express();

app.get('/campeonatos', async (req, res) => {
    let campeonatos;

    const ano = req.query.ano;
    const time = req.query.time;

    if(typeof ano === undefined && typeof time === undefined){
        campeonatos = await retornaCampeonatos();
    }else if(typeof ano !== 'undefined'){
        campeonatos = await retornaCampeonatosAno(ano);
    } else if(typeof time !== undefined ) {
        campeonatos = await retornaCampeonatoTime(time);
    }

    if(campeonatos.length > 0){
        res.json(campeonatos);
    } else {
        res.status(404).json({mensagem:"Nenhum campeonato encontrado"});
    }


});

app.get('/campeonatos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const campeonatos = await retornaCampeonatosId(id);

    if(campeonatos.length >0){
        res.json(campeonatos);
    } else {
        res.status(404).json({mensagem:"Nenhum campeonato encontrado"})
    }

});


app.listen(9000, async () => {
    const date = new Date();
    console.log(`Servidor iniciado em: ${date}`);
});