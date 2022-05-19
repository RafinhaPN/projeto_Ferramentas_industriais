const express = require('express');
const routes = express.Router();

const Ferramentas  = require('../controller/FerramentasController');

routes.get('/pastilha',Ferramentas.listar);
routes.get('/pastilha/:id',Ferramentas.detalhes);
routes.post('/pastilha',Ferramentas.cadastrar);
routes.put('/pastilha/:id',Ferramentas.atualizar);

//teste
routes.get('/pastilhas',Ferramentas.classe);
//routes.get('/pastilhas',Ferramentas.quantidade);

//routes.get('/pastilhas',Ferramentas.marca);

module.exports = routes;