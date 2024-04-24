const express = require('express');
const PersonagemDAO = require('../daos/PersonagemDAO.js');
const router = express.Router();
const dao = new PersonagemDAO();

router.get('/', async (req, res) => {
    try {
        let dados = await dao.findAll();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        let dados = await dao.find(req.params.id);
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.post('/', async (req, res) => {
    try {
        let dados = await dao.create(req.body);
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let dados = await dao.delete(req.params.id);
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        let dados = await dao.update(req.params.id, req.body);
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

module.exports = router;
